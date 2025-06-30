# Wine Country Root Canal Website - Claude Code Configuration

## Project Overview
This is a Next.js website for a root canal dental practice in wine country, built with v0.dev and deployed on Vercel. The site focuses on root canal therapy services with an elegant, professional design.

## Technology Stack
- **Framework**: Next.js 15.2.4
- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS, Radix UI components
- **Deployment**: Vercel (auto-deployed from main branch)
- **Design System**: Built with v0.dev platform

## Development Commands
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint

# Start production server
npm start
```

## Project Structure
```
/app          - Next.js app router pages
/components   - Reusable UI components
/hooks        - Custom React hooks
/lib          - Utility functions
/public       - Static assets
/styles       - Global styles
```

## Branch Strategy
- **main**: Production branch (auto-deploys to Vercel)
- **claude-code-development**: Development branch for Claude Code edits
- **codex/*****: Feature branches from v0.dev platform

## Deployment Workflow
1. Changes made in Claude Code development branch
2. Test locally with `npm run dev`
3. Create PR to main branch
4. Merge triggers Vercel deployment
5. Changes sync with v0.dev platform

## Key Pages
- `/` - Homepage with hero section and services overview
- `/about` - About the practice and doctors
- `/root-canal-therapy` - Detailed service information
- `/dentists` - Doctor profiles and credentials
- `/contact` - Contact information and appointment booking
- `/testimonials` - Patient reviews and success stories
- `/technology` - Equipment and procedures information

## Content Focus Areas
- Root canal procedure explanations
- Pain management and comfort measures
- Wine country location advantages
- Professional dental care messaging
- Patient testimonials and before/after cases

## Development Guidelines
- Maintain compatibility with v0.dev platform
- Follow existing component patterns and styling
- Ensure mobile responsiveness
- Optimize for dental industry SEO
- Keep load times minimal for better UX

## MCP Tools Available
- GitHub MCP: Repository management and PR automation
- Magic UI MCP: Component generation and improvements
- GA4 Analytics MCP: Performance tracking
- Google Search Console MCP: SEO monitoring
- Stripe MCP: Payment processing (if needed)
- Crawl4AI MCP: Competitor analysis

## Environment Setup Complete
✅ Repository cloned and configured
✅ Dependencies installed
✅ Development environment verified
✅ Git configuration optimized
✅ GitHub CLI authenticated
✅ Development branch created

Ready for website development and optimization!