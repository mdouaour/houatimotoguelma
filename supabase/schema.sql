-- Houati Moto Guelma - Supabase CMS bootstrap
-- Run this file in Supabase SQL editor.

create extension if not exists pgcrypto;

create table if not exists public.site_content (
  id integer primary key default 1,
  published_content jsonb not null,
  draft_content jsonb,
  version integer not null default 1,
  updated_at timestamptz not null default timezone('utc', now()),
  published_at timestamptz,
  updated_by uuid references auth.users(id),
  constraint site_content_singleton check (id = 1),
  constraint site_content_shape check (
    jsonb_typeof(published_content) = 'object'
    and published_content ? 'business'
    and published_content ? 'hero'
    and published_content ? 'sectionVisibility'
    and published_content ? 'gallery'
  )
);

alter table public.site_content enable row level security;

drop policy if exists "Public read published content" on public.site_content;
create policy "Public read published content"
  on public.site_content
  for select
  using (published_content is not null);

drop policy if exists "Authenticated admins manage content" on public.site_content;
create policy "Authenticated admins manage content"
  on public.site_content
  for all
  to authenticated
  using (auth.uid() is not null)
  with check (auth.uid() is not null);

insert into public.site_content (id, published_content, draft_content, version, published_at)
values (
  1,
  '{"business":{},"hero":{},"sectionVisibility":{},"gallery":{"items":[]}}'::jsonb,
  '{"business":{},"hero":{},"sectionVisibility":{},"gallery":{"items":[]}}'::jsonb,
  1,
  timezone('utc', now())
)
on conflict (id) do nothing;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'site-media',
  'site-media',
  true,
  52428800,
  array[
    'image/jpeg',
    'image/png',
    'image/webp',
    'image/gif',
    'video/mp4',
    'video/webm',
    'video/quicktime'
  ]
)
on conflict (id) do update
set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Public can view media" on storage.objects;
create policy "Public can view media"
  on storage.objects
  for select
  using (bucket_id = 'site-media');

drop policy if exists "Authenticated admins can upload media" on storage.objects;
create policy "Authenticated admins can upload media"
  on storage.objects
  for insert
  to authenticated
  with check (
    bucket_id = 'site-media'
    and (storage.foldername(name))[1] in ('image', 'video')
  );

drop policy if exists "Authenticated admins can update media" on storage.objects;
create policy "Authenticated admins can update media"
  on storage.objects
  for update
  to authenticated
  using (bucket_id = 'site-media')
  with check (bucket_id = 'site-media');

drop policy if exists "Authenticated admins can delete media" on storage.objects;
create policy "Authenticated admins can delete media"
  on storage.objects
  for delete
  to authenticated
  using (bucket_id = 'site-media');
