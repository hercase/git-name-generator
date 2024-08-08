import Header from './components/Header';
import Options from './components/Options';
import TypeSelector from './components/TypeSelector';

const App = () => {
  return (
    <main className="container mx-auto flex flex-col items-center pt-20 h-screen gap-6">
      <Header />
      <Options />
      <TypeSelector />
    </main>
  );
};

export default App;
