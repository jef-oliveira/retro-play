import { Disclaimer, GameList, Player } from 'components';

import './App.css';
import { useState } from 'react';

function App() {
  const [selectedGame, setSelectedGame] = useState();

  return (
    <main className="app">
      <Player game={selectedGame} />
      <GameList selectedGame={selectedGame} onSelect={setSelectedGame} />
      <Disclaimer />
    </main>
  );
}

export default App;
