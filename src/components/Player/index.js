import { forwardRef, useMemo } from 'react';
import Config from 'config';
import './styles.scss';

const Player = forwardRef(function Player({ game, className, style, ...props }, ref) {
  const { screenSrc, backgroundImage } = useMemo(() => {
    const screenSrc = game && Config.gameSrc(game);
    const backgroundImage = `url("${game?.bgUrl || 'background.webp'}")`;
    return { screenSrc, backgroundImage };
  }, [game])

  return (
    <section className={`player${className ? ` ${className}` : ''}`} style={{ backgroundImage, ...style }} { ...props }>
      <div className="screen">
        <iframe title="screen" src={screenSrc} />
        <img className="bezel" alt="bezel" src="bezel.png" />
      </div>
    </section>
  );
});

export default Player;
