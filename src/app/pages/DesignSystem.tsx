import { Link } from 'react-router-dom';
import { Heart, Home, Settings, User, Users, MessageCircle, Star, X, Shield, Sparkles, Check } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Badge } from '@/app/components/ui/badge';
import { Card } from '@/app/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/app/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Slider } from '@/app/components/ui/slider';
import { Switch } from '@/app/components/ui/switch';
import { Checkbox } from '@/app/components/ui/checkbox';
import { Skeleton } from '@/app/components/ui/skeleton';
import { Progress } from '@/app/components/ui/progress';
import { Separator } from '@/app/components/ui/separator';
import { toast } from 'sonner';

export function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-white sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Heart className="w-8 h-8 text-primary fill-primary" />
              <div>
                <h1 className="text-2xl font-bold">MatchWave Design System</h1>
                <p className="text-sm text-muted-foreground">Component library and style guide</p>
              </div>
            </div>
            <Link to="/">
              <Button variant="outline">Back to App</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Color Palette */}
        <Section title="Color Palette" description="Core brand colors and semantic color system">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ColorSwatch name="Primary" value="#FF6B6B" description="Main brand color for CTAs and primary actions" />
            <ColorSwatch name="Secondary" value="#FFF0F0" description="Light backgrounds and subtle highlights" />
            <ColorSwatch name="Accent" value="#FFE5E5" description="Accents and hover states" />
            <ColorSwatch name="Destructive" value="#EF4444" description="Error states and destructive actions" />
            <ColorSwatch name="Muted" value="#F5F5F5" description="Backgrounds and disabled states" />
            <ColorSwatch name="Foreground" value="#1a1a1a" description="Primary text color" />
          </div>
        </Section>

        {/* Typography */}
        <Section title="Typography" description="Type scale and font weights">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl font-bold">Heading 1</h1>
              <code className="text-sm text-muted-foreground">text-5xl font-bold</code>
            </div>
            <div className="space-y-2">
              <h2 className="text-4xl font-bold">Heading 2</h2>
              <code className="text-sm text-muted-foreground">text-4xl font-bold</code>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold">Heading 3</h3>
              <code className="text-sm text-muted-foreground">text-3xl font-bold</code>
            </div>
            <div className="space-y-2">
              <p className="text-xl">Large body text for important content</p>
              <code className="text-sm text-muted-foreground">text-xl</code>
            </div>
            <div className="space-y-2">
              <p className="text-base">Base body text for standard content</p>
              <code className="text-sm text-muted-foreground">text-base</code>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Small text and secondary information</p>
              <code className="text-sm text-muted-foreground">text-sm text-muted-foreground</code>
            </div>
          </div>
        </Section>

        {/* Buttons */}
        <Section title="Buttons" description="Button variants and sizes">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Variants</h3>
              <div className="flex flex-wrap gap-4">
                <Button>Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="ghost">Ghost Button</Button>
                <Button variant="destructive">Destructive Button</Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Sizes</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon"><Heart className="w-4 h-4" /></Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-bold text-lg">With Icons</h3>
              <div className="flex flex-wrap gap-4">
                <Button><Heart className="w-4 h-4 mr-2" />Like</Button>
                <Button variant="outline"><Star className="w-4 h-4 mr-2" />Super Like</Button>
                <Button variant="destructive"><X className="w-4 h-4 mr-2" />Pass</Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg">Action Buttons (Dating Specific)</h3>
              <div className="flex justify-center gap-4">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-16 h-16 rounded-full border-2 hover:bg-destructive/10 hover:border-destructive"
                >
                  <X className="w-8 h-8 text-destructive" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-14 h-14 rounded-full border-2 hover:bg-blue-500/10 hover:border-blue-500"
                >
                  <Star className="w-6 h-6 text-blue-500" />
                </Button>
                <Button
                  size="lg"
                  className="w-16 h-16 rounded-full bg-primary hover:bg-primary/90"
                >
                  <Heart className="w-8 h-8" />
                </Button>
              </div>
            </div>
          </div>
        </Section>

        {/* Form Inputs */}
        <Section title="Form Inputs" description="Input fields and form elements">
          <div className="space-y-6 max-w-md">
            <div className="space-y-2">
              <Label htmlFor="default">Default Input</Label>
              <Input id="default" placeholder="Enter text..." />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="disabled">Disabled Input</Label>
              <Input id="disabled" placeholder="Disabled" disabled />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="error">Error State</Label>
              <Input id="error" placeholder="Invalid input" className="border-destructive" />
              <p className="text-sm text-destructive">This field is required</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password Input</Label>
              <Input id="password" type="password" placeholder="Enter password" />
            </div>
          </div>
        </Section>

        {/* Badges & Tags */}
        <Section title="Badges & Tags" description="Interest chips and status indicators">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Variants</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Interest Tags</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="cursor-pointer">Travel</Badge>
                <Badge className="cursor-pointer">Music</Badge>
                <Badge className="cursor-pointer">Sports</Badge>
                <Badge className="cursor-pointer">Food</Badge>
                <Badge className="cursor-pointer">Photography</Badge>
                <Badge className="cursor-pointer">Art</Badge>
                <Badge className="cursor-pointer">Fitness</Badge>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg">Online Status</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-sm">Online</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-muted rounded-full" />
                  <span className="text-sm">Offline</span>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Cards */}
        <Section title="Cards" description="Content containers and profile cards">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="font-bold mb-2">Default Card</h3>
              <p className="text-sm text-muted-foreground">
                Basic card with padding and rounded corners
              </p>
            </Card>
            
            <Card className="p-0 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=200&fit=crop"
                alt="Profile"
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold">Profile Card</h3>
                <p className="text-sm text-muted-foreground">With image header</p>
              </div>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold mb-2">Interactive Card</h3>
              <p className="text-sm text-muted-foreground">
                Hover for elevation effect
              </p>
            </Card>
          </div>
        </Section>

        {/* Avatars */}
        <Section title="Avatars" description="User profile pictures">
          <div className="flex flex-wrap items-end gap-6">
            <div className="space-y-2 text-center">
              <Avatar className="w-20 h-20 mx-auto">
                <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="text-sm text-muted-foreground">Large</div>
            </div>
            
            <div className="space-y-2 text-center">
              <Avatar className="w-16 h-16 mx-auto">
                <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <div className="text-sm text-muted-foreground">Medium</div>
            </div>
            
            <div className="space-y-2 text-center">
              <Avatar className="w-12 h-12 mx-auto">
                <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" />
                <AvatarFallback>SK</AvatarFallback>
              </Avatar>
              <div className="text-sm text-muted-foreground">Small</div>
            </div>
            
            <div className="space-y-2 text-center">
              <div className="relative w-16 h-16 mx-auto">
                <Avatar className="w-16 h-16">
                  <AvatarImage src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop" />
                  <AvatarFallback>ON</AvatarFallback>
                </Avatar>
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
              </div>
              <div className="text-sm text-muted-foreground">Online</div>
            </div>
          </div>
        </Section>

        {/* Tabs */}
        <Section title="Tabs" description="Navigation tabs">
          <Tabs defaultValue="tab1" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="tab1">Discover</TabsTrigger>
              <TabsTrigger value="tab2">Matches</TabsTrigger>
              <TabsTrigger value="tab3">Messages</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1" className="mt-4">
              <Card className="p-6">
                <p className="text-muted-foreground">Discover content goes here</p>
              </Card>
            </TabsContent>
            <TabsContent value="tab2" className="mt-4">
              <Card className="p-6">
                <p className="text-muted-foreground">Matches content goes here</p>
              </Card>
            </TabsContent>
            <TabsContent value="tab3" className="mt-4">
              <Card className="p-6">
                <p className="text-muted-foreground">Messages content goes here</p>
              </Card>
            </TabsContent>
          </Tabs>
        </Section>

        {/* Sliders */}
        <Section title="Sliders" description="Range inputs for filters">
          <div className="space-y-8 max-w-md">
            <div className="space-y-4">
              <Label>Age Range: 22 - 35</Label>
              <Slider defaultValue={[22, 35]} max={70} min={18} step={1} />
            </div>
            
            <div className="space-y-4">
              <Label>Distance: 25 miles</Label>
              <Slider defaultValue={[25]} max={100} min={5} step={5} />
            </div>
          </div>
        </Section>

        {/* Switches & Checkboxes */}
        <Section title="Switches & Checkboxes" description="Toggle controls">
          <div className="space-y-6 max-w-md">
            <div className="flex items-center justify-between">
              <Label htmlFor="notifications">Push Notifications</Label>
              <Switch id="notifications" />
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="show-distance">Show Distance</Label>
              <Switch id="show-distance" defaultChecked />
            </div>
            
            <Separator />
            
            <div className="flex items-start gap-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="leading-tight cursor-pointer">
                I agree to the Terms of Service and Privacy Policy
              </Label>
            </div>
          </div>
        </Section>

        {/* Loading States */}
        <Section title="Loading States" description="Skeletons and loaders">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Skeleton Loaders</h3>
              <div className="space-y-4 max-w-md">
                <div className="flex items-center gap-4">
                  <Skeleton className="w-12 h-12 rounded-full" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-3 w-1/2" />
                  </div>
                </div>
                <Skeleton className="h-32 w-full rounded-lg" />
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Progress Indicators</h3>
              <div className="space-y-4 max-w-md">
                <Progress value={33} />
                <Progress value={66} />
                <Progress value={100} />
              </div>
            </div>
          </div>
        </Section>

        {/* Toasts */}
        <Section title="Toast Notifications" description="Temporary notification messages">
          <div className="flex flex-wrap gap-4">
            <Button
              variant="outline"
              onClick={() => toast.success('Successfully matched!')}
            >
              Success Toast
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.error('Failed to send message')}
            >
              Error Toast
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.info('New match available')}
            >
              Info Toast
            </Button>
          </div>
        </Section>

        {/* Icons */}
        <Section title="Icons" description="Lucide icon library">
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
            <IconDisplay icon={<Heart />} name="Heart" />
            <IconDisplay icon={<Star />} name="Star" />
            <IconDisplay icon={<X />} name="X" />
            <IconDisplay icon={<MessageCircle />} name="Message" />
            <IconDisplay icon={<Users />} name="Users" />
            <IconDisplay icon={<User />} name="User" />
            <IconDisplay icon={<Shield />} name="Shield" />
            <IconDisplay icon={<Sparkles />} name="Sparkles" />
            <IconDisplay icon={<Settings />} name="Settings" />
            <IconDisplay icon={<Home />} name="Home" />
            <IconDisplay icon={<Check />} name="Check" />
          </div>
        </Section>

        {/* Spacing */}
        <Section title="Spacing System" description="8px grid system">
          <div className="space-y-4">
            {[1, 2, 4, 6, 8, 12, 16].map((size) => (
              <div key={size} className="flex items-center gap-4">
                <div className={`bg-primary h-4`} style={{ width: `${size * 4}px` }} />
                <code className="text-sm">{size * 4}px (gap-{size})</code>
              </div>
            ))}
          </div>
        </Section>

        {/* Border Radius */}
        <Section title="Border Radius" description="Consistent rounded corners">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-2 text-center">
              <div className="w-20 h-20 bg-primary mx-auto rounded-sm" />
              <code className="text-sm">rounded-sm (8px)</code>
            </div>
            <div className="space-y-2 text-center">
              <div className="w-20 h-20 bg-primary mx-auto rounded-md" />
              <code className="text-sm">rounded-md (10px)</code>
            </div>
            <div className="space-y-2 text-center">
              <div className="w-20 h-20 bg-primary mx-auto rounded-lg" />
              <code className="text-sm">rounded-lg (12px)</code>
            </div>
            <div className="space-y-2 text-center">
              <div className="w-20 h-20 bg-primary mx-auto rounded-full" />
              <code className="text-sm">rounded-full</code>
            </div>
          </div>
        </Section>

        {/* Shadows */}
        <Section title="Shadows" description="Soft elevation levels">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 shadow-sm">
              <h3 className="font-bold mb-2">Small Shadow</h3>
              <code className="text-sm text-muted-foreground">shadow-sm</code>
            </Card>
            <Card className="p-6 shadow-md">
              <h3 className="font-bold mb-2">Medium Shadow</h3>
              <code className="text-sm text-muted-foreground">shadow-md</code>
            </Card>
            <Card className="p-6 shadow-lg">
              <h3 className="font-bold mb-2">Large Shadow</h3>
              <code className="text-sm text-muted-foreground">shadow-lg</code>
            </Card>
          </div>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
  return (
    <section className="mb-16">
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div>{children}</div>
      <Separator className="mt-16" />
    </section>
  );
}

function ColorSwatch({ name, value, description }: { name: string; value: string; description: string }) {
  return (
    <Card className="p-6">
      <div className="w-full h-20 rounded-lg mb-4" style={{ backgroundColor: value }} />
      <h3 className="font-bold mb-1">{name}</h3>
      <code className="text-sm text-muted-foreground">{value}</code>
      <p className="text-sm text-muted-foreground mt-2">{description}</p>
    </Card>
  );
}

function IconDisplay({ icon, name }: { icon: React.ReactNode; name: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-secondary text-primary">
        {icon}
      </div>
      <span className="text-xs text-muted-foreground">{name}</span>
    </div>
  );
}
