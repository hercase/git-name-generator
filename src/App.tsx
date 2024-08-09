import Header from './components/Header';
import Content from './components/Content';

const App = () => {
  return (
    <main className="container mx-auto flex flex-col items-center pt-20 h-screen gap-6">
      <Header />
      <Content />
    </main>
  );
};

export default App;
