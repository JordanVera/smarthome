import { SignedIn, SignedOut, UserProfile } from '@clerk/nextjs';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold gradient-header mb-4">
            Welcome to Your Dashboard
          </h1>
          <p className="text-xl text-foreground">
            Manage your smart home automation settings
          </p>
        </div>

        <SignedIn>
          <UserProfile
          // appearance={{
          //   baseTheme: 'dark',
          //   variables: {
          //     colorBackground: 'hsl(var(--muted-foreground))',
          //     colorInputBackground: 'hsl(var(--muted))',
          //     colorAlphaShade: 'hsl(var(--accent))',
          //     colorText: 'hsl(var(--foreground))',
          //     colorTextSecondary: 'hsl(var(--muted-foreground))',
          //     colorPrimary: 'hsl(var(--primary))',
          //     fontFamily: 'var(--font-sans)',
          //     borderRadius: '0.5rem',
          //   },
          //   elements: {
          //     card: 'bg-card shadow-md',
          //     navbar: 'hidden',
          //     navbarMobileMenuButton: 'hidden',
          //     headerSubtitle: 'text-muted-foreground',
          //     formButtonPrimary: 'bg-primary hover:bg-primary/90',
          //     formFieldInput: 'bg-background border border-input',
          //     dividerLine: 'bg-border',
          //     profileSectionPrimaryButton: 'bg-primary hover:bg-primary/90',
          //     accordionTriggerButton: 'hover:bg-accent',
          //   },
          // }}
          />
        </SignedIn>

        <SignedOut>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Sign In Required
            </h2>
            <p className="text-gray-300 mb-6">
              Please sign in to access your dashboard
            </p>
          </div>
        </SignedOut>
      </div>
    </div>
  );
}
