import '../styles/App.css';
import SearchBox from './Organisms/SearchBox'
import PokemonGrid from './Organisms/PokemonGrid'

function App() {
  return (
    <main className="App">
      <SearchBox></SearchBox>
      <PokemonGrid></PokemonGrid>
    </main>
  );
}

export default App;
