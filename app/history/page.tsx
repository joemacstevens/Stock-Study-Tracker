import Link from "next/link";

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">History</h1>
          <Link href="/" className="text-primary hover:underline">
            Home
          </Link>
        </div>
        
        <div className="mb-6">
          <p className="text-muted-foreground">
            Review your past stock studies and their results.
          </p>
        </div>
        
        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Study History</h2>
          <p className="text-muted-foreground">No historical data available yet.</p>
          
          <div className="mt-6 space-y-4">
            <div className="p-4 border rounded bg-muted/50">
              <p className="font-medium">Example Entry</p>
              <p className="text-sm text-muted-foreground mt-1">
                This is a placeholder for historical study entries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
