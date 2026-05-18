import { createDefaultContent, STORAGE_KEY } from './defaultContent';
import { LandingContent } from '../types/content';

const isObject = (v: unknown): v is Record<string, unknown> =>
  typeof v === 'object' && v !== null;

export function normalizeContent(input: unknown): LandingContent {
  const defaults = createDefaultContent();
  if (!isObject(input)) return defaults;

  return {
    business: {
      ...defaults.business,
      ...(isObject(input.business) ? input.business : {}),
    },
    hero: {
      ...defaults.hero,
      ...(isObject(input.hero) ? input.hero : {}),
      tag: {
        ...defaults.hero.tag,
        ...(isObject(input.hero) && isObject(input.hero.tag) ? input.hero.tag : {}),
      },
      title: {
        ...defaults.hero.title,
        ...(isObject(input.hero) && isObject(input.hero.title) ? input.hero.title : {}),
      },
      sub: {
        ...defaults.hero.sub,
        ...(isObject(input.hero) && isObject(input.hero.sub) ? input.hero.sub : {}),
      },
      primaryCtaLabel: {
        ...defaults.hero.primaryCtaLabel,
        ...(isObject(input.hero) && isObject(input.hero.primaryCtaLabel) ? input.hero.primaryCtaLabel : {}),
      },
      secondaryCtaLabel: {
        ...defaults.hero.secondaryCtaLabel,
        ...(isObject(input.hero) && isObject(input.hero.secondaryCtaLabel) ? input.hero.secondaryCtaLabel : {}),
      },
    },
    sectionVisibility: {
      ...defaults.sectionVisibility,
      ...(isObject(input.sectionVisibility) ? input.sectionVisibility : {}),
    },
    gallery: {
      ...defaults.gallery,
      ...(isObject(input.gallery) ? input.gallery : {}),
      title: {
        ...defaults.gallery.title,
        ...(isObject(input.gallery) && isObject(input.gallery.title) ? input.gallery.title : {}),
      },
      subtitle: {
        ...defaults.gallery.subtitle,
        ...(isObject(input.gallery) && isObject(input.gallery.subtitle) ? input.gallery.subtitle : {}),
      },
      items:
        isObject(input.gallery) && Array.isArray(input.gallery.items)
          ? input.gallery.items.filter(isObject).map((it, i) => ({
              id: typeof it.id === 'string' ? it.id : `g_${i}`,
              type: it.type === 'video' ? 'video' : 'image',
              url: typeof it.url === 'string' ? it.url : '',
              title: {
                fr: isObject(it.title) && typeof it.title.fr === 'string' ? it.title.fr : '',
                ar: isObject(it.title) && typeof it.title.ar === 'string' ? it.title.ar : '',
              },
              category: {
                fr: isObject(it.category) && typeof it.category.fr === 'string' ? it.category.fr : '',
                ar: isObject(it.category) && typeof it.category.ar === 'string' ? it.category.ar : '',
              },
              span:
                typeof it.span === 'string'
                  ? it.span
                  : 'col-span-6 md:col-span-4 md:row-span-1',
              enabled: it.enabled !== false,
            }))
          : defaults.gallery.items,
    },
    customSections: Array.isArray(input.customSections)
      ? input.customSections.filter(isObject).map((item, i) => ({
          id: typeof item.id === 'string' ? item.id : `cs_${i}`,
          enabled: item.enabled !== false,
          title: {
            fr: isObject(item.title) && typeof item.title.fr === 'string' ? item.title.fr : '',
            ar: isObject(item.title) && typeof item.title.ar === 'string' ? item.title.ar : '',
          },
          description: {
            fr: isObject(item.description) && typeof item.description.fr === 'string' ? item.description.fr : '',
            ar: isObject(item.description) && typeof item.description.ar === 'string' ? item.description.ar : '',
          },
          buttonLabel: {
            fr: isObject(item.buttonLabel) && typeof item.buttonLabel.fr === 'string' ? item.buttonLabel.fr : '',
            ar: isObject(item.buttonLabel) && typeof item.buttonLabel.ar === 'string' ? item.buttonLabel.ar : '',
          },
          buttonUrl: typeof item.buttonUrl === 'string' ? item.buttonUrl : '#',
        }))
      : defaults.customSections,
    brands: Array.isArray(input.brands) ? input.brands.filter((b): b is string => typeof b === 'string') : defaults.brands,
    testimonials: Array.isArray(input.testimonials)
      ? input.testimonials.filter(isObject).map((item, i) => ({
          id: typeof item.id === 'string' ? item.id : `t_${i}`,
          name: typeof item.name === 'string' ? item.name : '',
          text: {
            fr: isObject(item.text) && typeof item.text.fr === 'string' ? item.text.fr : '',
            ar: isObject(item.text) && typeof item.text.ar === 'string' ? item.text.ar : '',
          },
          rating:
            item.rating === 1 || item.rating === 2 || item.rating === 3 || item.rating === 4 || item.rating === 5
              ? item.rating
              : 5,
          date: {
            fr: isObject(item.date) && typeof item.date.fr === 'string' ? item.date.fr : '',
            ar: isObject(item.date) && typeof item.date.ar === 'string' ? item.date.ar : '',
          },
        }))
      : defaults.testimonials,
  };
}

export function loadContent(): LandingContent {
  if (typeof window === 'undefined') return createDefaultContent();
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return createDefaultContent();
  try {
    return normalizeContent(JSON.parse(raw));
  } catch {
    return createDefaultContent();
  }
}

export function saveContent(content: LandingContent) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
}

export function exportContent(content: LandingContent) {
  return JSON.stringify(content, null, 2);
}
