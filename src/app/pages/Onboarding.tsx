import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Upload, MapPin } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { Slider } from '@/app/components/ui/slider';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Checkbox } from '@/app/components/ui/checkbox';
import { Progress } from '@/app/components/ui/progress';

const INTERESTS = [
  'Travel', 'Music', 'Movies', 'Sports', 'Gaming', 'Reading', 'Cooking',
  'Photography', 'Art', 'Fitness', 'Dancing', 'Hiking', 'Yoga', 'Coffee',
  'Wine', 'Pets', 'Technology', 'Fashion'
];

export function OnboardingPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    location: '',
    bio: '',
    interests: [] as string[],
    ageRange: [22, 35] as number[],
    distance: 25,
    intent: 'relationship',
    agreeToSafety: false,
  });

  const totalSteps = 5;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      navigate('/discover');
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const toggleInterest = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/20 to-accent/10 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl p-8">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Heart className="w-8 h-8 text-primary fill-primary" />
          <span className="text-2xl font-bold">MatchWave</span>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Step {step} of {totalSteps}</span>
            <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} />
        </div>

        {step === 1 && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-2">Basic Information</h2>
              <p className="text-muted-foreground">Let's start with the basics</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Display Name</Label>
              <Input
                id="name"
                placeholder="What should we call you?"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="25"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="location"
                    placeholder="City, State"
                    className="pl-10"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                placeholder="Tell us about yourself..."
                rows={4}
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              />
              <p className="text-xs text-muted-foreground">Write a short bio to help others get to know you</p>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-2">Your Interests</h2>
              <p className="text-muted-foreground">Select at least 3 interests that describe you</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {INTERESTS.map((interest) => (
                <Badge
                  key={interest}
                  variant={formData.interests.includes(interest) ? 'default' : 'outline'}
                  className="cursor-pointer px-4 py-2 text-sm"
                  onClick={() => toggleInterest(interest)}
                >
                  {interest}
                </Badge>
              ))}
            </div>

            <p className="text-sm text-muted-foreground text-center">
              Selected: {formData.interests.length} interests
            </p>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-2">Match Preferences</h2>
              <p className="text-muted-foreground">Who are you looking to meet?</p>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <Label>Age Range</Label>
                <div className="px-2">
                  <Slider
                    value={formData.ageRange}
                    onValueChange={(value) => setFormData({ ...formData, ageRange: value as number[] })}
                    min={18}
                    max={70}
                    step={1}
                  />
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  {formData.ageRange[0]} - {formData.ageRange[1]} years old
                </p>
              </div>

              <div className="space-y-4">
                <Label>Maximum Distance</Label>
                <div className="px-2">
                  <Slider
                    value={[formData.distance]}
                    onValueChange={(value) => setFormData({ ...formData, distance: value[0] })}
                    min={5}
                    max={100}
                    step={5}
                  />
                </div>
                <p className="text-sm text-muted-foreground text-center">{formData.distance} miles</p>
              </div>

              <div className="space-y-2">
                <Label>Looking for</Label>
                <select
                  className="flex h-10 w-full rounded-md border border-input bg-input-background px-3 py-2 text-sm"
                  value={formData.intent}
                  onChange={(e) => setFormData({ ...formData, intent: e.target.value })}
                >
                  <option value="relationship">Long-term relationship</option>
                  <option value="dating">Casual dating</option>
                  <option value="friends">New friends</option>
                  <option value="open">Open to anything</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-2">Add Photos</h2>
              <p className="text-muted-foreground">Upload at least 2 photos to get started</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-square border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-primary hover:bg-secondary/50 transition-colors"
                >
                  <Upload className="w-8 h-8 text-muted-foreground mb-2" />
                  <span className="text-xs text-muted-foreground">Photo {i}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-muted-foreground text-center">
              Tap to upload photos. We recommend clear photos where your face is visible.
            </p>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-2">Safety First</h2>
              <p className="text-muted-foreground">Your safety is our priority</p>
            </div>

            <Card className="p-6 bg-secondary/50 border-primary/20">
              <h3 className="font-bold mb-4">Safety Tips:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Meet in public places for first dates</li>
                <li>• Tell a friend where you're going</li>
                <li>• Never share financial information</li>
                <li>• Trust your instincts</li>
                <li>• Report suspicious behavior immediately</li>
              </ul>
            </Card>

            <div className="flex items-start gap-2">
              <Checkbox
                id="safety"
                checked={formData.agreeToSafety}
                onCheckedChange={(checked) => setFormData({ ...formData, agreeToSafety: checked as boolean })}
              />
              <Label htmlFor="safety" className="text-sm leading-tight cursor-pointer">
                I understand and agree to follow MatchWave's safety guidelines
              </Label>
            </div>
          </div>
        )}

        <div className="flex gap-4 mt-8">
          {step > 1 && (
            <Button variant="outline" onClick={handleBack} className="flex-1">
              Back
            </Button>
          )}
          <Button onClick={handleNext} className="flex-1" disabled={step === 5 && !formData.agreeToSafety}>
            {step === totalSteps ? 'Get Started' : 'Continue'}
          </Button>
        </div>
      </Card>
    </div>
  );
}
