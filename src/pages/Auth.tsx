import { useEffect, useState, type FormEvent } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Heart, Loader2, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { lovable } from '@/integrations/lovable';
import { useAuth } from '@/hooks/use-auth';
import '@lovable.dev/cloud-auth-js/styles.css';
import logo from '@/assets/wellspring-logo.png';
import therapy from '@/assets/hero-therapy.jpg';

export default function Auth({ recovery = false }: { recovery?: boolean }) {
  const { user, loading } = useAuth();
  const [mode, setMode] = useState<'signin' | 'signup' | 'forgot'>( 'signin');
  const [email, setEmail] = useState(''); const [password, setPassword] = useState(''); const [name, setName] = useState('');
  const [busy, setBusy] = useState(false); const [error, setError] = useState(''); const [message, setMessage] = useState('');
  const [recoveryReady, setRecoveryReady] = useState(window.location.hash.includes('type=recovery'));
  useEffect(() => { const { data: { subscription } } = supabase.auth.onAuthStateChange(event => { if (event === 'PASSWORD_RECOVERY') setRecoveryReady(true); }); return () => subscription.unsubscribe(); }, []);
  if (!recovery && !loading && user) return <Navigate to="/" replace />;
  async function submit(event: FormEvent) {
    event.preventDefault(); setBusy(true); setError(''); setMessage('');
    try {
      if (recovery) {
        if (!recoveryReady || !user) throw new Error('Open a valid password reset link from your email first.');
        const { error } = await supabase.auth.updateUser({ password }); if (error) throw error;
        setMessage('Your password has been updated. You can return to your workspace.');
      } else if (mode === 'signin') {
        const { error } = await supabase.auth.signInWithPassword({ email, password }); if (error) throw error;
      } else if (mode === 'signup') {
        const { error } = await supabase.auth.signUp({ email, password, options: { emailRedirectTo: window.location.origin, data: { display_name: name } } }); if (error) throw error;
        setMessage('Check your email to confirm your account. Your role will be assigned by the Managing Director.');
      } else {
        const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/reset-password` }); if (error) throw error;
        setMessage('If an account exists for this email, a password reset link has been sent.');
      }
    } catch (err) { setError(err instanceof Error ? err.message : 'Unable to continue. Please try again.'); }
    finally { setBusy(false); }
  }
  async function social(provider: 'google' | 'lovable') {
    setBusy(true); setError('');
    try { const result = await lovable.auth.signInWithOAuth(provider, { redirect_uri: window.location.origin }); if (result.error) setError(result.error.message); }
    catch { setError('Sign-in could not be started. Please try again.'); }
    finally { setBusy(false); }
  }
  const title = recovery ? 'Set a new password' : mode === 'signup' ? 'Join your care team' : mode === 'forgot' ? 'Reset your password' : 'Welcome back';
  return <div className="auth-layout">
    <div className="auth-main">
      <Link to="/" className="auth-brand"><img src={logo} alt="WellSpring Speech Therapy and Rehabilitation Centre" /></Link>
      <div className="auth-form">
        <div className="eyebrow"><span className="status-dot" /> WELLSPRING CARE PORTAL</div>
        <h1 className="text-3xl font-heading mt-5">{title}</h1>
        <p className="text-muted-foreground mt-3 mb-8">{recovery ? 'Choose a secure password for your account.' : mode === 'signup' ? 'A shared commitment to better care.' : mode === 'forgot' ? 'We’ll send a secure link to your email.' : 'Sign in to your Wellspring workspace.'}</p>
        <form onSubmit={submit} className="space-y-5">
          {mode === 'signup' && !recovery && <div className="space-y-2"><Label htmlFor="name">Full name</Label><Input id="name" autoComplete="name" required value={name} onChange={e => setName(e.target.value)} /></div>}
          {!recovery && <div className="space-y-2"><Label htmlFor="email">Email address</Label><Input id="email" type="email" autoComplete="email" placeholder="you@example.com" required value={email} onChange={e => setEmail(e.target.value)} /></div>}
          {(recovery || mode !== 'forgot') && <div className="space-y-2"><div className="flex items-center justify-between"><Label htmlFor="password">{recovery ? 'New password' : 'Password'}</Label>{mode === 'signin' && !recovery && <Button type="button" variant="link" className="h-auto p-0 text-xs" onClick={() => { setMode('forgot'); setError(''); setMessage(''); }}>Forgot password?</Button>}</div><Input id="password" type="password" minLength={8} required autoComplete={mode === 'signin' && !recovery ? 'current-password' : 'new-password'} placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} /></div>}
          {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
          {message && <div role="status" className="text-sm bg-primary-light text-foreground p-4 rounded-lg flex gap-2"><CheckCircle2 className="w-5 h-5 shrink-0" />{message}</div>}
          <Button disabled={busy || (recovery && !recoveryReady)} className="w-full h-12" type="submit">{busy ? <Loader2 className="w-4 h-4 animate-spin" /> : recovery ? 'Update password' : mode === 'signup' ? 'Create account' : mode === 'forgot' ? 'Send reset link' : 'Sign in'}<ArrowRight className="w-4 h-4 ml-2" /></Button>
        </form>
        {!recovery && mode !== 'forgot' && <><div className="flex items-center gap-4 my-6 text-xs text-muted-foreground"><div className="h-px bg-border flex-1" />or continue with<div className="h-px bg-border flex-1" /></div><div className="space-y-3"><Button variant="outline" className="w-full h-11" disabled={busy} onClick={() => social('google')}><span className="font-bold mr-2">G</span>Continue with Google</Button><button type="button" className="lovable-auth-button w-full" disabled={busy} onClick={() => social('lovable')}>Continue with Lovable</button></div></>}
        {!recovery && <p className="mt-6 text-sm text-muted-foreground text-center">{mode === 'signin' ? 'New to Wellspring? ' : ''}<Button variant="link" className="p-0 h-auto" onClick={() => { setMode(mode === 'signin' ? 'signup' : 'signin'); setError(''); setMessage(''); }}>{mode === 'signin' ? 'Create an account' : 'Back to sign in'}</Button></p>}
        {recovery && message && <Button asChild variant="link" className="mt-4"><Link to="/">Return to workspace</Link></Button>}
        <div className="flex justify-center items-center gap-2 text-xs text-muted-foreground mt-9"><ShieldCheck className="w-4 h-4" />Secure access. Confidential care.</div>
      </div>
      <div className="text-xs text-muted-foreground auth-foot">© {new Date().getFullYear()} Wellspring · Danyame, Kumasi, Ghana</div>
    </div>
    <aside className="auth-visual"><img src={therapy} alt="A therapist supporting a child during a therapy session" /><div className="auth-visual-shade" /><div className="auth-story"><div className="story-mark"><Heart className="w-7 h-7" /></div><p className="text-sm mb-4">CONNECTED TEAMS. COMPASSIONATE CARE.</p><h2 className="text-4xl leading-tight">Every small step.<br />A meaningful difference.</h2><p className="mt-5 max-w-md text-lg">Together, we help children and adults communicate, grow, and thrive.</p><div className="mt-12 border-t border-primary-foreground/30 pt-6 flex gap-3 items-center"><ShieldCheck className="w-6 h-6" /><span className="text-sm">Wellspring Speech Therapy<br />& Rehabilitation Centre</span></div></div></aside>
  </div>;
}