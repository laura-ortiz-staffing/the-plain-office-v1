-- Run this against the project's Supabase database before going live.
-- One table holds all three forms; `form` distinguishes them and
-- `data` keeps each form's own field shape without needing three
-- separate tables to keep in sync with the Copy Deck's field lists.

create table if not exists form_submissions (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  form text not null check (form in ('booklet', 'second_look', 'contact')),
  data jsonb not null
);

create index if not exists form_submissions_form_created_at_idx
  on form_submissions (form, created_at desc);

-- Row Level Security: the site only ever writes with the service-role
-- key (server-side, never exposed to the browser), so RLS stays on
-- with no public policies — nothing is reachable from the anon key.
alter table form_submissions enable row level security;
