import Link from "next/link";

export default function WatchlistPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Watchlist</h1>
          <Link href="/" className="text-primary hover:underline">
            Home
          </Link>
        </div>
        
        <div className="mb-6">
          <p className="text-muted-foreground">
            Track stocks you&apos;re interested in studying.
          </p>
        </div>
        
        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">My Watchlist</h2>
          <p className="text-muted-foreground">Your watchlist is empty.</p>
          
          <div className="mt-6 space-y-2">
            <div className="flex items-center justify-between p-4 border rounded">
              <div>
                <p className="font-medium">AAPL</p>
                <p className="text-sm text-muted-foreground">Apple Inc. - Example Entry</p>
              </div>
              <button className="text-sm text-primary hover:underline">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
