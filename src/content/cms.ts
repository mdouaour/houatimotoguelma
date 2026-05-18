import { LandingContent } from '../types/content';
import { createDefaultContent } from './defaultContent';
import { loadContent, normalizeContent, saveContent } from './storage';
import { isSupabaseConfigured, supabase } from '../lib/supabase';

const SITE_CONTENT_TABLE = 'site_content';
const SITE_CONTENT_ROW_ID = 1;

interface SiteContentRow {
  id: number;
  published_content: unknown;
  draft_content: unknown;
  version: number;
}

const toNowIso = () => new Date().toISOString();

async function getCurrentRow() {
  if (!supabase) return null;

  const { data, error } = await supabase
    .from(SITE_CONTENT_TABLE)
    .select('id, published_content, draft_content, version')
    .eq('id', SITE_CONTENT_ROW_ID)
    .maybeSingle();

  if (error) throw error;
  return (data as SiteContentRow | null) || null;
}

export async function loadPublishedContent(): Promise<LandingContent> {
  if (!isSupabaseConfigured || !supabase) {
    return loadContent();
  }

  try {
    const row = await getCurrentRow();

    if (row?.published_content) {
      return normalizeContent(row.published_content);
    }

    return createDefaultContent();
  } catch {
    return loadContent();
  }
}

export async function saveDraftContent(content: LandingContent) {
  if (!isSupabaseConfigured || !supabase) {
    saveContent(content);
    return { version: 1, local: true };
  }

  const row = await getCurrentRow();
  const version = (row?.version || 0) + 1;

  const { error } = await supabase.from(SITE_CONTENT_TABLE).upsert(
    {
      id: SITE_CONTENT_ROW_ID,
      draft_content: content,
      published_content: row?.published_content || content,
      version,
      updated_at: toNowIso(),
      published_at: row?.published_content ? null : toNowIso(),
    },
    { onConflict: 'id' },
  );

  if (error) throw error;
  return { version, local: false };
}

export async function publishContent(content: LandingContent) {
  if (!isSupabaseConfigured || !supabase) {
    saveContent(content);
    return { version: 1, local: true };
  }

  const row = await getCurrentRow();
  const version = (row?.version || 0) + 1;

  const { error } = await supabase.from(SITE_CONTENT_TABLE).upsert(
    {
      id: SITE_CONTENT_ROW_ID,
      draft_content: content,
      published_content: content,
      version,
      updated_at: toNowIso(),
      published_at: toNowIso(),
    },
    { onConflict: 'id' },
  );

  if (error) throw error;

  saveContent(content);
  return { version, local: false };
}
