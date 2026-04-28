# Deployment Guide - Topesh Website

## 🚀 Deploying to Vercel

### Prerequisites
- GitHub account with the repository pushed
- Vercel account (sign up at [vercel.com](https://vercel.com))
- Resend API key

### Step-by-Step Deployment

#### 1. Prepare the Repository
```bash
git init
git add .
git commit -m "Initial commit - Topesh website"
git branch -M main
git remote add origin https://github.com/itaischkolnik/topesh.git
git push -u origin main
```

#### 2. Import to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Import your GitHub repository (itaischkolnik/topesh)
4. Vercel will automatically detect Next.js

#### 3. Configure Environment Variables
In the Vercel project settings, add:

```
RESEND_API_KEY=your_actual_resend_api_key
```

**Getting your Resend API Key:**
1. Go to [resend.com](https://resend.com)
2. Sign up / Log in
3. Navigate to API Keys
4. Create a new API key
5. Copy and paste it into Vercel

#### 4. Configure Domain
1. In Vercel project settings → "Domains"
2. Add your custom domain: `topesh.co.il`
3. Follow Vercel's instructions to update DNS records

**DNS Configuration:**
- Type: A Record
- Name: @ (or your domain)
- Value: 76.76.21.21 (Vercel's IP)

For www subdomain:
- Type: CNAME
- Name: www
- Value: cname.vercel-dns.com

#### 5. Deploy
Click "Deploy" in Vercel dashboard. The build should complete in 2-3 minutes.

---

## 📧 Configuring Resend for Production

### Verify Your Domain
For production use, verify your domain in Resend:

1. Go to Resend Dashboard → Domains
2. Click "Add Domain"
3. Enter your domain (e.g., topesh.co.il)
4. Add the provided DNS records (SPF, DKIM, DMARC)
5. Wait for verification (usually a few minutes)

### Update Email Sender
Once your domain is verified, update the sender in `app/api/contact/route.ts`:

```typescript
from: "טופס יצירת קשר <noreply@topesh.co.il>",
```

---

## ✅ Testing Checklist

### Before Going Live
- [ ] Test all navigation links work correctly
- [ ] Submit a test contact form
- [ ] Verify email is received at top-esh@outlook.co.il
- [ ] Test on mobile devices (iOS and Android)
- [ ] Test on different browsers (Chrome, Safari, Firefox, Edge)
- [ ] Check RTL layout on all pages
- [ ] Verify WhatsApp button works
- [ ] Test phone number and email links
- [ ] Check all images load correctly
- [ ] Verify Waze navigation link works
- [ ] Test 404 page (visit non-existent URL)
- [ ] Check loading states work
- [ ] Verify sitemap.xml accessible
- [ ] Test social media links (Facebook, WhatsApp)

### Performance Testing
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Test page load speed
- [ ] Verify images are optimized
- [ ] Check mobile performance

### SEO Verification
- [ ] Verify meta tags in page source
- [ ] Check Open Graph tags (test with [metatags.io](https://metatags.io))
- [ ] Verify sitemap.xml loads
- [ ] Check robots.txt is accessible
- [ ] Submit sitemap to Google Search Console

---

## 🔧 Post-Deployment Configuration

### Google Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: topesh.co.il
3. Verify ownership (HTML tag or DNS)
4. Submit sitemap: https://topesh.co.il/sitemap.xml

### Google Analytics (Optional)
1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get tracking ID
3. Add to `app/layout.tsx`:

```tsx
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script dangerouslySetInnerHTML={{
  __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `
}} />
```

### Facebook Pixel (Optional)
If you want to track conversions from Facebook ads.

---

## 🖼️ Adding Real Content and Images

### Replace Placeholder Content
1. Edit `lib/content.ts` with actual Hebrew text from the old site
2. Update company information if needed
3. Add actual Facebook page URL

### Add Real Images
1. Download images from the old topesh.co.il site
2. Optimize images (use [tinypng.com](https://tinypng.com))
3. Place in appropriate folders:
   - `public/images/hero/` - Hero backgrounds
   - `public/images/products/` - Product images
   - `public/images/services/` - Service images
4. Name them according to the references in `lib/content.ts`:
   - `main.jpg` - Main hero image
   - `about.jpg` - About section image
   - `equipment.jpg` - Equipment page hero
   - `services.jpg` - Services page hero
   - `contact-bg.jpg` - Contact page background
   - Product images: `sprinklers.jpg`, `hose-reels.jpg`, etc.
   - Service images: `inspection.jpg`, `consultation.jpg`, etc.

---

## 🐛 Troubleshooting

### Build Fails
- Check for TypeScript errors: `npm run build`
- Verify all environment variables are set
- Check Node.js version (should be 18+)

### Contact Form Not Working
- Verify RESEND_API_KEY is set correctly
- Check Resend dashboard for API status
- Review server logs in Vercel

### Images Not Loading
- Verify images exist in public/images/
- Check file names match references in content.ts
- Ensure correct paths (case-sensitive)

### RTL Layout Issues
- Verify `dir="rtl"` in html tag
- Check TailwindCSS configuration
- Test in different browsers

---

## 📞 Support

If you encounter any issues:
- Check Vercel deployment logs
- Review browser console for errors
- Contact: top-esh@outlook.co.il

---

## 🔄 Future Updates

To deploy updates:
1. Make changes locally
2. Test with `npm run dev`
3. Commit and push to GitHub
4. Vercel will automatically deploy

```bash
git add .
git commit -m "Description of changes"
git push
```

---

## 📝 Notes

- SSL certificate is automatically provided by Vercel
- CDN and caching are handled by Vercel
- Automatic preview deployments for all branches
- Production deployment on main branch only

