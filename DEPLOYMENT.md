# Omimix Website - Deployment Guide

## Quick Start Deployment (Vercel)

### Prerequisites
- GitHub account with repository
- Vercel account (free)

### Steps

1. **Push code to GitHub**
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/omimix-website.git
   git push -u origin main
   \`\`\`

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Select the project

3. **Configure Environment Variables**
   In Vercel Dashboard → Project Settings → Environment Variables:
   \`\`\`
   NEXT_PUBLIC_SITE_TITLE=Omimix
   NEXT_PUBLIC_DEFAULT_LOCALE=ar
   NEXT_PUBLIC_ALTERNATE_LOCALE=en
   NEXT_PUBLIC_BASE_URL=https://yourdomain.com
   EMAIL_PROVIDER=nodemailer
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   CONTACT_RECIPIENTS=Mishalalmoisheer@omimix.sa,omaralminshaz@omimix.sa
   \`\`\`

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Get your live URL

## Custom Domain Setup

1. **Add domain to Vercel**
   - Project Settings → Domains
   - Enter your domain
   - Follow DNS configuration

2. **Update DNS Records**
   - Point your domain to Vercel nameservers
   - Or add CNAME record to: \`cname.vercel.com\`

3. **SSL Certificate**
   - Automatically provisioned by Vercel

## Email Configuration

### Option 1: Gmail (Development/Testing)
1. Enable 2-Factor Authentication on Gmail
2. Generate App Password
3. Use generated password in SMTP_PASS

### Option 2: SendGrid (Production)
1. Create SendGrid account
2. Get API key
3. Set EMAIL_PROVIDER=sendgrid
4. Set SENDGRID_API_KEY=your_key

### Option 3: Custom SMTP
- Configure your email provider's SMTP settings

## Performance Optimization

### Vercel Analytics
Enable in Project Settings to monitor:
- Page load times
- Core Web Vitals
- Error tracking

### Monitoring
- Visit [https://yourdomain.com/api/health](https://yourdomain.com/api/health)
- Returns \`{"status":"ok"}\` when healthy

## SSL/HTTPS

Automatically handled by Vercel. Your site is HTTPS-enabled by default.

## Backup & Rollback

### Rollback to Previous Deployment
1. Go to Deployments tab
2. Find previous stable deployment
3. Click "Promote to Production"

### Database Backup
(If using external database)
- Implement regular backups with your database provider
- Test recovery procedures

## Security Checklist

- [ ] Environment variables securely set
- [ ] Email addresses verified in SMTP config
- [ ] Rate limiting active on contact form
- [ ] Honeypot field enabled on contact form
- [ ] HTTPS enabled (automatic on Vercel)
- [ ] Security headers configured (in next.config.mjs)
- [ ] Robots.txt configured
- [ ] Sitemap generated

## Monitoring & Logging

### Error Tracking
- Check Vercel Dashboard → Functions for API errors
- Monitor email delivery logs

### Performance Metrics
- Use Vercel Analytics
- Monitor Core Web Vitals
- Check Lighthouse scores

## Scheduled Tasks

Consider adding (if needed):
- Scheduled email reports
- Database cleanup
- Cache invalidation

## Disaster Recovery

1. **Code**: Version controlled on GitHub
2. **Database**: Managed by your provider with backups
3. **Assets**: Stored in /public directory (version controlled)
4. **Configuration**: Environment variables backed up securely

## Cost Optimization

- Vercel free tier includes: 100 GB bandwidth, unlimited functions
- Monitor function invocations
- Optimize image sizes
- Use CDN (included with Vercel)

## Support

- Vercel Support: [vercel.com/support](https://vercel.com/support)
- Documentation: [vercel.com/docs](https://vercel.com/docs)
\`\`\`
