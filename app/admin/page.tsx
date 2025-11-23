import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Admin Panel</h1>
          <Link href="/" className="text-primary hover:underline">
            Home
          </Link>
        </div>
        
        <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm font-medium text-yellow-800">
            🔒 This page requires admin authentication
          </p>
          <p className="text-sm text-yellow-700 mt-1">
            In production, this page would be protected and only accessible to authenticated admin users.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Manage Studies</h2>
            <p className="text-muted-foreground mb-4">
              Create, edit, and delete stock studies.
            </p>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90">
              Create New Study
            </button>
          </div>
          
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">User Management</h2>
            <p className="text-muted-foreground mb-4">
              View and manage user access.
            </p>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90">
              View Users
            </button>
          </div>
          
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Content Management</h2>
            <p className="text-muted-foreground mb-4">
              Manage assignments and watchlists.
            </p>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90">
              Manage Content
            </button>
          </div>
          
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Settings</h2>
            <p className="text-muted-foreground mb-4">
              Configure application settings.
            </p>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90">
              View Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
