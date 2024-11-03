export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="container-custom py-8">
        {children}
      </main>
    </div>
  );
} 