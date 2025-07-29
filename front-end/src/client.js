import { createClient } from '@supabase/supabase-js'

const URL = 'https://kgodqwfyaerfoehwwzcw.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtnb2Rxd2Z5YWVyZm9laHd3emN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4MDY4OTIsImV4cCI6MjA2OTM4Mjg5Mn0.eIaoQm8d4evkCuogeKiU_7yyRKSbAukE-EA9a7jVjdU'

//const supabase = createClient(URL, API_KEY)
export const supabaseClient = createClient(URL, API_KEY)