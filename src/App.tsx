import Header from './components/header';
import Home from './pages/Home';
import { TitleContextProvider } from './contexts/TitleContext';
import { SearchContextProvider } from './contexts/SearchContext';

function App() {
  return (
    <TitleContextProvider>
      <SearchContextProvider>
        <div className='flex flex-col w-screen'>
          <Header />
          <Home />
        </div>
      </SearchContextProvider>
    </TitleContextProvider>
  );
}

export default App;
