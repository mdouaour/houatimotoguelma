import React, { useState } from 'react';
import { X, Plus, Trash2, Upload, Download, FileUp, Shield } from 'lucide-react';
import { LandingContent, Locale } from '../types/content';
import { exportContent, normalizeContent } from '../content/storage';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  content: LandingContent;
  onChange: (next: LandingContent) => void;
  onReset: () => void;
}

const SPAN_OPTIONS = [
  'col-span-12 md:col-span-8 md:row-span-2',
  'col-span-12 md:col-span-8 md:row-span-1',
  'col-span-6 md:col-span-4 md:row-span-1',
  'col-span-12 md:col-span-4 md:row-span-2',
];

const randomId = () => Math.random().toString(36).slice(2, 10);

const fileToDataUrl = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ''));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

export const AdminPanel = ({ isOpen, onClose, content, onChange, onReset }: AdminPanelProps) => {
  const [editLang, setEditLang] = useState<Locale>('fr');
  const [importError, setImportError] = useState('');

  if (!isOpen) return null;

  const update = (next: Partial<LandingContent>) => onChange({ ...content, ...next });

  const handleExport = () => {
    const blob = new Blob([exportContent(content)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'houati-landing-content.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportFile = async (file?: File) => {
    if (!file) return;
    try {
      const text = await file.text();
      const parsed = JSON.parse(text);
      onChange(normalizeContent(parsed));
      setImportError('');
    } catch {
      setImportError('Import failed. Please upload a valid JSON file.');
    }
  };

  return (
    <div className="fixed inset-0 z-[120] bg-black/50 backdrop-blur-sm">
      <div className="absolute inset-y-0 right-0 w-full max-w-3xl bg-white shadow-2xl overflow-y-auto">
        <div className="sticky top-0 z-10 bg-white border-b border-zinc-100 p-5 flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] font-black text-brand">Admin Panel</p>
            <h2 className="text-2xl font-black italic font-display">Landing Editor</h2>
          </div>
          <button onClick={onClose} className="w-10 h-10 rounded-xl bg-zinc-100 grid place-items-center">
            <X size={18} />
          </button>
        </div>

        <div className="p-5 md:p-8 space-y-10">
          <section className="space-y-4">
            <h3 className="font-black uppercase tracking-wider text-sm">Language</h3>
            <div className="flex gap-2">
              <button
                onClick={() => setEditLang('fr')}
                className={`px-4 py-2 rounded-lg text-xs font-black uppercase ${editLang === 'fr' ? 'bg-brand text-white' : 'bg-zinc-100'}`}
              >
                Français
              </button>
              <button
                onClick={() => setEditLang('ar')}
                className={`px-4 py-2 rounded-lg text-xs font-black uppercase ${editLang === 'ar' ? 'bg-brand text-white' : 'bg-zinc-100'}`}
              >
                العربية
              </button>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="font-black uppercase tracking-wider text-sm">Business Info</h3>
            <div className="grid md:grid-cols-2 gap-3">
              <Input label="Business name" value={content.business.name} onChange={(v) => update({ business: { ...content.business, name: v } })} />
              <Input label="Phone" value={content.business.phone} onChange={(v) => update({ business: { ...content.business, phone: v } })} />
              <Input label="WhatsApp (numbers only)" value={content.business.whatsapp} onChange={(v) => update({ business: { ...content.business, whatsapp: v } })} />
              <Input label="Facebook URL" value={content.business.facebook} onChange={(v) => update({ business: { ...content.business, facebook: v } })} />
              <Input label="Google Maps URL" value={content.business.googleMaps} onChange={(v) => update({ business: { ...content.business, googleMaps: v } })} />
              <Input label="Location" value={content.business.location} onChange={(v) => update({ business: { ...content.business, location: v } })} />
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="font-black uppercase tracking-wider text-sm">Hero Section</h3>
            <div className="space-y-3">
              <Input label="Tag line" value={content.hero.tag[editLang]} onChange={(v) => update({ hero: { ...content.hero, tag: { ...content.hero.tag, [editLang]: v } } })} />
              <Input label="Title" value={content.hero.title[editLang]} onChange={(v) => update({ hero: { ...content.hero, title: { ...content.hero.title, [editLang]: v } } })} />
              <Textarea label="Description" value={content.hero.sub[editLang]} onChange={(v) => update({ hero: { ...content.hero, sub: { ...content.hero.sub, [editLang]: v } } })} />
              <Input label="Primary button label" value={content.hero.primaryCtaLabel[editLang]} onChange={(v) => update({ hero: { ...content.hero, primaryCtaLabel: { ...content.hero.primaryCtaLabel, [editLang]: v } } })} />
              <Input label="Primary button URL" value={content.hero.primaryCtaUrl} onChange={(v) => update({ hero: { ...content.hero, primaryCtaUrl: v } })} />
              <Input label="Secondary button label" value={content.hero.secondaryCtaLabel[editLang]} onChange={(v) => update({ hero: { ...content.hero, secondaryCtaLabel: { ...content.hero.secondaryCtaLabel, [editLang]: v } } })} />
              <Input label="Secondary button URL" value={content.hero.secondaryCtaUrl} onChange={(v) => update({ hero: { ...content.hero, secondaryCtaUrl: v } })} />
              <Input label="Hero image URL" value={content.hero.image} onChange={(v) => update({ hero: { ...content.hero, image: v } })} />
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="font-black uppercase tracking-wider text-sm">Show / Hide Sections</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {Object.entries(content.sectionVisibility).map(([key, value]) => (
                <label key={key} className="flex items-center justify-between p-3 rounded-xl bg-zinc-50 border border-zinc-100">
                  <span className="text-xs font-bold uppercase tracking-wider">{key}</span>
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={(e) =>
                      update({
                        sectionVisibility: {
                          ...content.sectionVisibility,
                          [key]: e.target.checked,
                        },
                      })
                    }
                  />
                </label>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-black uppercase tracking-wider text-sm">Gallery (photos + videos)</h3>
              <button
                onClick={() =>
                  update({
                    gallery: {
                      ...content.gallery,
                      items: [
                        ...content.gallery.items,
                        {
                          id: randomId(),
                          type: 'image',
                          url: '',
                          title: { fr: 'New media', ar: 'وسائط جديدة' },
                          category: { fr: 'Gallery', ar: 'معرض' },
                          span: SPAN_OPTIONS[2],
                          enabled: true,
                        },
                      ],
                    },
                  })
                }
                className="inline-flex items-center gap-2 text-xs font-black uppercase bg-brand text-white px-3 py-2 rounded-lg"
              >
                <Plus size={14} /> Add media
              </button>
            </div>
            <Input
              label="Gallery title"
              value={content.gallery.title[editLang]}
              onChange={(v) => update({ gallery: { ...content.gallery, title: { ...content.gallery.title, [editLang]: v } } })}
            />
            <Input
              label="Gallery subtitle"
              value={content.gallery.subtitle[editLang]}
              onChange={(v) => update({ gallery: { ...content.gallery, subtitle: { ...content.gallery.subtitle, [editLang]: v } } })}
            />
            <div className="space-y-4">
              {content.gallery.items.map((item) => (
                <div key={item.id} className="p-4 rounded-2xl border border-zinc-100 bg-zinc-50 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider">{item.type}</span>
                    <button
                      onClick={() =>
                        update({
                          gallery: {
                            ...content.gallery,
                            items: content.gallery.items.filter((x) => x.id !== item.id),
                          },
                        })
                      }
                      className="text-red-500"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-3">
                    <label className="text-xs font-semibold">
                      Type
                      <select
                        value={item.type}
                        onChange={(e) =>
                          update({
                            gallery: {
                              ...content.gallery,
                              items: content.gallery.items.map((x) =>
                                x.id === item.id ? { ...x, type: e.target.value === 'video' ? 'video' : 'image' } : x
                              ),
                            },
                          })
                        }
                        className="mt-1 w-full border rounded-lg px-3 py-2 text-sm bg-white"
                      >
                        <option value="image">Image</option>
                        <option value="video">Video</option>
                      </select>
                    </label>
                    <label className="text-xs font-semibold">
                      Grid size
                      <select
                        value={item.span}
                        onChange={(e) =>
                          update({
                            gallery: {
                              ...content.gallery,
                              items: content.gallery.items.map((x) => (x.id === item.id ? { ...x, span: e.target.value } : x)),
                            },
                          })
                        }
                        className="mt-1 w-full border rounded-lg px-3 py-2 text-sm bg-white"
                      >
                        {SPAN_OPTIONS.map((span) => (
                          <option key={span} value={span}>
                            {span}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                  <Input
                    label="Media URL"
                    value={item.url}
                    onChange={(v) =>
                      update({
                        gallery: {
                          ...content.gallery,
                          items: content.gallery.items.map((x) => (x.id === item.id ? { ...x, url: v } : x)),
                        },
                      })
                    }
                  />
                  <label className="inline-flex items-center gap-2 text-xs font-bold uppercase px-3 py-2 bg-white rounded-lg border border-zinc-200 cursor-pointer w-fit">
                    <Upload size={14} />
                    Upload file
                    <input
                      type="file"
                      accept={item.type === 'video' ? 'video/*' : 'image/*'}
                      className="hidden"
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;
                        const dataUrl = await fileToDataUrl(file);
                        update({
                          gallery: {
                            ...content.gallery,
                            items: content.gallery.items.map((x) => (x.id === item.id ? { ...x, url: dataUrl } : x)),
                          },
                        });
                      }}
                    />
                  </label>
                  <Input
                    label={`Title (${editLang})`}
                    value={item.title[editLang]}
                    onChange={(v) =>
                      update({
                        gallery: {
                          ...content.gallery,
                          items: content.gallery.items.map((x) =>
                            x.id === item.id ? { ...x, title: { ...x.title, [editLang]: v } } : x
                          ),
                        },
                      })
                    }
                  />
                  <Input
                    label={`Category (${editLang})`}
                    value={item.category[editLang]}
                    onChange={(v) =>
                      update({
                        gallery: {
                          ...content.gallery,
                          items: content.gallery.items.map((x) =>
                            x.id === item.id ? { ...x, category: { ...x.category, [editLang]: v } } : x
                          ),
                        },
                      })
                    }
                  />
                  <label className="flex items-center justify-between p-3 rounded-lg bg-white border border-zinc-200">
                    <span className="text-xs font-bold uppercase">Visible</span>
                    <input
                      type="checkbox"
                      checked={item.enabled}
                      onChange={(e) =>
                        update({
                          gallery: {
                            ...content.gallery,
                            items: content.gallery.items.map((x) => (x.id === item.id ? { ...x, enabled: e.target.checked } : x)),
                          },
                        })
                      }
                    />
                  </label>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-black uppercase tracking-wider text-sm">Custom Sections</h3>
              <button
                onClick={() =>
                  update({
                    customSections: [
                      ...content.customSections,
                      {
                        id: randomId(),
                        enabled: true,
                        title: { fr: 'New section', ar: 'قسم جديد' },
                        description: { fr: 'Describe this section', ar: 'وصف هذا القسم' },
                        buttonLabel: { fr: 'Read more', ar: 'المزيد' },
                        buttonUrl: '#',
                      },
                    ],
                  })
                }
                className="inline-flex items-center gap-2 text-xs font-black uppercase bg-brand text-white px-3 py-2 rounded-lg"
              >
                <Plus size={14} /> Add section
              </button>
            </div>

            {content.customSections.map((item) => (
              <div key={item.id} className="p-4 rounded-2xl border border-zinc-100 bg-zinc-50 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-xs font-bold uppercase">
                    <input
                      type="checkbox"
                      checked={item.enabled}
                      onChange={(e) =>
                        update({
                          customSections: content.customSections.map((x) =>
                            x.id === item.id ? { ...x, enabled: e.target.checked } : x
                          ),
                        })
                      }
                    />
                    Enabled
                  </label>
                  <button
                    onClick={() => update({ customSections: content.customSections.filter((x) => x.id !== item.id) })}
                    className="text-red-500"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
                <Input
                  label={`Title (${editLang})`}
                  value={item.title[editLang]}
                  onChange={(v) =>
                    update({
                      customSections: content.customSections.map((x) =>
                        x.id === item.id ? { ...x, title: { ...x.title, [editLang]: v } } : x
                      ),
                    })
                  }
                />
                <Textarea
                  label={`Description (${editLang})`}
                  value={item.description[editLang]}
                  onChange={(v) =>
                    update({
                      customSections: content.customSections.map((x) =>
                        x.id === item.id ? { ...x, description: { ...x.description, [editLang]: v } } : x
                      ),
                    })
                  }
                />
                <Input
                  label={`Button label (${editLang})`}
                  value={item.buttonLabel[editLang]}
                  onChange={(v) =>
                    update({
                      customSections: content.customSections.map((x) =>
                        x.id === item.id ? { ...x, buttonLabel: { ...x.buttonLabel, [editLang]: v } } : x
                      ),
                    })
                  }
                />
                <Input
                  label="Button URL"
                  value={item.buttonUrl}
                  onChange={(v) =>
                    update({
                      customSections: content.customSections.map((x) => (x.id === item.id ? { ...x, buttonUrl: v } : x)),
                    })
                  }
                />
              </div>
            ))}
          </section>

          <section className="space-y-4">
            <h3 className="font-black uppercase tracking-wider text-sm">Brands</h3>
            <Textarea
              label="One brand per line"
              value={content.brands.join('\n')}
              onChange={(v) => update({ brands: v.split('\n').map((s) => s.trim()).filter(Boolean) })}
            />
          </section>

          <section className="space-y-4">
            <h3 className="font-black uppercase tracking-wider text-sm">Backup / Transfer / Reset</h3>
            <div className="flex flex-wrap gap-3">
              <button onClick={handleExport} className="inline-flex items-center gap-2 text-xs font-black uppercase bg-zinc-900 text-white px-4 py-2 rounded-lg">
                <Download size={14} /> Export JSON
              </button>
              <label className="inline-flex items-center gap-2 text-xs font-black uppercase bg-zinc-900 text-white px-4 py-2 rounded-lg cursor-pointer">
                <FileUp size={14} /> Import JSON
                <input type="file" accept="application/json" className="hidden" onChange={(e) => handleImportFile(e.target.files?.[0])} />
              </label>
              <button onClick={onReset} className="inline-flex items-center gap-2 text-xs font-black uppercase bg-red-600 text-white px-4 py-2 rounded-lg">
                <Shield size={14} /> Reset to defaults
              </button>
            </div>
            {importError && <p className="text-xs text-red-500 font-bold">{importError}</p>}
          </section>
        </div>
      </div>
    </div>
  );
};

function Input({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="text-xs font-semibold block">
      {label}
      <input value={value} onChange={(e) => onChange(e.target.value)} className="mt-1 w-full border rounded-lg px-3 py-2 text-sm" />
    </label>
  );
}

function Textarea({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="text-xs font-semibold block">
      {label}
      <textarea value={value} onChange={(e) => onChange(e.target.value)} rows={3} className="mt-1 w-full border rounded-lg px-3 py-2 text-sm" />
    </label>
  );
}
