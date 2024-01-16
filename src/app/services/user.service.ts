import { environment } from '@/environments/environment.development';
import { Injectable, signal } from '@angular/core';
import { AuthChangeEvent, AuthSession, Session, SupabaseClient, createClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  isAuthenticated = signal(false);
  displayAuthModal = signal(false);

  private supabase: SupabaseClient
  _session: AuthSession | null = null
  constructor(){
    this.supabase = createClient(environment.supabaseConfig.supabaseUrl, environment.supabaseConfig.supabaseKey)
  }

  
  get session() {
    this.supabase.auth.getSession().then(({ data }) => {
      this._session = data.session
    })
    return this._session
  }

  authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void) {
    return this.supabase.auth.onAuthStateChange(callback)
  }

  signInWithGoogle() {
   return this.supabase.auth.signInWithOAuth({
      provider: 'google',
    })

  }

  signOut() {
    return this.supabase.auth.signOut()
  }
}
