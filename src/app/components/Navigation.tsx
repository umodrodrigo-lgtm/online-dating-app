import { Link, useLocation } from 'react-router-dom';
import { Heart, MessageCircle, Users, User, Home, Settings } from 'lucide-react';
import { cn } from '@/app/components/ui/utils';

export function DesktopNavigation() {
  return (
    <nav className="hidden md:flex items-center justify-between px-8 py-4 bg-white border-b border-border">
      <Link to="/discover" className="flex items-center gap-2">
        <Heart className="w-8 h-8 text-primary fill-primary" />
        <span className="text-2xl font-bold text-foreground">MatchWave</span>
      </Link>
      
      <div className="flex items-center gap-6">
        <NavLink to="/discover" icon={<Home className="w-5 h-5" />} label="Discover" />
        <NavLink to="/matches" icon={<Users className="w-5 h-5" />} label="Matches" />
        <NavLink to="/chat" icon={<MessageCircle className="w-5 h-5" />} label="Messages" />
        <NavLink to="/my-profile" icon={<User className="w-5 h-5" />} label="Profile" />
      </div>
    </nav>
  );
}

export function MobileNavigation() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border z-50">
      <div className="flex items-center justify-around px-4 py-3">
        <MobileNavLink to="/discover" icon={<Home className="w-6 h-6" />} label="Discover" />
        <MobileNavLink to="/matches" icon={<Users className="w-6 h-6" />} label="Matches" />
        <MobileNavLink to="/chat" icon={<MessageCircle className="w-6 h-6" />} label="Chat" />
        <MobileNavLink to="/my-profile" icon={<User className="w-6 h-6" />} label="Profile" />
      </div>
    </nav>
  );
}

function NavLink({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) {
  const location = useLocation();
  const isActive = location.pathname.startsWith(to);

  return (
    <Link
      to={to}
      className={cn(
        'flex items-center gap-2 px-4 py-2 rounded-lg transition-colors',
        isActive
          ? 'text-primary bg-secondary'
          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
      )}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </Link>
  );
}

function MobileNavLink({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) {
  const location = useLocation();
  const isActive = location.pathname.startsWith(to);

  return (
    <Link
      to={to}
      className={cn(
        'flex flex-col items-center gap-1 transition-colors',
        isActive ? 'text-primary' : 'text-muted-foreground'
      )}
    >
      {icon}
      <span className="text-xs font-medium">{label}</span>
    </Link>
  );
}
