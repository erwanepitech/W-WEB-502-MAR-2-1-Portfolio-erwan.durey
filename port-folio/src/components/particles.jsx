import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import config_particles from "../assets/particles-config"

function App() {

    const ParticlesInit = async (main) => {
        await loadFull(main)
    }

    return (
        <Particles
            id="tsparticles"
            init={ParticlesInit}
            options={
                config_particles
            }
        />
    );

}

export default App