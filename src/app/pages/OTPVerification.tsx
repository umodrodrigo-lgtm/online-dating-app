import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/app/components/ui/input-otp';

export function OTPVerificationPage() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/onboarding');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/20 to-accent/10 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8">
        <Link to="/" className="flex items-center justify-center gap-2 mb-8">
          <Heart className="w-8 h-8 text-primary fill-primary" />
          <span className="text-2xl font-bold">MatchWave</span>
        </Link>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Verify Your Email</h1>
          <p className="text-muted-foreground">
            We've sent a 6-digit code to your email.
            <br />
            Please enter it below.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center">
            <InputOTP maxLength={6} value={otp} onChange={setOtp}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>

          <Button type="submit" className="w-full" size="lg" disabled={otp.length < 6}>
            Verify Email
          </Button>

          <div className="text-center text-sm">
            Didn't receive the code?{' '}
            <button type="button" className="text-primary hover:underline font-medium">
              Resend
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
}
