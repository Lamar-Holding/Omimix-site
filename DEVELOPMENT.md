# Omimix Website - Development Guide

## Code Structure Overview

### Components
Located in \`/components\` - Reusable React components:
- \`header.tsx\` - Navigation and language/theme toggles
- \`hero.tsx\` - Landing section
- \`about.tsx\` - Company information
- \`products.tsx\` - Product showcase
- \`sectors.tsx\` - Industries served
- \`workflow.tsx\` - Process timeline
- \`certifications.tsx\` - Compliance badges
- \`why-omimix.tsx\` - Value propositions
- \`contact-section.tsx\` - Contact form
- \`footer.tsx\` - Footer with links

### Hooks
Located in \`/hooks\` - Custom React hooks:
- \`use-language.ts\` - Language state management
- \`use-theme.ts\` - Dark/light mode management

### API Routes
Located in \`/app/api\`:
- \`/contact\` - Handles contact form submissions
- \`/health\` - Health check endpoint

### Styling
- Global styles: \`/app/globals.css\`
- Design tokens defined in CSS
- Tailwind utilities used throughout
- Dark mode support with CSS variables

## Adding New Content

### Update Translations
1. Edit \`/locales/ar.json\` for Arabic
2. Edit \`/locales/en.json\` for English
3. Use \`t.section.key\` in components

### Create New Section
1. Create component in \`/components/your-section.tsx\`
2. Add translations to both locale files
3. Import and add to \`/app/page.tsx\`
4. Add to header navigation if needed

### Modify Colors/Theme
Edit \`/app/globals.css\` design tokens section to update brand colors globally.

## Development Workflow

### 1. Local Development
\`\`\`bash
npm run dev
# Open http://localhost:3000
\`\`\`

### 2. Code Changes
- Make changes to components
- Hot reload automatically refreshes browser
- Check console for errors

### 3. Linting & Formatting
\`\`\`bash
# Check for issues
npm run lint

# Fix automatically
npm run lint:fix

# Format code
npm run format
\`\`\`

### 4. Testing
\`\`\`bash
# Run tests
npm run test

# Watch mode for development
npm run test:watch
\`\`\`

### 5. Type Checking
\`\`\`bash
npm run type-check
\`\`\`

### 6. Build for Production
\`\`\`bash
npm run build
npm start
\`\`\`

## Common Tasks

### Changing Brand Color
1. Open \`/app/globals.css\`
2. Update \`--color-primary\` values
3. All components using \`text-primary-light\` will update

### Adding New Product Type
1. Add to products object in both locale files
2. Update \`ProductType\` interface if needed
3. Component auto-renders from data

### Customizing Animations
1. Edit \`@keyframes\` in \`/app/globals.css\`
2. Update animation timing in component className
3. Use \`animate-fade-in\`, \`animate-slide-in-up\`, etc.

### Handling Errors in Contact Form
1. Update error messages in \`/locales/*.json\`
2. Check email configuration in \`.env.local\`
3. Test email sending with different providers

## Debugging Tips

### Language Not Switching
- Check browser console for errors
- Verify localStorage is not blocked
- Confirm translations loaded in both locales

### Styling Issues
- Clear \`.next\` folder
- Rebuild project
- Check CSS specificity conflicts
- Verify Tailwind classes are valid

### Email Not Sending
- Check \`/app/api/contact/route.ts\` logs
- Verify environment variables
- Test API directly: \`curl -X POST http://localhost:3000/api/contact\`
- Check SMTP credentials

### Performance Issues
- Use Chrome DevTools Performance tab
- Check Lighthouse report
- Optimize image sizes
- Review bundle size

## Git Workflow

\`\`\`bash
# Create feature branch
git checkout -b feature/your-feature

# Make changes and commit
git add .
git commit -m "description"

# Push to remote
git push origin feature/your-feature

# Create Pull Request on GitHub
\`\`\`

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## Performance Targets

- Lighthouse Performance: 90+
- Lighthouse Accessibility: 95+
- Lighthouse SEO: 95+
- Lighthouse Best Practices: 90+
- Core Web Vitals: Green
\`\`\`
