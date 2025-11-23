import Link from "next/link";

export default function AssignmentsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Assignments</h1>
          <Link href="/" className="text-primary hover:underline">
            Home
          </Link>
        </div>
        
        <div className="mb-6">
          <p className="text-muted-foreground">
            Manage your stock study assignments here.
          </p>
        </div>
        
        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Assignment List</h2>
          <p className="text-muted-foreground">No assignments available yet.</p>
          
          <div className="mt-6">
            <p className="text-sm text-muted-foreground">
              Note: Admin users can create and manage assignments. Public users can view them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
