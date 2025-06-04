import './App.css'
import './index.css'
import BasicTimeline from './components/timeline';

function App() {
  return (
    <div className="app-main">
      <div className="top-nav-bar"></div>
      <div className="title">
        <h1>The Evolution of the Universe</h1>
        <h2> From the birth of space and time to the mysterious force of dark energy shaping our universe, this interactive timeline takes you on a journey through the most significant events in the universe’s history. Explore how light first traveled freely, how galaxies formed, and how scientists uncovered clues that continue to expand our understanding of the cosmos.        
        </h2>
      </div>
      <div className="timeline-container">
        <BasicTimeline />
      </div>
      <div className="sources">
        <h2>Sources</h2>
        <ul>
          <li><a href="https://science.nasa.gov/universe/overview/" target="_blank" rel="noopener noreferrer">NASA - Cosmic History</a></li>
          <li><a href="https://www.ctc.cam.ac.uk/outreach/origins/inflation_zero.php" target="_blank" rel="noopener noreferrer">Cosmic Inflation</a></li>
          <li><a href="https://www.space.com/33892-cosmic-microwave-background.html" target="_blank" rel="noopener noreferrer">Space - Cosmic Microwave Background</a></li>
          <li><a href="https://background.uchicago.edu/~whu/metaanim.html" target="_blank" rel="noopener noreferrer">UChicago - CMB</a></li>
          <li><a href="https://science.nasa.gov/dark-energy/" target="_blank" rel="noopener noreferrer">NASA - Dark Energy</a></li>
          <li><a href="https://www.smithsonianmag.com/science-nature/what-does-future-universe-hold-180947977/" target="_blank" rel="noopener noreferrer">Smithsonian - The Future of the Universe</a></li>
          <li><a href="https://www.space.com/universe-the-big-rip-can-we-stop-it" target="_blank" rel="noopener noreferrer">Space - The Big Rip</a></li>
        </ul>
      </div>
      <div className="footer">
        <p>© Rhea Shetti 2025</p>
      </div>
    </div>
  );
}

export default App