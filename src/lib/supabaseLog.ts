// Durable, printable record of every form submission (Build Brief v2
// §6: "appended to a log the office can print"). Uses Supabase Postgres
// per the client's stated backend preference.
//
// v1 decision: the office views/prints this log directly from the
// Supabase Studio table editor (Table Editor → form_submissions →
// browser print) rather than a custom-built admin page. That's the
// simplest thing that satisfies "a log the office can print" without
// adding an authenticated admin UI to the public site. A branded,
// simpler printable view is a reasonable v1.1 upgrade — see CHANGELOG.
//
// Schema: supabase/migrations/0001_form_submissions.sql
//
// If SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY are not set (e.g. local
// dev without a provisioned project), submissions are logged to the
// console instead of failing the request.

import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.SUPABASE_URL;
const serviceKey = import.meta.env.SUPABASE_SERVICE_ROLE_KEY;

const client = url && serviceKey ? createClient(url, serviceKey) : null;

export type FormName = 'booklet' | 'second_look' | 'contact';

export async function logSubmission(form: FormName, data: Record<string, unknown>): Promise<void> {
  if (!client) {
    console.log(`[supabase:not-configured] ${form} submission`, data);
    return;
  }
  const { error } = await client.from('form_submissions').insert({ form, data });
  if (error) {
    // A logging failure should not be silently swallowed, but it also
    // should not block the office's email notification from going out —
    // callers send the email regardless (see src/pages/api/*.ts).
    console.error(`[supabase] failed to log ${form} submission:`, error.message);
  }
}
