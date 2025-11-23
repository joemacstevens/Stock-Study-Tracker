import Link from "next/link";

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Stock Study Tracker
          </Link>
          
          <div className="flex gap-6">
            <Link href="/dashboard" className="hover:text-primary">
              Dashboard
            </Link>
            <Link href="/assignments" className="hover:text-primary">
              Assignments
            </Link>
            <Link href="/history" className="hover:text-primary">
              History
            </Link>
            <Link href="/watchlist" className="hover:text-primary">
              Watchlist
            </Link>
            <Link href="/admin" className="hover:text-primary">
              Admin
            </Link>
            <Link href="/auth/login" className="hover:text-primary">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
