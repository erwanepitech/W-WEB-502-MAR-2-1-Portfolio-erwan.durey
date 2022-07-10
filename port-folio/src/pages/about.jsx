import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Pdf from '../components/pdf'
import image from '../assets/ErwanDUREY.png'
import pdf_file from '../assets/cv.pdf'
import language from '../assets/langage.json'
import { useNav } from '../hook/useNav';
function About() {

    const aboutRef = useNav('About');
    const [open, setOpen] = useState(false);
    const handeleOpen = () => setOpen(true)
    const handeleClose = () => setOpen(false)
    const cancelButtonRef = useRef(null)

    const handelClick = () => {
        handeleOpen()
    }

    const download = () => {
        var link = document.createElement('a');
        link.href = pdf_file;
        link.download = 'cv.pdf';
        link.dispatchEvent(new MouseEvent('click'));
    }

    return (
        <div className='section'>
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
                                    <div className="dark:bg-gray-800 bg-white px-2 pt-5 pb-4 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">

                                            <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                                <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-indigo-500">

                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <Pdf />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dark:bg-gray-900 bg-gray-200 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                        <button
                                            type="button"
                                            className="mt-3 w-full rounded-md shadow-sm px-4 py-2 bg-indigo-500 hover:bg-indigo-800 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={handeleClose}
                                            ref={cancelButtonRef}
                                        >
                                            Fermer
                                        </button>
                                        <button
                                            onClick={download}
                                            type="button"
                                            className="mt-2 w-full rounded-md shadow-sm px-4 py-2 bg-indigo-500 hover:bg-indigo-800 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm flex justify-center"
                                        >
                                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                            </svg>
                                            <span className="ml-2">Télécharger</span>
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
            <section ref={aboutRef} id='aboutContainer'>
                <div className="relative max-w-md mx-auto md:max-w-2xl mt-20 min-w-0 break-words w-full mb-6 ">
                    <div className="about_card">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full flex justify-center mb-16">
                                <div className="relative">
                                    <img src={image} className="rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]" />
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-2">
                            <h3 className="text-2xl text-indigo-500 font-bold leading-normal mb-1">Erwan Durey</h3>
                            <div className="text-xs mt-0 mb-2 dark:text-slate-400 text-black font-bold uppercase">
                                <i className="fas fa-map-marker-alt mr-2 dark:text-slate-400 text-black opacity-75"></i>La seyne sur mer, France
                            </div>
                        </div>
                        <div className="mt-6 py-6 border-t border-indigo-500 text-center">
                            <div className="flex flex-wrap justify-center ">
                                <div className="w-full px-4">
                                    <p className="font-light leading-relaxed dark:text-white text-black mb-4 text-xl">
                                        Décidé à faire de ma
                                        passion un métier, j'ai
                                        commencé ma formation
                                        chez Epitech.
                                        Étudiant motivé, plein de
                                        ressources capable de
                                        s'adapter aux contraintes
                                        et directives données.
                                    </p>
                                    <button
                                        onClick={handelClick}
                                        type="button"
                                        className="mx-auto px-4 py-3 bg-indigo-500 hover:bg-indigo-800 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform flex"
                                    >
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                        <span className="ml-2">Visualiser cv</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <h1 className="text-2xl text-indigo-500 font-bold leading-normal mb-5">MES COMPÉTENCES</h1>
                </div>

                <div className="skils_card mb-10">
                    <div className="flex items-center justify-center">
                        <h1 className="text-2xl text-indigo-500 font-bold leading-normal mb-1">FRON-END</h1>
                    </div>
                    <div className="grid sm:grid-cols-3 xs:grid-cols-2 md:lg:xl:grid-cols-5 group">
                        {
                            language['front-end'].map((language, k) => (
                                <div key={k} className="p-5 flex flex-col items-center text-center group">
                                    <img className="rounded-lg border-gray-100 w-24 h-24" src={language.imageSrc} alt={language.imageAlt} />
                                    <h1 className="text-gray-50 font-semibold text-sm">{language.name}</h1>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="skils_card">
                    <div className="flex items-center justify-center">
                        <h1 className="text-2xl text-indigo-500 font-bold leading-normal mb-1">BACK-END</h1>
                    </div>
                    <div className="grid sm:grid-cols-3 xs:grid-cols-2 md:lg:xl:grid-cols-5 group">
                        {
                            language['back-end'].map((language, k) => (
                                <div key={k} className="p-5 flex flex-col items-center text-center group">
                                    <img className="rounded-lg border-gray-100 w-24 h-24" src={language.imageSrc} alt={language.imageAlt} />
                                    <h1 className="text-gray-50 font-semibold text-sm">{language.name}</h1>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </section>

        </div>
    )

}

export default About