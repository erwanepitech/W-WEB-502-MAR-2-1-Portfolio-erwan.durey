import { useNav } from '../hook/useNav';
function Home() {
	const homeRef = useNav('Home');
	return (
		<div className='section'>
			<section ref={homeRef} id='homeContainer'>
				<div className="md:max-w-2xl my-auto min-w-0 break-words">
					<div className="mx-auto">
						<div className="text-center">
							<div className="flex flex-wrap justify-center">
								<div className="w-full px-4 pb-16">
									<h4 className="leading-relaxed dark:text-white text-black mb-4 text-3xl">
										Bonjour,<br />
										Je suis <a className='text-indigo-500 font-bold'>Erwan Durey,</a><br />
										Étudiant pour devenir Développeur Web &amp; Mobile,<br />
									</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);

}

export default Home