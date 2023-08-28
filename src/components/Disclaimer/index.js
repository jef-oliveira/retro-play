import Config from 'config';
import './styles.scss';

function Disclaimer({ className, ...props }, ref) {
  return (
    <footer className={`disclaimer${className ? ` ${className}` : ''}`} { ...props }>
      <img src="logo192.png" alt="logo" />
      <p>
        <span><strong>RetroPlay! v{Config.version}</strong>. This is an open source project and works with <a href="https://www.emulatorjs.com">EmulatorJS</a> under the hood.</span>
        <span>All images, trademarks, logos and brand names are the property of their respective owners.</span>
      </p>
    </footer>
  );
};

export default Disclaimer;
