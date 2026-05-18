import { fileToDataUrl } from './storageUtils';
import { MEDIA_BUCKET, isSupabaseConfigured, supabase } from '../lib/supabase';
import { GalleryItem } from '../types/content';

const IMAGE_MAX_SIZE_BYTES = 10 * 1024 * 1024;
const VIDEO_MAX_SIZE_BYTES = 50 * 1024 * 1024;

const imageMimePattern = /^image\/(jpeg|png|webp|gif)$/;
const videoMimePattern = /^video\/(mp4|webm|quicktime)$/;

const sanitizeFileName = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9.-]/g, '-')
    .replace(/-+/g, '-');

const validateFile = (file: File, type: GalleryItem['type']) => {
  const maxSize = type === 'video' ? VIDEO_MAX_SIZE_BYTES : IMAGE_MAX_SIZE_BYTES;
  const mimePattern = type === 'video' ? videoMimePattern : imageMimePattern;

  if (file.size > maxSize) {
    const maxMb = type === 'video' ? 50 : 10;
    throw new Error(`Max file size is ${maxMb}MB for ${type}.`);
  }

  if (!mimePattern.test(file.type)) {
    throw new Error(`Unsupported ${type} format.`);
  }
};

export async function uploadMediaFile(file: File, type: GalleryItem['type']) {
  validateFile(file, type);

  if (!isSupabaseConfigured || !supabase) {
    return fileToDataUrl(file);
  }

  const safeName = sanitizeFileName(file.name || `${type}-${Date.now()}`);
  const path = `${type}/${Date.now()}-${safeName}`;

  const { error } = await supabase.storage.from(MEDIA_BUCKET).upload(path, file, {
    upsert: false,
    contentType: file.type,
    cacheControl: '3600',
  });

  if (error) throw new Error(error.message);

  const { data } = supabase.storage.from(MEDIA_BUCKET).getPublicUrl(path);
  return data.publicUrl;
}
