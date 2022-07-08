import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import project from '../assets/project.json'

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

const card = shuffle(project);

function App() {
    const [open, setOpen] = useState(false);
    const handeleOpen = () => setOpen(true)
    const handeleClose = () => setOpen(false)
    const cancelButtonRef = useRef(null)
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [language, setLanguage] = useState("")
    const [link, setLink] = useState("")
    const [desc, setDessc] = useState("")
    const [type, setType] = useState("")
    const [time, setTime] = useState("")

    const handelClick = (id) => {
        const found = card.find(element => element.id === parseInt(id))
        handeleOpen()
        setTitle(found.title)
        setContent(found.content)
        setLanguage(found.language)
        setDessc(found.describe)
        setType(found.type)
        setTime(found.time)
        setLink(found.link)
    }

    return (
        <div className='min-h-[83vh]'>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={handeleClose}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
                    </Transition.Child>
                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                evententerto="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="modal">
                                    <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                <Dialog.Title as="h3" className="text-xl leading-6 font-medium text-indigo-500 mb-2">
                                                    {title}
                                                </Dialog.Title>
                                                <dl>
                                                    <div className='border-2 border-gray-700 rounded-md p-1 overflow-y-auto h-[25rem] sm:h-fit'>
                                                        <div className="dark:bg-gray-900 bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                            <dt className="text-md font-medium dark:text-gray-400 text-black">Intitulé</dt>
                                                            <dd className="mt-1 text-sm dark:text-gray-400 text-black sm:mt-0 sm:col-span-2 font-semibold">{content}</dd>
                                                        </div>
                                                        <div className="dark:bg-gray-800 bg-white border-t border-gray-400 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                            <dt className="text-md font-medium dark:text-gray-400 text-black">Langage &amp; tehno</dt>
                                                            <dd className="mt-1 sm:mt-0 sm:col-span-2 uppercase tracking-wide text-sm text-indigo-500 font-semibold"><code>{language}</code></dd>
                                                        </div>
                                                        <div className="dark:bg-gray-900 bg-white border-t border-gray-400 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                            <dt className="text-md font-medium dark:text-gray-400 text-black">Temps de realisation</dt>
                                                            <dd className="mt-1 text-sm dark:text-gray-400 text-black sm:mt-0 sm:col-span-2 font-semibold">{time}</dd>
                                                        </div>
                                                        <div className="dark:bg-gray-800 bg-white border-t border-gray-400 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                            <dt className="text-md font-medium dark:text-gray-400 text-black">Type de projet</dt>
                                                            <dd className="mt-1 text-sm dark:text-gray-400 text-black sm:mt-0 sm:col-span-2 font-semibold">{type}</dd>
                                                        </div>
                                                        <div className="dark:bg-gray-900 bg-white border-t border-gray-400 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                            <dt className="text-md font-medium dark:text-gray-400 text-black">Description</dt>
                                                            <dd className="mt-1 text-sm dark:text-gray-400 text-black sm:mt-0 sm:col-span-2 font-semibold max-w-xs break-words">
                                                                {desc}
                                                            </dd>
                                                        </div>
                                                        <div className="dark:bg-gray-800 bg-white border-t border-gray-400 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                            <dt className="text-md font-medium dark:text-gray-400 text-black">Repository</dt>
                                                            <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 font-semibold max-w-xs break-words">
                                                                <button
                                                                    type="button"
                                                                    className="mt-3 w-full inline-flex justify-center rounded-md shadow-sm px-4 py-2 bg-indigo-500 hover:bg-indigo-800 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                                                >
                                                                    <a className="text-white flex" href={link} target="_blank" rel="noreferrer">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                                                            <path stroke="none" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                                                        </svg>
                                                                        <p className='ml-2'>Github</p>
                                                                    </a>
                                                                </button>
                                                            </dd>
                                                        </div>
                                                    </div>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dark:bg-gray-900 bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                        <button
                                            type="button"
                                            className="mt-3 w-full inline-flex justify-center rounded-md shadow-sm px-4 py-2 bg-indigo-500 hover:bg-indigo-800 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={handeleClose}
                                            ref={cancelButtonRef}
                                        >
                                            Fermer
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
            <div className='container mx-auto'>
                <div className="card_container">
                    {card.map((item, k) => (
                        <div key={k}>
                            <div className="card">
                                <div className="md:flex">
                                    <div className="p-5">
                                        <p className="card_title">{item.title}</p>
                                        <div className="border-t border-indigo-500 mb-1 mt-1"></div>
                                        <p className="card_content">{item.content}</p>
                                        <div className='flex pt-5 justify-center'>
                                            <button className="btn-blue">
                                                <a className="text-white flex" href={item.link} target="_blank" rel="noreferrer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                                        <path stroke="none" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                                    </svg>
                                                    <p className='ml-2'>Github</p>
                                                </a>
                                            </button>
                                            <button
                                                data-modal-toggle="example"
                                                data-modal-action="open"
                                                className="btn-blue flex"
                                                value={item.id}
                                                onClick={(e) => handelClick(e.currentTarget.value)}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5 text-white" viewBox="0 0 24 24">
                                                    <path d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 1.5c-4.69 0-8.497 3.807-8.497 8.497s3.807 8.498 8.497 8.498 8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497zm0 6.5c-.414 0-.75.336-.75.75v5.5c0 .414.336.75.75.75s.75-.336.75-.75v-5.5c0-.414-.336-.75-.75-.75zm-.002-3c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" fillRule="nonzero" />
                                                </svg>
                                                <p className='ml-2 text-white'>Détails</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        </div>
    )

}

export default App