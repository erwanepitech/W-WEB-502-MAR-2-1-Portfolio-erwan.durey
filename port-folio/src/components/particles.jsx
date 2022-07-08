import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particle_config from '../assets/particles-config'
function App() {

    const ParticlesInit = async (main) => {
        await loadFull(main)
    }

    return (
        <Particles
            id="tsparticles"
            init={ParticlesInit}
            options={
                particle_config
            }
        />
    );

}

export default App