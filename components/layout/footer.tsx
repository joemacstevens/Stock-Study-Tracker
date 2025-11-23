export function Footer() {
  return (
    <footer className="border-t mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Stock Study Tracker. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with Next.js 14 + Supabase
          </p>
        </div>
      </div>
    </footer>
  );
}
