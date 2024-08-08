import { Button } from '@/components/ui/button';

const App = () => {
  return (
    <main className="container mx-auto bg-red-400">
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl font-bold">Git Name Generator</h1>
        <p className="text-2xl">Generate a random name for your GitHub profile</p>
      </div>
      <Button>Click me</Button>

      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </main>
  );
};

export default App;
