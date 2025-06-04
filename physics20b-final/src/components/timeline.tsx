import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import bigBangImage from '../assets/bigbang.jpg';
import galaxyImage from '../assets/galaxycluster.jpeg';
import cmbGIF from '../assets/cmb.gif';
import darkEnergy from '../assets/darkenergy.jpg';

export default function BasicTimeline() {
    return (
        <Timeline position="alternate">
            <TimelineItem>
                <TimelineOppositeContent sx={{ flex: 0.2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={bigBangImage} style={{ width: 530, height: 400, borderRadius: 8 }} />
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot sx={{ backgroundColor: 'white' }} />
                    <TimelineConnector sx={{ backgroundColor: 'white' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ color: 'white', fontFamily: "'Courier New', Courier, monospace", fontWeight: 'bold', fontSize: "1.2em"}}>The Big Bang & Inflation
                    <div style={{ fontWeight: 'normal', fontSize: '0.9em', marginTop: '0.3em' }}>
                        0 to 10⁻³⁵ seconds
                    </div>
                    <div style={{ marginTop: '1em', fontWeight: 'normal', fontSize: '0.95em' }}>
                        The Big Bang is the theory that the universe began as an extremely hot and dense point roughly 13.8 billion years ago. From this, the universe expanded in an event known as cosmic inflation, a brief moment when space itself expanded faster than the speed of light. This expansion smoothed out any irregularities and allowed for the formation of particles, atoms, stars, and galaxies. Cosmic inflation explains why the universe appears homogeneous and isotropic on large scales, and it is supported by observations such as cosmic microwave background radiation.
                    </div>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent sx={{ flex: 0.2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={cmbGIF} style={{ width: 530, height: 300, borderRadius: 8 }} />
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot sx={{ backgroundColor: 'white' }} />
                    <TimelineConnector sx={{ backgroundColor: 'white' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ color: 'white', fontFamily: "'Courier New', Courier, monospace", fontWeight: 'bold', fontSize: "1.2em"}}>Cosmic Microwave Background
                <div style={{ fontWeight: 'normal', fontSize: '0.9em', marginTop: '0.3em' }}>
                        380,000 years after the Big Bang
                    </div>
                    <div style={{ marginTop: '1em', fontWeight: 'normal', fontSize: '0.95em' }}>
                        The Cosmic Microwave Background (CMB) is the faint afterglow of the Big Bang, released about 380,000 years after the initial explosion when the universe cooled enough for electrons and protons to combine into neutral atoms. This allowed photons, particles of light, to travel freely through space for the first time. The CMB reveals tiny fluctuations that eventually grew into the galaxies and clusters we see today. Satellites like COBE, WMAP, and Planck have measured these temperature changes with great precision, providing strong evidence for the Big Bang and insights into the universe’s composition.
                    </div>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent sx={{ flex: 0.2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={galaxyImage} style={{ width: 530, height: 400, borderRadius: 8 }} />
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot sx={{ backgroundColor: 'white' }} />
                    <TimelineConnector sx={{ backgroundColor: 'white' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ color: 'white', fontFamily: "'Courier New', Courier, monospace", fontWeight: 'bold', fontSize: "1.2em"}}>Formation of Galaxies
                <div style={{ fontWeight: 'normal', fontSize: '0.9em', marginTop: '0.3em' }}>
                        100,000 to 1 billion years after the Big Bang
                    </div>
                    <div style={{ marginTop: '1em', fontWeight: 'normal', fontSize: '0.95em' }}>
                        After the release of the CMB, gravity began to shape the universe’s structure. Small density variations in the primordial matter caused gas and dark matter to clump together, forming the beginnings of galaxies and clusters. Dark matter, an invisible form of matter that interacts mainly through gravity, plays a critical role in this process by providing the structure around which ordinary matter accumulates. Over hundreds of millions of years, these clumps grew larger and more complex, eventually evolving into the diverse galaxies, stars, and planetary systems we observe today.
                    </div>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent sx={{ flex: 0.2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={darkEnergy} style={{ width: 530, height: 400, borderRadius: 8 }} />
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot sx={{ backgroundColor: 'white' }} />
                    <TimelineConnector sx={{ backgroundColor: 'white' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ color: 'white', fontFamily: "'Courier New', Courier, monospace", fontWeight: 'bold', fontSize: "1.2em"}}>Dark Energy & the Accelerating Universe
                <div style={{ fontWeight: 'normal', fontSize: '0.9em', marginTop: '0.3em' }}>
                        9 billion years after the Big Bang
                </div>
                <div style={{ marginTop: '1em', fontWeight: 'normal', fontSize: '0.95em' }}>
                    Roughly 9 billion years after the Big Bang, astronomers made the discovery that the universe’s expansion is not slowing down as expected, but accelerating. This acceleration is due to a mysterious force called dark energy, which makes up about 70% of the universe’s total energy. Observations of distant supernovae revealed this unexpected behavior, and ongoing missions like SPHEREx and the James Webb Space Telescope aim to better understand the nature of dark energy. Learning more about this mystery could transform our understanding of physics and the future of the universe.
                </div>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot sx={{ backgroundColor: 'white' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ color: 'white', fontFamily: "'Courier New', Courier, monospace", fontWeight: 'bold', fontSize: "1.2em" }}>Now & the Future</TimelineContent>
            </TimelineItem>
            <h2>The future of the universe remains unclear, with several competing scenarios proposed by cosmologists. One possibility is the "Heat Death" or Big Freeze, where the universe continues expanding forever, stars burn out, and all matter slowly decays into a cold, dark void. Alternatively, the Big Rip theory predicts that accelerating expansion might eventually tear galaxies, stars, planets, and even atoms apart. Other outcomes involve new physics or a cyclical universe. While these scenarios are still theoretical, they inspire us to think about the long-term fate of everything we know.
            </h2>
        </Timeline>
    );
}