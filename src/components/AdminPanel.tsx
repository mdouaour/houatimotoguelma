import React, { useEffect, useState } from 'react';
import { X, Plus, Trash2, Upload, Download, FileUp, Shield, Save, Send, Lock } from 'lucide-react';
import { LandingContent, Locale } from '../types/content';
import { exportContent, normalizeContent } from '../content/storage';
import { uploadMediaFile } from '../content/media';
import { isSupabaseConfigured as hasSupabase, supabase } from '../lib/supabase';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  content: LandingContent;
  onChange: (next: LandingContent) => void;
  onReset: () => void;
  onSaveDraft: () => Promise<void>;
  onPublish: () => Promise<void>;
  isSaving: boolean;
  saveStatus: string;
  isSupabaseConfigured: boolean;
}

const SPAN_OPTIONS = [
  'col-span-12 md:col-span-8 md:row-span-2',
  'col-span-12 md:col-span-8 md:row-span-1',
  'col-span-6 md:col-span-4 md:row-span-1',
  'col-span-12 md:col-span-4 md:row-span-2',
];

const randomId = () => Math.random().toString(36).slice(2, 10);

export const AdminPanel = ({
  isOpen,
  onClose,
  content,
  onChange,
  onReset,
  onSaveDraft,
  onPublish,
  isSaving,
  saveStatus,
  isSupabaseConfigured,
}: AdminPanelProps) => {
  const [editLang, setEditLang] = useState<Locale>('fr');
  const [importError, setImportError] = useState('');
  const [uploadError, setUploadError] = useState('');
  const [uploadingId, setUploadingId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [sessionUserId, setSessionUserId] = useState('');

  const requiresAuth = isSupabaseConfigured && hasSupabase;
  const isAuthenticated = Boolean(sessionUserId);
  const canEdit = !requiresAuth || isAuthenticated;
  const update = (next: Partial<LandingContent>) => {
    if (!canEdit) return;
    onChange({ ...content, ...next });
  };

  useEffect(() => {
    if (!requiresAuth || !supabase) {
      setIsAuthLoading(false);
      return;
    }

    let mounted = true;

    supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return;
      setSessionUserId(data.session?.user.id || '');
      setIsAuthLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSessionUserId(session?.user.id || '');
    });

    return () => {
      mounted = false;
      listener.subscription.unsubscribe();
    };
  }, [requiresAuth]);

  const handleSignIn = async () => {
    if (!supabase) return;

    setIsSigningIn(true);
    setAuthError('');

    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (error) {
      setAuthError(error.message);
    }

    setIsSigningIn(false);
  };

  const handleSignOut = async () => {
    if (!supabase) return;
    await supabase.auth.signOut();
  };

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
    if (!file || !canEdit) return;
    try {
      const text = await file.text();
      const parsed = JSON.parse(text);
      onChange(normalizeContent(parsed));
      setImportError('');
    } catch {
      setImportError('Import failed. Please upload a valid JSON file.');
    }
  };

  if (!isOpen) return null;

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
            <div className="flex flex-wrap gap-3 items-center justify-between">
              <h3 className="font-black uppercase tracking-wider text-sm">Admin Access</h3>
              <div className="flex gap-2">
                <button
                  onClick={onSaveDraft}
                  disabled={isSaving || (requiresAuth && !isAuthenticated)}
                  className="inline-flex items-center gap-2 text-xs font-black uppercase bg-zinc-900 text-white px-4 py-2 rounded-lg disabled:opacity-50"
                >
                  <Save size={14} /> Save draft
                </button>
                <button
                  onClick={onPublish}
                  disabled={isSaving || (requiresAuth && !isAuthenticated)}
                  className="inline-flex items-center gap-2 text-xs font-black uppercase bg-brand text-white px-4 py-2 rounded-lg disabled:opacity-50"
                >
                  <Send size={14} /> Publish
                </button>
              </div>
            </div>

            {saveStatus ? <p className="text-xs font-bold text-zinc-500">{saveStatus}</p> : null}

            {!requiresAuth ? (
              <p className="text-xs font-bold text-amber-600">
                Supabase not configured. Admin will use local fallback mode.
              </p>
            ) : null}

            {requiresAuth && isAuthLoading ? (
              <p className="text-xs font-bold text-zinc-500">Checking session...</p>
            ) : null}

            {requiresAuth && !isAuthLoading && !isAuthenticated ? (
              <div className="p-4 rounded-2xl border border-zinc-100 bg-zinc-50 space-y-3">
                <Input label="Admin Email" value={email} onChange={setEmail} />
                <Input label="Password" value={password} onChange={setPassword} type="password" />
                <button
                  onClick={handleSignIn}
                  disabled={isSigningIn}
                  className="inline-flex items-center gap-2 text-xs font-black uppercase bg-zinc-900 text-white px-4 py-2 rounded-lg disabled:opacity-50"
                >
                  <Lock size={14} /> {isSigningIn ? 'Signing in...' : 'Sign in'}
                </button>
                {authError ? <p className="text-xs text-red-500 font-bold">{authError}</p> : null}
              </div>
            ) : null}

            {requiresAuth && isAuthenticated ? (
              <div className="flex items-center justify-between p-3 rounded-xl bg-green-50 border border-green-100">
                <span className="text-xs font-bold text-green-700">Authenticated admin session active</span>
                <button
                  onClick={handleSignOut}
                  className="text-xs font-black uppercase bg-zinc-900 text-white px-3 py-1.5 rounded-lg"
                >
                  Sign out
                </button>
              </div>
            ) : null}
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
                disabled={!canEdit}
                className="inline-flex items-center gap-2 text-xs font-black uppercase bg-brand text-white px-3 py-2 rounded-lg disabled:opacity-50"
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
                  <label className={`inline-flex items-center gap-2 text-xs font-bold uppercase px-3 py-2 bg-white rounded-lg border border-zinc-200 w-fit ${canEdit ? 'cursor-pointer' : 'opacity-50 cursor-not-allowed'}`}>
                    <Upload size={14} />
                    {uploadingId === item.id ? 'Uploading...' : 'Upload file'}
                    <input
                      type="file"
                      accept={item.type === 'video' ? 'video/*' : 'image/*'}
                      className="hidden"
                      disabled={!canEdit || uploadingId === item.id}
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (!file || !canEdit) return;

                        try {
                          setUploadError('');
                          setUploadingId(item.id);
                          const uploadedUrl = await uploadMediaFile(file, item.type);
                          update({
                            gallery: {
                              ...content.gallery,
                              items: content.gallery.items.map((x) => (x.id === item.id ? { ...x, url: uploadedUrl } : x)),
                            },
                          });
                        } catch (error) {
                          setUploadError(error instanceof Error ? error.message : 'Upload failed.');
                        } finally {
                          setUploadingId('');
                        }
                      }}
                    />
                  </label>
                  {uploadError ? <p className="text-xs text-red-500 font-bold">{uploadError}</p> : null}
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
                disabled={!canEdit}
                className="inline-flex items-center gap-2 text-xs font-black uppercase bg-brand text-white px-3 py-2 rounded-lg disabled:opacity-50"
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
              <label className={`inline-flex items-center gap-2 text-xs font-black uppercase bg-zinc-900 text-white px-4 py-2 rounded-lg ${canEdit ? 'cursor-pointer' : 'opacity-50 cursor-not-allowed'}`}>
                <FileUp size={14} /> Import JSON
                <input
                  type="file"
                  accept="application/json"
                  className="hidden"
                  disabled={!canEdit}
                  onChange={(e) => handleImportFile(e.target.files?.[0])}
                />
              </label>
              <button
                onClick={onReset}
                disabled={!canEdit}
                className="inline-flex items-center gap-2 text-xs font-black uppercase bg-red-600 text-white px-4 py-2 rounded-lg disabled:opacity-50"
              >
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

function Input({
  label,
  value,
  onChange,
  type = 'text',
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: 'text' | 'password';
}) {
  return (
    <label className="text-xs font-semibold block">
      {label}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full border rounded-lg px-3 py-2 text-sm"
      />
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
