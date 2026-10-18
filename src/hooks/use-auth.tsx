import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { User } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import type { CentreRole } from '@/lib/centre';

type AuthState = { user: User | null; role: CentreRole | null; name: string; loading: boolean; error: string; refresh: () => Promise<void> };
const AuthContext = createContext<AuthState>({ user: null, role: null, name: '', loading: true, error: '', refresh: async () => {} });
export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<Omit<AuthState, 'refresh'>>({ user: null, role: null, name: '', loading: true, error: '' });
  async function refresh() {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (!user) { setState({ user: null, role: null, name: '', loading: false, error: error && error.name !== 'AuthSessionMissingError' ? error.message : '' }); return; }
    const [profile, roles] = await Promise.all([
      supabase.from('profiles').select('display_name').eq('id', user.id).maybeSingle(),
      supabase.from('user_roles').select('role').eq('user_id', user.id).maybeSingle(),
    ]);
    setState({ user, role: roles.data?.role ?? null, name: profile.data?.display_name || user.email?.split('@')[0] || 'Team member', loading: false, error: profile.error?.message || roles.error?.message || '' });
  }
  useEffect(() => {
    let alive = true;
    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => { if (alive) window.setTimeout(() => { if (alive) void refresh(); }, 0); });
    void refresh();
    return () => { alive = false; subscription.unsubscribe(); };
  }, []);
  return <AuthContext.Provider value={{ ...state, refresh }}>{children}</AuthContext.Provider>;
}
export const useAuth = () => useContext(AuthContext);