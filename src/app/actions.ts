
'use server';

import { solutionRecommendation, SolutionRecommendationInput, SolutionRecommendationOutput } from '@/ai/flows/solution-recommendation';
import { automateTaskDesign, AutomateTaskDesignInput, AutomateTaskDesignOutput } from '@/ai/flows/automated-task-design';
import { z } from 'zod';
import { Resend } from 'resend';
import { ContactFormEmail } from '@/emails/contact-form-email';
import { EnrollmentEmail } from '@/emails/enrollment-email';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const toEmail = process.env.TO_EMAIL || 'logonthepage@gmail.com';

type FormResult<T> = {
  data?: T;
  error?: string;
  success?: boolean;
};

// Solution Recommendation Action
export async function getSolutionRecommendation(
  input: SolutionRecommendationInput
): Promise<FormResult<SolutionRecommendationOutput>> {
  try {
    const result = await solutionRecommendation(input);
    return { data: result };
  } catch (e: any) {
    console.error('Error in getSolutionRecommendation:', e);
    return { error: e.message || 'An unknown error occurred.' };
  }
}

// Automated Task Design Action
export async function getAutomatedTaskDesign(
  input: AutomateTaskDesignInput
): Promise<FormResult<AutomateTaskDesignOutput>> {
  try {
    const result = await automateTaskDesign(input);
    return { data: result };
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

// Enrollment Form Action
const enrollmentFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  programName: z.string(),
});
export async function enrollmentFormAction(data: z.infer<typeof enrollmentFormSchema>): Promise<FormResult<null>> {
   if (!resend) {
      console.warn("RESEND_API_KEY is not set. Skipping enrollment email.");
      return { success: true }; // Pretend it worked
   }
   try {
    await resend.emails.send({
      from: 'LOG_ON Training Enrollment <noreply@logon.com.ng>',
      to: toEmail,
      subject: `New Enrollment for ${data.programName}`,
      reply_to: data.email,
      react: EnrollmentEmail({
        name: data.name,
        email: data.email,
        phone: data.phone,
        programName: data.programName,
      }),
    });
    return { success: true };
  } catch (e: any) {
    console.error('Error in enrollmentFormAction:', e);
    return { error: e.message || 'An unknown error occurred.' };
  }
}
