import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wzdlwibuurkkghalmkrv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6ZGx3aWJ1dXJra2doYWxta3J2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE0NjMyOTMsImV4cCI6MTk5NzAzOTI5M30.vRxXaz7QZrKpyZViure3xLbpE-49G2STGCLNu_RFqLY";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
