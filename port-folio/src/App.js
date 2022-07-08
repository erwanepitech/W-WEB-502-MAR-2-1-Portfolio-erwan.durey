import './style.css';
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home';
import About from './pages/about';
import Project from './pages/project';
import Contact from './pages/contact';
import Particles from "./components/particles";
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from 'react-router-dom';

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Particles />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/about" element={<About />} />
					<Route exact path="/project" element={<Project />} />
					<Route exact path="/contact" element={<Contact />} />
				</Routes>
				<Footer />
			</Router >
		</>

	)
}

export default App;
