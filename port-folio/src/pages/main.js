import React from 'react';
import { Home, About, Contact, Project } from './';

const Main = () => (
	<main className='container mx-auto'>
		<Home />
		<About />
		<Project />
		<Contact />
	</main>
);

export default Main;