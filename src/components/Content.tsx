import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Form from './Form';

const Content = () => {
  return (
    <section className="flex flex-col items-center gap-6">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Are you thinking of a branch name?</CardTitle>
          <CardDescription>
            Give us some information about your project and we'll generate a name for you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form />
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>Generate</Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default Content;
