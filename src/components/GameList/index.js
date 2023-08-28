import Config from 'config';

import './styles.scss';
import { memo } from 'react';

function GameList({ selectedGame, onSelect, className, ...props }, ref) {
  return (
    <header className={`game-list${className ? ` ${className}` : ''}`} { ...props }>
      <ul>
        {Config.games.map((game, index) => (
          <GameEntry key={game.logoUrl} game={game} onSelect={onSelect} selected={selectedGame == game} />
        ))}
      </ul>
    </header>
  );
};

const GameEntry = memo(({ game, selected, onSelect }) => {
  return (
    <li className={selected ? 'selected' : ''} onClick={() => onSelect?.(game)}>
      <img alt={game?.logoUrl.split('/').pop()} src={game.logoUrl} />
    </li>
  )
})

export default GameList;
