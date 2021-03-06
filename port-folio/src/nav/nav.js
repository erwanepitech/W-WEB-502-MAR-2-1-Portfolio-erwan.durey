import React from 'react';
import NavLink from './NavLink';
import { navLinks } from './navLinks';
import Switcher from "../components/Switcher";

import {
	Disclosure,
} from '@headlessui/react'

import {
	MenuIcon,
	XIcon
} from '@heroicons/react/outline'

const Nav = () => {
	return (
		<>
			<Disclosure as="nav" className="nav_bar">
				{({ open }) => (
					<>
						<div className="md:flex">
							<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
								<div className="relative flex items-center justify-between h-16">
									<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
										{/* Mobile menu button*/}
										<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
											<span className="sr-only">Open main menu</span>
											{open ? (
												<XIcon className="block h-6 w-6" aria-hidden="true" />
											) : (
												<MenuIcon className="block h-6 ent?.id w-6" aria-hidden="true" />
											)}
										</Disclosure.Button>
									</div>
									<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
										<div className="flex-shrink-0 flex items-center">
											<img
												className="block lg:hidden h-8 w-auto ml-9"
												src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
												alt="Workflow"
											/>
											<img
												className="hidden lg:block h-8 w-auto"
												src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
												alt="Workflow"
											/>
										</div>
										<div className="hidden sm:block sm:ml-6">
											<div className="flex space-x-4 py-5">
												{navLinks.map(({ navLinkId, scrollToId, name }, idx) => (
													<NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} name={name}/>
												))}
											</div>
										</div>
									</div>
									<Switcher />
								</div>
							</div>
						</div>

						<Disclosure.Panel className="sm:hidden">
							<div className="px-2 pt-2 pb-3 space-y-1">
								{navLinks.map(({ navLinkId, scrollToId, name }, idx) => (
									<NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} name={name} />
								))}
							</div>

						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</>
	);
};

export default Nav;