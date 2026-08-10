import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bljmwyvowmvgnofshfcb.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsam13eXZvd212Z25vZnNoZmNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYzNDMwMjcsImV4cCI6MjEwMTkxOTAyN30.1MP9Ri7dW7BQgMTV7c0aGqNusLZKu4pOniCUX_taeQ4'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)