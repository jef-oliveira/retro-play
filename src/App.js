import { GameList, Player } from 'components';

import './App.css';
import { useState } from 'react';

function App() {
  const [selectedGame, setSelectedGame] = useState();

  return (
    <main className="app">
      <Player game={selectedGame} />
      <GameList selectedGame={selectedGame} onSelect={setSelectedGame} />
    </main>
  );
}

export default App;
