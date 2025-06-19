
-- Create contributions table for anonymous user visions from Contribute page
CREATE TABLE public.contributions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  response TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create partner_submissions table for partner contact info and expertise from Partners page
CREATE TABLE public.partner_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  expertise TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security (RLS) for both tables
ALTER TABLE public.contributions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.partner_submissions ENABLE ROW LEVEL SECURITY;

-- Create permissive policies for public submission forms
-- Allow anyone to insert contributions (public form)
CREATE POLICY "Anyone can submit contributions" 
  ON public.contributions 
  FOR INSERT 
  WITH CHECK (true);

-- Allow anyone to insert partner submissions (public form)
CREATE POLICY "Anyone can submit partner applications" 
  ON public.partner_submissions 
  FOR INSERT 
  WITH CHECK (true);

-- Restrict reading to authenticated users only (for future admin dashboard)
CREATE POLICY "Only authenticated users can view contributions" 
  ON public.contributions 
  FOR SELECT 
  USING (auth.role() = 'authenticated');

CREATE POLICY "Only authenticated users can view partner submissions" 
  ON public.partner_submissions 
  FOR SELECT 
  USING (auth.role() = 'authenticated');
