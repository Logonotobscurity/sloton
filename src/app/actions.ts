
'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import { ContactFormEmail } from '@/emails/contact-form-email';
import { EnrollmentEmail } from '@/emails/enrollment-email';
import { automateTaskDesign } from '@/ai/flows/automated-task-design';
import { getSolutionRecommendation } from '@/ai/flows/solution-recommendation';
import { supportChat } from '@/ai/flows/support-chat';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const toEmail = process.env.TO_EMAIL || 'logonthepage@gmail.com';
const webhookUrl = process.env.THIRD_PARTY_WEBHOOK_URL;

type FormResult<T> = {
  data?: T;
  error?: string;
  success?: boolean;
};

// --- Webhook Function ---
async function sendToWebhook(payload: any, submissionType: string) {
  if (!webhookUrl) {
    console.log('No webhook URL configured. Skipping webhook send.');
    return;
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...payload,
        submissionType,
        receivedAt: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      console.error(`Webhook failed with status: ${response.status}`);
    } else {
      console.log('Successfully sent data to webhook.');
    }
  } catch (error) {
    console.error('Error sending data to webhook:', error);
  }
}

export async function askSupportBot(history: { role: string; content: string }[], question: string) {
  try {
      const result = await supportChat({ history, question });
      return { data: result };
  } catch (e: any) {
      console.error('Error in askSupportBot:', e);
      return { error: e.message || 'An unknown error occurred.' };
  }
}

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

const solutionRecommendationSchema = z.object({
    industry: z.string(),
    challenge: z.string(),
    goals: z.string(),
});

export async function getSolutionRecommendationAction(values: z.infer<typeof solutionRecommendationSchema>) {
    const result = await getSolutionRecommendation(values);
    return {
        data: result,
    };
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
  } else {
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
      } catch (e: any) {
        console.error('Error in contactFormAction:', e);
        return { error: e.message || 'An unknown error occurred.' };
      }
  }

  // Send data to webhook
  await sendToWebhook(data, 'Contact Form');
  
  return { success: true };
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
   } else {
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
      } catch (e: any) {
        console.error('Error in communityLeadAction:', e);
        return { error: e.message || 'An unknown error occurred.' };
      }
   }

  // Send data to webhook
  await sendToWebhook(data, `Lead Form: ${data.interest || 'General Inquiry'}`);

  return { success: true };
}
