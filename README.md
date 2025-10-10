# React App with Tailwind CSS

A modern React application built with Vite and styled with Tailwind CSS version 3.4.18.

## Features

- ⚡ **Vite** - Lightning-fast build tool and development server
- ⚛️ **React 18** - Latest React features with concurrent rendering
- 🎨 **Tailwind CSS 3.4.18** - Utility-first CSS framework
- 🔥 **Hot Module Replacement** - Instant updates during development

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Create a production build:

```bash
npm run build
```

### Preview

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   └── SampleComponent.jsx    # Example component with Tailwind styling
├── assets/
│   └── react.svg             # React logo
├── App.jsx                   # Main application component
├── index.css                 # Tailwind CSS imports
└── main.jsx                  # Application entry point
```

## Tailwind CSS Configuration

The project is configured with Tailwind CSS 3.4.18. The configuration includes:

- Content paths for HTML and JSX files
- Base Tailwind directives in `src/index.css`
- PostCSS configuration for processing

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Technologies Used

- **React** - JavaScript library for building user interfaces
- **Vite** - Next generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS post-processor
- **Autoprefixer** - CSS vendor prefixing

## License

MIT