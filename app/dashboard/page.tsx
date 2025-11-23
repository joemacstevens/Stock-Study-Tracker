import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <Link href="/" className="text-primary hover:underline">
            Home
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Total Studies</h2>
            <p className="text-3xl font-bold">0</p>
            <p className="text-sm text-muted-foreground mt-2">Placeholder data</p>
          </div>
          
          <div className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Active Assignments</h2>
            <p className="text-3xl font-bold">0</p>
            <p className="text-sm text-muted-foreground mt-2">Placeholder data</p>
          </div>
          
          <div className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Watchlist Items</h2>
            <p className="text-3xl font-bold">0</p>
            <p className="text-sm text-muted-foreground mt-2">Placeholder data</p>
          </div>
        </div>
        
        <div className="mt-8 p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
          <p className="text-muted-foreground">No recent activity to display.</p>
        </div>
      </div>
    </div>
  );
}
