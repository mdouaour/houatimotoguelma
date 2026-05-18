# Houati Moto Guelma

The official landing page for **Houati Moto Guelma**, the #1 destination for motorcycles, scooters, electric bikes, and professional repair services in Guelma since 2018.

## 🚀 Features

- **Multilingual Support**: Fully localized in Arabic and French.
- **RTL Support**: Optimized layout for Arabic language.
- **Responsive Design**: Professional UI that works on all devices.
- **Services Showcase**: Detailed sections for Motos, e-Scooters, e-Bikes, Bicycles, and Spare Parts.
- **Expert Workshop**: Highlighted engineering and repair capabilities.
- **Modern Tech Stack**: React 19, Vite, Tailwind CSS, and Motion for animations.
- **Secure CMS Mode**: Supabase Auth + PostgreSQL + Storage for production content management.
- **Reusable Media Wrapper**: Unified image/video rendering that preserves existing layout and animation styles.

## 🛠️ Tech Stack

- **Framework**: [React](https://reactjs.org/)
- **Bundler**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📦 Getting Started

1. **Clone the repository**:
   ```bash
   git clone <your-github-repo-url>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 🔐 Supabase Setup (Production CMS)

1. Create a Supabase project.
2. Run `/supabase/schema.sql` in Supabase SQL editor.
3. In Supabase Auth, create at least one admin user (email/password).
4. Configure Vercel/project env vars from `.env.example`:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - `VITE_SUPABASE_MEDIA_BUCKET` (default: `site-media`)
5. Redeploy.

## 🛠️ Admin Panel

The project includes a built-in admin panel with Supabase-backed persistence.

- Open `/admin` directly (or click the **Admin** button).
- Sign in with a Supabase Auth admin account.
- Edit:
  - Business info (phone, WhatsApp, Facebook, maps, location)
  - Hero texts, buttons, links, and image
  - Section visibility (show/hide blocks)
  - Gallery media (photos/videos), add/remove/replace items
  - Custom sections (title, description, button)
  - Brands list
- Save as **Draft** or **Publish** to update live content.
- Media uploads go to Supabase Storage with type/size checks.
- Use **Export JSON** / **Import JSON** for backup and transfer.
- Use **Reset to defaults** to restore original content.

> If Supabase env vars are missing, the panel automatically falls back to local mode for development.

## 🌐 Deployment to Vercel

You can deploy this project to Vercel with a single click after exporting it to your GitHub account:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F%3Cmdouaour%3E%2F%3CHouatiMotoGuelma%3E)

> **Note**: Replace `<your-username>` and `<your-repo-name>` in the URL above with your actual GitHub details after exporting.

## 📞 Contact

- **Phone**: +213 550 15 82 58
- **Facebook**: [Houati Moto Guelma](https://www.facebook.com/share/1ajGC4W37z/)
- **Location**: Guelma, Algérie
