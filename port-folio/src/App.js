import './style.css';
import Footer from './components/footer'
import Particles from "./components/particles";
import NavProvider from './context/NavContext';
import { Main } from './pages';
import { Nav } from './nav';

function App() {
	return (
		<>
			<NavProvider>
				<Nav />
				<Particles />
				<Main />
				<Footer />
			</NavProvider>
		</>
	)
}

export default App;
