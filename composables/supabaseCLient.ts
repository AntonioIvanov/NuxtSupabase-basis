import { Database } from '~/types/supabase'
export const supabaseClient = () => {
  return useSupabaseClient<Database>()
}