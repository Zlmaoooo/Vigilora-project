import { createClient } from '@supabase/supabase-js';
import { Database } from './database.types';

// Create a singleton Supabase client
let supabaseInstance: ReturnType<typeof createClient<Database>> | null = null;

export const createSupabaseClient = () => {
  if (supabaseInstance) return supabaseInstance;

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Supabase URL or Anon Key is missing');
    throw new Error('Supabase configuration is incomplete');
  }

  supabaseInstance = createClient<Database>(supabaseUrl, supabaseAnonKey);
  return supabaseInstance;
};