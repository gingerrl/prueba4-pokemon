import logo from './logo.svg';
import './App.css';
import ScreenPage from './screen/ScreenPage/ScreenPage';
import { PokemonProvider } from './context/PokemonProvider';

function App() {
  return (
    <div className="App">
      <PokemonProvider>
      <ScreenPage/>
      </PokemonProvider>
    </div>
  );
}

export default App;
