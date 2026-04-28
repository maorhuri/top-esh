# Topesh Website

Modern, responsive website for Topesh fire safety company built with Next.js 14, TypeScript, and TailwindCSS.

## 🚀 Features

- **Modern Design**: Clean, professional interface with RTL support for Hebrew
- **Responsive**: Mobile-first approach, works perfectly on all devices
- **SEO Optimized**: Metadata, sitemap, robots.txt, and schema.org markup
- **Fast Performance**: Next.js 14 with App Router for optimal performance
- **Contact Form**: Integrated with Resend API for email notifications
- **Animations**: Smooth transitions and hover effects
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation

## 📁 Project Structure

```
topesh/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── equipment/         # Equipment pages
│   ├── services/          # Services page
│   ├── contact/           # Contact page
│   └── layout.tsx         # Root layout with RTL
├── components/            # React components
├── lib/                   # Utilities and content
├── public/               # Static assets
│   ├── fonts/            # Almoni fonts
│   └── images/           # Images and logos
└── tailwind.config.ts    # Tailwind configuration
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Forms**: React Hook Form
- **Email**: Resend API
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/itaischkolnik/topesh.git
cd topesh
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file:
```bash
RESEND_API_KEY=your_resend_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables:
   - `RESEND_API_KEY`: Your Resend API key
4. Deploy!

The site will be available at your Vercel URL or custom domain.

## 📝 Content Management

All content is centralized in `lib/content.ts`. To update:

1. Edit the `siteContent` object
2. Save the file
3. Changes will reflect automatically

### Adding Images

1. Place images in appropriate folders under `public/images/`:
   - `hero/` - Hero section backgrounds
   - `products/` - Equipment images
   - `services/` - Service images
2. Reference them in `lib/content.ts`

## 🎨 Customization

### Colors

Brand colors are defined in `tailwind.config.ts`:
- Primary Red: `#D8261E`
- Primary Blue: `#213A8F`

### Fonts

The site uses the Almoni font family, located in `public/fonts/almoni/`.

## 📧 Contact Form

The contact form integrates with Resend API. To configure:

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add it to `.env.local`
4. Update the `from` email in `app/api/contact/route.ts` with your verified domain

## 🔍 SEO

The site includes:
- Meta tags and Open Graph
- Sitemap (`/sitemap.xml`)
- Robots.txt (`/robots.txt`)
- Schema.org structured data
- Semantic HTML

## 📱 Pages

- **Home** (`/`) - Company overview and services preview
- **Equipment** (`/equipment`) - Product categories
- **Equipment Details** (`/equipment/[category]`) - Individual product pages
- **Services** (`/services`) - Service offerings
- **Contact** (`/contact`) - Contact form and information

## 🧪 Testing

Before deployment, test:
- All navigation links
- Contact form submission
- Mobile responsiveness
- RTL layout
- WhatsApp button
- Cross-browser compatibility

## 📞 Support

For questions or issues:
- Email: top-esh@outlook.co.il
- Phone: 073-7794775

## 📄 License

© 2025 Topesh. All rights reserved.

