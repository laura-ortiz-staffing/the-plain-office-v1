// Notifies the office by email on every form submission (Build Brief
// v2 §6: "Every submission emails the office"). Uses Resend. If no API
// key is configured (e.g. local development), the notification is
// logged to the console instead of failing the request — a missing
// email vendor should never be the reason a visitor's submission is
// lost, since it is also logged to Supabase in parallel (see supabaseLog.ts).

import { Resend } from 'resend';

const apiKey = import.meta.env.RESEND_API_KEY;
const to = import.meta.env.FORM_NOTIFICATION_TO || 'office@theplainoffice.com';
const from = import.meta.env.FORM_NOTIFICATION_FROM || 'forms@theplainoffice.com';

export async function notifyOffice(subject: string, text: string): Promise<void> {
  if (!apiKey) {
    console.log(`[email:not-configured] would send "${subject}" to ${to}\n${text}`);
    return;
  }
  const resend = new Resend(apiKey);
  await resend.emails.send({ from, to, subject, text });
}
