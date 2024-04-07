
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://enxbphmnsrfqpvlmaisu.supabase.co'
const supabaseKey = import.meta.env.VITE_KEY

export const supabase = createClient(supabaseUrl, supabaseKey);

