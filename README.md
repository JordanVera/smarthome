# Smart Home Landing Page

A modern, responsive landing page for smart home services built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with beautiful animations
- **Dark/Light Theme**: Toggle between themes with system preference detection
- **Authentication**: Built-in user authentication with Clerk
- **Role-Based Access Control**: Admin-only access to estimate calculator
- **Modern UI Components**: Built with shadcn/ui components

## Role-Based Access Control

The estimate page (`/estimate`) is now protected and only accessible to users with `ADMIN` role in their Clerk public metadata.

### How it works

1. **AdminOnly Component**: A reusable component that checks if the current user has `ADMIN` role
2. **Protected Routes**: The estimate page is wrapped with `AdminOnly` component
3. **Conditional Navigation**: The estimate link in the navbar only appears for admin users
4. **Access Denied Page**: Non-admin users see a friendly access denied message

### Setting up admin access

To grant a user admin access:

1. Go to your Clerk Dashboard
2. Navigate to Users
3. Select the user you want to make an admin
4. Go to Public metadata
5. Add a key `role` with value `ADMIN`

```json
{
  "role": "ADMIN"
}
```

### Testing the feature

1. **Without admin role**: Visit `/estimate` - you'll see an "Access Denied" message
2. **With admin role**: Visit `/estimate` - you'll see the full estimate calculator
3. **Navbar behavior**: The estimate link only appears for admin users
4. **Mobile menu**: The mobile hamburger menu also respects admin permissions

### Components

- `AdminOnly`: Wraps content that should only be visible to admins
- `Navbar`: Updated to conditionally show estimate link
- `EstimatePage`: Protected with access control and fallback UI

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install` or `pnpm install`
3. Set up your Clerk environment variables
4. Run the development server: `npm run dev` or `pnpm dev`
5. Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

Create a `.env.local` file with your Clerk configuration:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
```

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Clerk
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **State Management**: React hooks
- **Mobile Navigation**: Vaul drawer

## Project Structure

```
src/
├── app/                 # Next.js app router
│   ├── estimate/       # Protected estimate page
│   ├── dashboard/      # User dashboard
│   └── globals.css     # Global styles
├── components/         # Reusable components
│   ├── AdminOnly.tsx  # Role-based access control
│   ├── Navbar.tsx     # Navigation with admin checks
│   └── ui/            # shadcn/ui components
├── hooks/              # Custom React hooks
└── lib/                # Utility functions
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test the role-based access control
5. Submit a pull request

## License

This project is licensed under the MIT License.
