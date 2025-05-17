import { useEffect, useState } from 'react';
import QuoteViewer from './QuoteViewer';
import './index.css';

function App() {
  const [theme, setTheme] = useState('default');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Quote Viewer</h1>

        <div className="theme-selector">
           <label htmlFor="theme" className="theme-label">🎨 Theme:</label>
  <select
    id="theme"
    className="theme-dropdown"
    value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="retrowave">Retrowave</option>
<option value="popArt">Pop Art</option>
<option value="bubblegum">Bubblegum</option>
<option value="electric">Electric</option>
<option value="rainbowPop">Rainbow Pop</option>
<option value="cyberGlow">Cyber Glow</option>

           
    <option value="dark">Dark</option>
  <option value="gradient">Gradient</option>
  <option value="funky">Funky</option>
  <option value="sky">Sky</option>
  <option value="forest">Forest</option>
  <option value="neon">Neon</option>
  <option value="pastel">Pastel</option>
  <option value="ocean">Ocean</option>
  <option value="sunset">Sunset</option>
  <option value="mint">Mint</option>
  <option value="vintage">Vintage</option>
  <option value="cyberpunk">Cyberpunk</option>
  <option value="midnight">Midnight</option>
  <option value="summer">Summer</option>
  <option value="coffee">Coffee</option>
  <option value="lavender">Lavender</option>
  <option value="candy">Candy</option>
  <option value="metallic">Metallic</option>
  <option value="sand">Sand</option>
  <option value="rainbow">Rainbow</option>
  <option value="autumn">Autumn</option>
  <option value="deepsea">Deep Sea</option>
  <option value="mystic">Mystic</option>
  <option value="glass">Glass</option>
<option value="nightSky">Night Sky</option>
<option value="blush">Blush</option>
<option value="mocha">Mocha</option>
<option value="cyberwave">Cyberwave</option>
<option value="softPurple">Soft Purple</option>
<option value="stone">Stone</option>
<option value="peach">Peach</option>
<option value="luxury">Luxury</option>
<option value="frost">Frost</option>

          </select>
        </div>

        <QuoteViewer />
      </header>
    </div>
  );
}

export default App;