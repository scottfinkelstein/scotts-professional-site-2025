# Senior Technology Leader Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional interface with dark mode support
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Navigation**: Sticky navigation with smooth scrolling to sections
- **Three Main Sections**:
  - **About**: Introduction and core competencies
  - **Work**: Professional experience and achievements
  - **Contact**: Contact form and social links

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Features**: Client-side interactivity with React hooks

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization

To customize the portfolio for your own use:

1. **Personal Information**: Update content in the component files:
   - `components/About.tsx` - Your bio and skills
   - `components/Work.tsx` - Your experience and achievements
   - `components/Contact.tsx` - Your contact information and social links

2. **Styling**: Modify colors and design in:
   - `tailwind.config.ts` - Theme configuration
   - `app/globals.css` - Global styles

3. **Metadata**: Update SEO information in `app/layout.tsx`

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── About.tsx         # About section
│   ├── Contact.tsx       # Contact section
│   ├── Navigation.tsx    # Navigation bar
│   └── Work.tsx          # Work experience section
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## License

MIT License - feel free to use this template for your own portfolio!
