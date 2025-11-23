# Stock Study Tracker

A Next.js 14 + Supabase application for tracking and managing stock studies, assignments, and watchlists. Public read access with admin write capabilities.

## Features

- 📊 Dashboard with overview statistics
- 📝 Assignments management
- 📜 Study history tracking
- 👁️ Stock watchlist
- 🔐 Admin panel for content management
- 🪄 Magic link authentication via Supabase
- 🎨 Modern UI with Tailwind CSS and shadcn/ui

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Database & Auth:** Supabase
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Icons:** Lucide React

## Project Structure

```
├── app/
│   ├── api/              # API routes
│   │   ├── auth/         # Authentication endpoints
│   │   ├── studies/      # Studies API
│   │   └── watchlist/    # Watchlist API
│   ├── admin/            # Admin panel page
│   ├── assignments/      # Assignments page
│   ├── auth/             # Auth pages (login)
│   ├── dashboard/        # Dashboard page
│   ├── history/          # Study history page
│   ├── watchlist/        # Watchlist page
│   └── layout.tsx        # Root layout
├── components/
│   ├── layout/           # Layout components (navbar, footer)
│   └── ui/               # shadcn/ui components
├── lib/
│   ├── supabase/         # Supabase client utilities
│   │   ├── client.ts     # Browser client
│   │   ├── server.ts     # Server client
│   │   └── middleware.ts # Auth middleware
│   └── utils.ts          # Utility functions
└── middleware.ts         # Next.js middleware
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Supabase account and project

### Installation

1. Clone the repository:
```bash
git clone https://github.com/joemacstevens/Stock-Study-Tracker.git
cd Stock-Study-Tracker
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory:
```bash
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

See `.env.example` for reference.

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Supabase Setup

To fully integrate with Supabase, you'll need to:

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Set up your database schema (tables for studies, assignments, watchlist, etc.)
3. Configure authentication providers (Email/Magic Link)
4. Update your `.env.local` with your Supabase credentials

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Authentication

The app uses Supabase Auth with magic links:

1. Users enter their email on the login page
2. Supabase sends a magic link to their email
3. Clicking the link authenticates the user
4. Admin users have write access; public users have read access

## Pages

- **/** - Home page with navigation
- **/dashboard** - Overview statistics and recent activity
- **/assignments** - View and manage study assignments
- **/history** - Review past studies
- **/watchlist** - Track stocks of interest
- **/admin** - Admin panel (protected)
- **/auth/login** - Login with magic link

## API Routes

- `GET /api/studies` - Fetch all studies
- `POST /api/studies` - Create a new study (admin only)
- `GET /api/watchlist` - Fetch watchlist items
- `POST /api/watchlist` - Add to watchlist
- `GET /api/auth/callback` - Handle auth callback

## Development Notes

This is a starter template with placeholder components and API routes. To complete the application:

1. Set up your Supabase database schema
2. Implement actual data fetching in API routes
3. Add authentication checks for admin routes
4. Enhance UI components with full functionality
5. Add form validation and error handling
6. Implement real-time updates with Supabase subscriptions

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.