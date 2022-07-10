import React, { useContext } from 'react';
import { NavContext } from '../context/NavContext';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const NavLink = ({ navLinkId, scrollToId, name }) => {
	const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext);

	const handleClick = () => {
		setActiveNavLinkId(navLinkId);
		document.getElementById(scrollToId).scrollIntoView({ behavior: 'smooth' });
	};

	return (
        <div>
		<span
			id={navLinkId}
			onClick={handleClick}
            className={classNames(
                activeNavLinkId === navLinkId ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'px-3 py-2 rounded-md xs:text-sm md:text-base font-medium'
            )}
		>
			{name}
		</span>
        </div>
	);
};

export default NavLink;