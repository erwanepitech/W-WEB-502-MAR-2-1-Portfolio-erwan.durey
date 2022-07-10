// import {
//     useEffect,
//     useState
// } from 'react'

// import {
//     Disclosure,
// } from '@headlessui/react'

// import {
//     MenuIcon,
//     XIcon
// } from '@heroicons/react/outline'

// import {
//     Link,
//     useLocation
// } from 'react-router-dom';

// import Switcher from "./Switcher";


// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }

// function App() {

//     const [current, setCurrent] = useState(null);

//     // const location = useLocation();

//     // useEffect(() => {
//     //     const itemFind = navigation.find((item) => { return location.pathname === item.href })

//     //     if (itemFind) {
//     //         setCurrent(itemFind);
//     //     } else {
//     //         setCurrent(null);
//     //     }
//     // }, [location])

//     const navigation = [

//         { id: 0, name: 'Accueil', href: '/', current: false },
//         { id: 1, name: 'Projet', href: '/project', current: false },
//         { id: 2, name: 'À propos', href: '/about', current: false },
//         { id: 3, name: 'Contact', href: '/contact', current: false },
//     ]

//     return (
//         <Disclosure as="nav" className="nav_bar">
//             {({ open }) => (
//                 <>
//                     <div className="md:flex">
//                         <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
//                             <div className="relative flex items-center justify-between h-16">
//                                 <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//                                     {/* Mobile menu button*/}
//                                     <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                                         <span className="sr-only">Open main menu</span>
//                                         {open ? (
//                                             <XIcon className="block h-6 w-6" aria-hidden="true" />
//                                         ) : (
//                                             <MenuIcon className="block h-6 ent?.id w-6" aria-hidden="true" />
//                                         )}
//                                     </Disclosure.Button>
//                                 </div>
//                                 <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
//                                     <div className="flex-shrink-0 flex items-center">
//                                         <img
//                                             className="block lg:hidden h-8 w-auto"
//                                             src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
//                                             alt="Workflow"
//                                         />
//                                         <img
//                                             className="hidden lg:block h-8 w-auto"
//                                             src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
//                                             alt="Workflow"
//                                         />
//                                     </div>
//                                     <div className="hidden sm:block sm:ml-6">
//                                         <div className="flex space-x-4">
//                                             {navigation.map((item) => (
//                                                 <a
//                                                     key={item.name}
//                                                     href={item.href}
//                                                     className={classNames(
//                                                         activeNavLinkId === navLinkId ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                                                         'px-3 py-2 rounded-md text-sm font-medium'
//                                                     )}
//                                                     aria-current={current?.id === item.id ? 'page' : undefined}
//                                                 >
//                                                     {item.name}
//                                                 </a>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <Switcher />
//                             </div>
//                         </div>
//                     </div>

//                     <Disclosure.Panel className="sm:hidden">
//                         <div className="px-2 pt-2 pb-3 space-y-1">
//                             {navigation.map((item) => (
//                                 <Disclosure.Button
//                                     key={item.name}
//                                     className={classNames(
//                                         activeNavLinkId === navLinkId ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                                         'block px-3 py-2 rounded-md text-base font-medium'
//                                     )}
//                                     aria-current={current?.id === item.id ? 'page' : undefined}
//                                 >
//                                     <a
//                                         key={item.name}
//                                         href={item.href}
//                                         aria-current={current?.id === item.id ? 'page' : undefined}
//                                     >
//                                         {item.name}
//                                     </a>
//                                 </Disclosure.Button>
//                             ))}
//                         </div>

//                     </Disclosure.Panel>
//                 </>
//             )}
//         </Disclosure>
//     )
// }

// export default App