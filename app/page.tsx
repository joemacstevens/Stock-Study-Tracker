import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Stock Study Tracker</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Track and manage stock studies, assignments, and watchlists.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            href="/dashboard"
            className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">Dashboard</h2>
            <p className="text-muted-foreground">View your overview and statistics</p>
          </Link>
          
          <Link
            href="/assignments"
            className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">Assignments</h2>
            <p className="text-muted-foreground">Manage your stock study assignments</p>
          </Link>
          
          <Link
            href="/history"
            className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">History</h2>
            <p className="text-muted-foreground">Review past studies and results</p>
          </Link>
          
          <Link
            href="/watchlist"
            className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">Watchlist</h2>
            <p className="text-muted-foreground">Track stocks you&apos;re watching</p>
          </Link>
          
          <Link
            href="/admin"
            className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">Admin</h2>
            <p className="text-muted-foreground">Admin panel (protected)</p>
          </Link>
          
          <Link
            href="/auth/login"
            className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">Login</h2>
            <p className="text-muted-foreground">Sign in with magic link</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
