'use client';

import { z } from 'zod';

export const formSchema = z.object({
  type: z.enum(['feat', 'fix', 'refactor', 'chore']),
  abbreviation: z.string().min(1),
  ticket: z.string().min(1),
  description: z.string().min(1),
});

export type FormSchema = z.infer<typeof formSchema>;
