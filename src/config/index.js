import pack from '../../package.json';
import games from './games.json';

function gameSrc(game) {
  if (game.embedUrl) return game.embedUrl;

  let src = `/screen.html?core=${game.core}&gameUrl=${game.gameUrl}`;
  if (game.biosUrl)
    src += `&biosUrl=${game.biosUrl}`;

  return src;
}

const Config = { games, gameSrc, version: pack?.version };

export default Config;
