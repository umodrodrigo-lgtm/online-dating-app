import { DesktopNavigation, MobileNavigation } from '@/app/components/Navigation';

export function SettingsPage() {
  return (
    <div className="min-h-screen bg-background">
      <DesktopNavigation />
      <div className="max-w-7xl mx-auto p-4 pb-24 md:pb-8">
        <h1 className="text-2xl font-bold mb-4">Settings</h1>
      </div>
      <MobileNavigation />
    </div>
  );
}
