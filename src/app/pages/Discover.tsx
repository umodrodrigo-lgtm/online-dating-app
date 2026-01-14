import { useState } from 'react';
import { Heart, X, Star, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { DesktopNavigation, MobileNavigation } from '@/app/components/Navigation';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/app/components/ui/sheet';
import { Slider } from '@/app/components/ui/slider';
import { Label } from '@/app/components/ui/label';

const MOCK_PROFILES = [
  { id: 1, name: 'Sarah', age: 25, distance: '3 miles away', bio: 'Love to travel and try new restaurants', interests: ['Travel', 'Food', 'Music'], image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop' },
  { id: 2, name: 'Emily', age: 27, distance: '5 miles away', bio: 'Yoga instructor and coffee enthusiast ☕', interests: ['Yoga', 'Coffee', 'Hiking'], image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop' },
  { id: 3, name: 'Jessica', age: 24, distance: '2 miles away', bio: 'Artist and dog lover 🎨🐕', interests: ['Art', 'Pets', 'Photography'], image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop' },
];

export function DiscoverPage() {
  const [profiles, setProfiles] = useState(MOCK_PROFILES);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLike = () => {
    setCurrentIndex(prev => prev + 1);
  };

  const handlePass = () => {
    setCurrentIndex(prev => prev + 1);
  };

  const handleSuperLike = () => {
    setCurrentIndex(prev => prev + 1);
  };

  const currentProfile = profiles[currentIndex];

  return (
    <div className="min-h-screen bg-background">
      <DesktopNavigation />

      <div className="max-w-lg mx-auto p-4 pb-24 md:pb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Discover</h1>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <SlidersHorizontal className="w-4 h-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>
              <div className="space-y-6 mt-6">
                <div className="space-y-2">
                  <Label>Age Range</Label>
                  <Slider defaultValue={[22, 35]} min={18} max={70} step={1} />
                  <p className="text-sm text-muted-foreground">22 - 35 years</p>
                </div>
                <div className="space-y-2">
                  <Label>Distance</Label>
                  <Slider defaultValue={[25]} min={5} max={100} step={5} />
                  <p className="text-sm text-muted-foreground">Up to 25 miles</p>
                </div>
                <Button className="w-full">Apply Filters</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {currentProfile ? (
          <div className="space-y-4">
            <Card className="overflow-hidden">
              <div className="relative aspect-[3/4]">
                <img
                  src={currentProfile.image}
                  alt={currentProfile.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <h2 className="text-3xl font-bold mb-1">
                    {currentProfile.name}, {currentProfile.age}
                  </h2>
                  <p className="text-sm opacity-90 mb-3">{currentProfile.distance}</p>
                  <p className="mb-3">{currentProfile.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {currentProfile.interests.map((interest) => (
                      <Badge key={interest} variant="secondary" className="bg-white/20 hover:bg-white/30">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            <div className="flex items-center justify-center gap-4">
              <Button
                size="lg"
                variant="outline"
                className="w-16 h-16 rounded-full border-2 hover:bg-destructive/10 hover:border-destructive"
                onClick={handlePass}
              >
                <X className="w-8 h-8 text-destructive" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-14 h-14 rounded-full border-2 hover:bg-blue-500/10 hover:border-blue-500"
                onClick={handleSuperLike}
              >
                <Star className="w-6 h-6 text-blue-500" />
              </Button>
              <Button
                size="lg"
                className="w-16 h-16 rounded-full bg-primary hover:bg-primary/90"
                onClick={handleLike}
              >
                <Heart className="w-8 h-8" />
              </Button>
            </div>
          </div>
        ) : (
          <Card className="p-12 text-center">
            <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">No More Profiles</h3>
            <p className="text-muted-foreground mb-6">
              You've seen everyone in your area. Check back later for new matches!
            </p>
            <Button variant="outline">Adjust Filters</Button>
          </Card>
        )}
      </div>

      <MobileNavigation />
    </div>
  );
}
