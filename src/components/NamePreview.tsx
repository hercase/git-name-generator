import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ClipboardIcon } from 'lucide-react';

const NamePreview = () => {
  return (
    <div className="flex w-full items-center space-x-2">
      <Input
        className="text-xl font-semibold tracking-tight py-6 px-4"
        type="text"
        value="git-name-generator"
        readOnly
      />
      <Button className="h-full" type="submit">
        <ClipboardIcon className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default NamePreview;
