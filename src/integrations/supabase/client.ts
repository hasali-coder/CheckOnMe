// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ogjzqnquxqvdmbbuskaq.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9nanpxbnF1eHF2ZG1iYnVza2FxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzOTkyNzgsImV4cCI6MjA2NDk3NTI3OH0.6BXua8r4qzR_KfVgC6y1VsRNw0oaXrs1aeA-ce2o9Fg";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);