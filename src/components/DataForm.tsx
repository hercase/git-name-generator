'use client';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { formSchema } from '@/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from './ui/button';

/* 
types
  Feat: New feature or functionality
  Fix: fixing a bug or error
  Refactor: Refactoring existing code
  Chore: Other changes that don't modify src or test files
*/

const DataForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: 'feat',
      abbreviation: '',
      ticket: '',
      description: '',
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log('🚀 ~ data:', data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>You can manage email addresses in your </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/*       <div className="flex flex-col space-y-4">
            <Label htmlFor="type">Task type</Label>
            <Select>
              <SelectTrigger id="type">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="feat">
                  <p className="flex items-center gap-2">
                    <span className="rounded-full bg-primary text-primary-foreground px-2 py-0.5 text-xs font-semibold ml-2">
                      Feat
                    </span>
                    <small className="text-muted-foreground">New feature</small>
                  </p>
                </SelectItem>
                <SelectItem value="fix">
                  <p className="flex items-center gap-2">
                    <span className="rounded-full bg-red-300 text-primary-foreground px-2 py-0.5 text-xs font-semibold ml-2">
                      Fix
                    </span>
                    <small className="text-muted-foreground">Fixing a bug</small>
                  </p>
                </SelectItem>
                <SelectItem value="refactor">
                  <p className="flex items-center gap-2">
                    <span className="rounded-full bg-yellow-300 text-primary-foreground px-2 py-0.5 text-xs font-semibold ml-2">
                      Refactor
                    </span>
                    <small className="text-muted-foreground">Modifying existing code</small>
                  </p>
                </SelectItem>
                <SelectItem value="chore">
                  <p className="flex items-center gap-2">
                    <span
                      className="rounded-full bg-blue-300
                  text-primary-foreground px-2 py-0.5 text-xs font-semibold ml-2"
                    >
                      Chore
                    </span>
                    <small className="text-muted-foreground">Other changes</small>
                  </p>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col space-y-4">
              <Label htmlFor="abbreviation">Project abreviation</Label>
              <Input id="abbreviation" placeholder="e.g. PRJ" />
            </div>

            <div className="flex flex-col space-y-4">
              <Label htmlFor="ticket">Ticket number</Label>
              <Input id="ticket" placeholder="e.g. 1234" />
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <Label htmlFor="description">Task description</Label>
            <Input id="description" placeholder="e.g. Fix bug" />
          </div>
 */}

        <Button type="submit" variant="outline">
          Generate
        </Button>
      </form>
    </Form>
  );
};

export default DataForm;
