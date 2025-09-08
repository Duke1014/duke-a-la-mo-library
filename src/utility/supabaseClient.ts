import { createClient } from "@supabase/supabase-js"
import * as dotenv from 'dotenv'
dotenv.config()

const supabaseUrl: string = "https://hosginjcfjgijgxukmbu.supabase.co"
const supabaseKey: string = import.meta.env.VITE_SUPABASE_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)