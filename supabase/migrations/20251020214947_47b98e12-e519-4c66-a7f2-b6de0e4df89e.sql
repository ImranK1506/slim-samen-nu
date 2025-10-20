-- Create a table for join form submissions
CREATE TABLE public.join_submissions (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  motivation text,
  newsletter boolean NOT NULL DEFAULT true,
  volunteer boolean NOT NULL DEFAULT false
);

-- Enable Row Level Security
ALTER TABLE public.join_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous users to insert
CREATE POLICY "Allow anonymous insert" 
ON public.join_submissions 
FOR INSERT 
TO anon
WITH CHECK (true);

-- Create index on email for faster lookups
CREATE INDEX idx_join_submissions_email ON public.join_submissions(email);

-- Create index on created_at for sorting
CREATE INDEX idx_join_submissions_created_at ON public.join_submissions(created_at DESC);