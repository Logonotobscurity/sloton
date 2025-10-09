
'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import { ContactFormEmail } from '@/emails/contact-form-email';
import { EnrollmentEmail } from '@/emails/enrollment-email';
import { automateTaskDesign } from '@/ai/flows/automated-task-design';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const toEmail = process.env.TO_EMAIL || 'logonthepage@gmail.com';

type FormResult<T> = {
  data?: T;
  error?: string;
  success?: boolean;
};

const automatedTaskSchema = z.object({
    workflowDescription: z.string(),
    optimizationSuggestions: z.string().optional(),
});

export async function getAutomatedTaskDesign(values: z.infer<typeof automatedTaskSchema>) {
    try {
        const result = await automateTaskDesign(values);
        return {
            data: result,
        };
    } catch (e: any) {
        console.error('Error in getAutomatedTaskDesign:', e);
        return { error: e.message || 'An unknown error occurred.' };
    }
}

// Contact Form Action
const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string(),
  message: z.string(),
});
export async function contactFormAction(data: z.infer<typeof contactFormSchema>): Promise<FormResult<null>> {
  if (!resend) {
      console.warn("RESEND_API_KEY is not set. Skipping email sending.");
      return { success: true }; // Pretend it worked to not show user an error
  }
  try {
    await resend.emails.send({
      from: 'LOG_ON Website <noreply@logon.com.ng>',
      to: toEmail,
      subject: `New Contact Form Submission: ${data.subject}`,
      reply_to: data.email,
      react: ContactFormEmail({
        name: data.name,
        email: data.email,
        phone: data.phone || 'Not provided',
        subject: data.subject,
        message: data.message,
      }),
    });
    return { success: true };
  } catch (e: any) {
    console.error('Error in contactFormAction:', e);
    return { error: e.message || 'An unknown error occurred.' };
  }
}

// Enrollment / Community Lead Form Action
const communityLeadSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  interest: z.string().optional(),
  date: z.date().optional(),
});
export async function communityLeadAction(data: z.infer<typeof communityLeadSchema>): Promise<FormResult<null>> {
   if (!resend) {
      console.warn("RESEND_API_KEY is not set. Skipping enrollment email.");
      return { success: true };
   }
   try {
    await resend.emails.send({
      from: 'LOG_ON Community Lead <noreply@logon.com.ng>',
      to: toEmail,
      subject: `New Community/Training Lead: ${data.interest || 'General Inquiry'}`,
      reply_to: data.email,
      react: EnrollmentEmail({
        name: data.name,
        email: data.email,
        phone: 'Not provided in this form',
        programName: data.interest || 'General Inquiry',
      }),
    });
    return { success: true };
  } catch (e: any) {
    console.error('Error in communityLeadAction:', e);
    return { error: e.message || 'An unknown error occurred.' };
  }
}
