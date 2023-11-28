import {createClient} from "@supabase/supabase-js";

export const supabase = createClient(
  'https://upgyzhqdoaqwmlbagflg.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwZ3l6aHFkb2Fxd21sYmFnZmxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEyMDIwNDQsImV4cCI6MjAxNjc3ODA0NH0.EvdpkPMqSU5GlwFrqSzMC_SVUkEHP74Q5pH0Z6FTdws'
)