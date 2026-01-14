import { DesktopNavigation, MobileNavigation } from '@/app/components/Navigation';
import { Card } from '@/app/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/app/components/ui/avatar';
import { Badge } from '@/app/components/ui/badge';

const MOCK_MATCHES = [
  { id: 1, name: 'Sarah', age: 25, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop', lastActive: '5m ago', online: true },
  { id: 2, name: 'Emily', age: 27, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop', lastActive: '1h ago', online: false },
  { id: 3, name: 'Jessica', age: 24, image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop', lastActive: '2h ago', online: true },
];

export function MatchesPage() {
  return (
    <div className="min-h-screen bg-background">
      <DesktopNavigation />
      <div className="max-w-7xl mx-auto p-4 pb-24 md:pb-8">
        <h1 className="text-2xl font-bold mb-6">Your Matches</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {MOCK_MATCHES.map((match) => (
            <Card key={match.id} className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="relative">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={match.image} />
                    <AvatarFallback>{match.name[0]}</AvatarFallback>
                  </Avatar>
                  {match.online && (
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold">{match.name}, {match.age}</h3>
                  <p className="text-sm text-muted-foreground">{match.lastActive}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <MobileNavigation />
    </div>
  );
}
