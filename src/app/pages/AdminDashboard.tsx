import { DesktopNavigation } from '@/app/components/Navigation';

export function AdminDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <DesktopNavigation />
      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      </div>
    </div>
  );
}
