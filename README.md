# Prasannakumar's Portfolio

A modern, fully interactive portfolio showcasing full-stack development and security expertise, built with React, Next.js, and TypeScript with integrated dynamic testing capabilities.

## Features

### Portfolio Sections

- **Hero Section**: Engaging introduction with call-to-action buttons and social links
- **About Me**: Professional background covering full-stack development and pentesting expertise
- **Technical Arsenal**: Comprehensive skills display with proficiency bars across 4 categories
- **Featured Projects**: Detailed project cards with problems, solutions, outcomes, and technology stacks
- **My Journey**: Interactive timeline of work experience, education, and milestones
- **What People Say**: Client and colleague testimonials with 5-star ratings
- **Let's Connect**: Contact form and direct communication channels

### Dynamic Testing Suite

The portfolio includes a built-in dynamic testing dashboard that validates:

1. **Section Rendering** - Verifies all 7 main sections are properly rendered
2. **Navigation Links** - Tests that all navigation links function correctly
3. **Project Data Integrity** - Validates project cards contain required information
4. **Skills Rendering** - Confirms animated progress bars display correctly
5. **Testimonials Loading** - Checks testimonials are properly displayed
6. **Contact Form** - Validates all form fields are present
7. **Animations** - Detects animated elements on the page
8. **Responsive Design** - Checks for mobile, tablet, and desktop breakpoints
9. **Accessibility Features** - Verifies headings, labels, and semantic HTML
10. **Performance Metrics** - Monitors page load times

### Design Highlights

- **Color Scheme**: Professional green and teal palette (Primary: #2B6D4F, Accent: #1A9B8E)
- **Typography**: Geist font family for modern, clean appearance
- **Animations**: Smooth transitions and scroll-triggered reveals
- **Responsive**: Fully mobile-first design with tablet and desktop optimizations
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA attributes

## Getting Started

### Installation

```bash
# Clone the repository
git clone <repo-url>

# Install dependencies
npm install

# Run the development server
npm run dev

# Open in browser
# Navigate to http://localhost:3000
```

### Running Tests

The dynamic testing dashboard automatically launches when the page loads:

1. Click the floating test button in the bottom-right corner
2. Click "Start Testing" to run the full test suite
3. View individual test results by clicking on each test
4. Click "Run Tests Again" to re-run the suite

### Testing Utilities

All testing functions are located in `/lib/testing-utils.ts`:

```typescript
import { runAllTests } from '@/lib/testing-utils'

const results = runAllTests()
console.log(results)
```

Available test functions:
- `testSectionsRendered()`
- `testNavigationLinks()`
- `testProjectData()`
- `testSkillsRendering()`
- `testTestimonialsLoaded()`
- `testContactForm()`
- `testAnimations()`
- `testResponsiveDesign()`
- `testAccessibility()`
- `testSecurityHeaders()`
- `testPerformanceMetrics()`

## Project Structure

```
├── app/
│   ├── page.tsx              # Main page with section layout
│   ├── layout.tsx            # Root layout with metadata
│   └── globals.css           # Global styles and design tokens
├── components/
│   ├── hero.tsx              # Hero section component
│   ├── about.tsx             # About section
│   ├── skills.tsx            # Technical Arsenal section
│   ├── projects.tsx          # Featured Projects section
│   ├── experience.tsx        # My Journey timeline section
│   ├── testimonials.tsx      # What People Say section
│   ├── contact.tsx           # Let's Connect section
│   ├── navigation.tsx        # Navigation bar
│   ├── testing-dashboard.tsx # Dynamic testing interface
│   └── ui/                   # Shadcn UI components
├── lib/
│   ├── utils.ts              # Utility functions
│   └── testing-utils.ts      # Dynamic testing functions
└── public/                   # Static assets
```

## Technology Stack

### Frontend
- React 19 with TypeScript
- Next.js 16 (App Router)
- Tailwind CSS v4
- Shadcn UI Components

### Development & Testing
- Dynamic testing suite (custom built)
- Intersection Observer for animations
- Performance monitoring

### Security & Monitoring
- Built-in accessibility checks
- Performance metrics collection
- Component validation tests

## Dynamic Testing Details

### Test Results Display

The testing dashboard shows:
- **Pass/Fail Status**: Green checkmarks for passing tests, red X for failures
- **Execution Time**: Individual test duration in milliseconds
- **Total Coverage**: Overall test pass rate as a percentage
- **Detailed Messages**: Specific information about each test result

### Example Test Output

```json
{
  "name": "Dynamic Portfolio Test Suite",
  "tests": [
    {
      "name": "All sections rendered",
      "passed": true,
      "message": "All 7 sections found",
      "duration": 2.4
    },
    ...
  ],
  "passed": 10,
  "failed": 0,
  "total": 10,
  "duration": 45.23
}
```

## Color Palette

- **Primary (Teal)**: `oklch(0.55 0.15 155)` - #2B6D4F
- **Accent (Green)**: `oklch(0.55 0.16 165)` - #1A9B8E
- **Background**: `oklch(0.05 0 0)` - Very dark gray
- **Foreground**: `oklch(0.95 0 0)` - Near white
- **Card**: `oklch(0.08 0 0)` - Dark gray
- **Border**: `oklch(0.15 0 0)` - Medium dark gray

## Responsive Breakpoints

- **Mobile**: < 640px (sm:)
- **Tablet**: 640px - 1024px (md:)
- **Desktop**: 1024px+ (lg:)

## Performance Metrics

- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **Page Load**: < 3 seconds target
- **Component Render**: < 16ms (60fps)
- **Animation FPS**: 60fps smooth transitions

## Accessibility Features

- Semantic HTML (main, header, section tags)
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance (WCAG AA)
- Form labels and placeholders
- Screen reader friendly

## Security Features

- Content Security Policy headers
- X-Frame-Options protection
- X-Content-Type-Options enforcement
- HTTPS ready
- Form validation
- XSS protection

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

## Deployment

### Vercel (Recommended)

```bash
npm run build
vercel deploy
```

### Manual Deployment

```bash
npm run build
# Static files are in .next/static
# Deploy the .next directory
```

## Contributing

Feel free to fork and customize this portfolio for your own use. When making modifications:

1. Update test cases in `/lib/testing-utils.ts` for new components
2. Maintain the color scheme consistency
3. Keep animations performant
4. Test on mobile devices
5. Run the dynamic test suite before deployment

## License

This portfolio is open source and available under the MIT License.

## Contact

- Email: prasannakumar.dev@example.com
- GitHub: [Your GitHub URL]
- LinkedIn: [Your LinkedIn URL]

---

Built with precision for security and performance. Dynamic testing ensures reliability at every stage.
