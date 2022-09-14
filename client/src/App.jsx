import { Navbar, Home, About, Discord,  Skills, Footer, Transactions } from './components';


const App = () => {
  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <Navbar />
        <Home />
      </div>
      <About />
      <Discord />
      <Skills />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App
