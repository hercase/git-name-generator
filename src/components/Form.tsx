import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

/* 

  Feat: New feature or functionality
  Fix: fixing a bug or error
  Refactor: Refactoring existing code
  Chore: Other changes that don't modify src or test files
*/

const Form = () => {
  return (
    <form>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-4">
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
      </div>
    </form>
  );
};

export default Form;
