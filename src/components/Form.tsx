import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

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
              <SelectItem value="feat">Feat</SelectItem>
              <SelectItem value="fix">Fix</SelectItem>
              <SelectItem value="refactor">Refactor</SelectItem>
              <SelectItem value="chore">Chore</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col space-y-4">
          <Label htmlFor="abbreviation">Project abreviation</Label>
          <Input id="abbreviation" placeholder="e.g. PRJ" />
        </div>

        <div className="flex flex-col space-y-4">
          <Label htmlFor="ticket">Ticket number</Label>
          <Input id="ticket" placeholder="e.g. 1234" />
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
