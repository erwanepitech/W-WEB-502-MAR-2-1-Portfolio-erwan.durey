import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Pdf from '../components/pdf'
import image from '../assets/ErwanDUREY.png'
import pdf_file from '../assets/cv.pdf'
import language from '../assets/langage.json'
// import test from '../assets/test.json'
import logo from '../assets/image'

function App() {


    // test.map((language) => {

    //     console.log(language.language[0].php[0].type);
    // })

    const [open, setOpen] = useState(false);
    const handeleOpen = () => setOpen(true)
    const handeleClose = () => setOpen(false)
    const cancelButtonRef = useRef(null)

    const handelClick = () => {
        handeleOpen()
    }

    const download = () => {
        // document.getElementById("download").click()
        var link = document.createElement('a');
        link.href = pdf_file;
        link.download = 'cv.pdf';
        link.dispatchEvent(new MouseEvent('click'));
    }

    return (
        <div>
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
                        <div className="fixed inset-0 bg-white dark:bg-black dark:bg-opacity-75 transition-opacity" />
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
                                <Dialog.Panel className="relative bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-fit sm:w-full">
                                    <div className="bg-gray-800 px-2 pt-5 pb-4 sm:p-6 sm:pb-4">
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
                                    <div className="bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                        <button
                                            type="button"
                                            className="mt-3 w-full rounded-md shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={handeleClose}
                                            ref={cancelButtonRef}
                                        >
                                            Fermer
                                        </button>
                                        <button
                                            onClick={download}
                                            type="button"
                                            class="mt-2 w-full rounded-md shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm flex justify-center"
                                        >
                                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                            </svg>
                                            <span class="ml-2">Télécharger</span>
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
            <div className='container mx-auto'>
                <div class="relative max-w-md mx-auto md:max-w-2xl mt-20 min-w-0 break-words bg-gray-800 w-full mb-6 shadow-lg rounded-xl">
                    <div class="px-6">
                        <div class="flex flex-wrap justify-center">
                            <div class="w-full flex justify-center mb-16">
                                <div class="relative">
                                    <img src={image} class="rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]" />
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-2">
                            <h3 class="text-2xl text-indigo-500 font-bold leading-normal mb-1">Erwan Durey</h3>
                            <div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                                <i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>La seyne sur mer, France
                            </div>
                        </div>
                        <div class="mt-6 py-6 border-t border-slate-200 text-center">
                            <div class="flex flex-wrap justify-center">
                                <div class="w-full px-4">
                                    <p class="font-light leading-relaxed text-gray-400 mb-4">Décidé à faire de ma
                                        passion un métier, j'ai
                                        commencé ma formation
                                        chez Epitech.
                                        Étudiant motivé, plein de
                                        ressources capable de
                                        s'adapter aux contraintes
                                        et directives données.</p>
                                    {/* <a href="" class="font-normal text-slate-700 hover:text-slate-400">Follow Account</a> */}
                                    <button
                                        onClick={handelClick}
                                        type="button"
                                        class="mx-auto px-4 py-3 bg-blue-600 hover:bg-blue-800 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform flex"
                                    >
                                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                        <span class="ml-2">Visualiser cv</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex md:items-center md:justify-center">
                    <h1 class="text-2xl text-indigo-500 font-bold leading-normal mb-1">MES COMPÉTENCES</h1>
                </div>

                <div className='flex justify-between items-center'>

                    <div class="flex items-center justify-center">
                        <div class="bg-gray-800 rounded-lg shadow-xl p-8">
                            <div class="mb-4">
                                <h1 class="text-2xl text-indigo-500 font-bold leading-normal mb-1">JS</h1>
                            </div>
                            <div class="grid grid-cols-2 gap-4">
                                <div class="flex items-center justify-center flex-col bg-gray-700 p-4 rounded-lg w-48 space-y-4">
                                    <img class="rounded-full border-gray-100 shadow-sm w-24 h-24" src="https://randomuser.me/api/portraits/women/43.jpg" alt="user image" />
                                    <h1 class="text-gray-50 font-semibold">Vivian Davie</h1>
                                    <button class="px-8 py-1 border-2 border-indigo-600 bg-indigo-600 rounded-full text-gray-50 font-semibold">Follow</button>
                                </div>
                                <div class="flex items-center justify-center flex-col bg-gray-700 p-4 rounded-lg w-48 space-y-4">
                                    <img class="rounded-full border-gray-100 shadow-sm w-24 h-24" src="https://randomuser.me/api/portraits/men/81.jpg" alt="user image" />
                                    <h1 class="text-gray-50 font-semibold">Derry Harris</h1>
                                    <button class="px-8 py-1 border-2 border-indigo-600 bg-indigo-600 rounded-full text-gray-50 font-semibold">Follow</button>
                                </div>
                                <div class="flex items-center justify-center flex-col bg-gray-700 p-4 rounded-lg w-48 space-y-4">
                                    <img class="rounded-full border-gray-100 shadow-sm w-24 h-24" src="https://randomuser.me/api/portraits/women/2.jpg" alt="user image" />
                                    <h1 class="text-gray-50 font-semibold">Aliesha Hanson</h1>
                                    <button class="px-8 py-1 border-2 border-indigo-600 bg-indigo-600 rounded-full text-gray-50 font-semibold">Follow</button>
                                </div>
                                <div class="flex items-center justify-center flex-col bg-gray-700 p-4 rounded-lg w-48 space-y-4">
                                    <img class="rounded-full border-gray-100 shadow-sm w-24 h-24" src="https://randomuser.me/api/portraits/women/13.jpg" alt="user image" />
                                    <h1 class="text-gray-50 font-semibold">Cristina Frederick</h1>
                                    <button class="px-6 py-1 border-2 border-indigo-600 rounded-full text-gray-50 font-semibold">Following</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center justify-center">
                        <div class="bg-gray-800 rounded-lg shadow-xl p-8">
                            <div class="mb-4">
                                <h1 class="text-2xl text-indigo-500 font-bold leading-normal mb-1">JS</h1>
                            </div>
                            <div class="grid grid-cols-2 gap-4">
                                <div class="flex items-center justify-center flex-col bg-gray-700 p-4 rounded-lg w-48 space-y-4">
                                    <img class="rounded-full border-gray-100 shadow-sm w-24 h-24" src="https://randomuser.me/api/portraits/women/43.jpg" alt="user image" />
                                    <h1 class="text-gray-50 font-semibold">Vivian Davie</h1>
                                    <button class="px-8 py-1 border-2 border-indigo-600 bg-indigo-600 rounded-full text-gray-50 font-semibold">Follow</button>
                                </div>
                                <div class="flex items-center justify-center flex-col bg-gray-700 p-4 rounded-lg w-48 space-y-4">
                                    <img class="rounded-full border-gray-100 shadow-sm w-24 h-24" src="https://randomuser.me/api/portraits/men/81.jpg" alt="user image" />
                                    <h1 class="text-gray-50 font-semibold">Derry Harris</h1>
                                    <button class="px-8 py-1 border-2 border-indigo-600 bg-indigo-600 rounded-full text-gray-50 font-semibold">Follow</button>
                                </div>
                                <div class="flex items-center justify-center flex-col bg-gray-700 p-4 rounded-lg w-48 space-y-4">
                                    <img class="rounded-full border-gray-100 shadow-sm w-24 h-24" src="https://randomuser.me/api/portraits/women/2.jpg" alt="user image" />
                                    <h1 class="text-gray-50 font-semibold">Aliesha Hanson</h1>
                                    <button class="px-8 py-1 border-2 border-indigo-600 bg-indigo-600 rounded-full text-gray-50 font-semibold">Follow</button>
                                </div>
                                <div class="flex items-center justify-center flex-col bg-gray-700 p-4 rounded-lg w-48 space-y-4">
                                    <img class="rounded-full border-gray-100 shadow-sm w-24 h-24" src="https://randomuser.me/api/portraits/women/13.jpg" alt="user image" />
                                    <h1 class="text-gray-50 font-semibold">Cristina Frederick</h1>
                                    <button class="px-6 py-1 border-2 border-indigo-600 rounded-full text-gray-50 font-semibold">Following</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center justify-center">
                        <div class="bg-gray-800 rounded-lg shadow-xl p-8">
                            <div class="mb-4">
                                <h1 class="text-2xl text-indigo-500 font-bold leading-normal mb-1">JS</h1>
                            </div>
                            <div class="grid grid-cols-2 gap-4">
                                <div class="flex items-center justify-center flex-col bg-gray-700 p-4 rounded-lg w-48 space-y-4">
                                    <img class="rounded-full border-gray-100 shadow-sm w-24 h-24" src="https://randomuser.me/api/portraits/women/43.jpg" alt="user image" />
                                    <h1 class="text-gray-50 font-semibold">Vivian Davie</h1>
                                    <button class="px-8 py-1 border-2 border-indigo-600 bg-indigo-600 rounded-full text-gray-50 font-semibold">Follow</button>
                                </div>
                                <div class="flex items-center justify-center flex-col bg-gray-700 p-4 rounded-lg w-48 space-y-4">
                                    <img class="rounded-full border-gray-100 shadow-sm w-24 h-24" src="https://randomuser.me/api/portraits/men/81.jpg" alt="user image" />
                                    <h1 class="text-gray-50 font-semibold">Derry Harris</h1>
                                    <button class="px-8 py-1 border-2 border-indigo-600 bg-indigo-600 rounded-full text-gray-50 font-semibold">Follow</button>
                                </div>
                                <div class="flex items-center justify-center flex-col bg-gray-700 p-4 rounded-lg w-48 space-y-4">
                                    <img class="rounded-full border-gray-100 shadow-sm w-24 h-24" src="https://randomuser.me/api/portraits/women/2.jpg" alt="user image" />
                                    <h1 class="text-gray-50 font-semibold">Aliesha Hanson</h1>
                                    <button class="px-8 py-1 border-2 border-indigo-600 bg-indigo-600 rounded-full text-gray-50 font-semibold">Follow</button>
                                </div>
                                <div class="flex items-center justify-center flex-col bg-gray-700 p-4 rounded-lg w-48 space-y-4">
                                    <img class="rounded-full border-gray-100 shadow-sm w-24 h-24" src="https://randomuser.me/api/portraits/women/13.jpg" alt="user image" />
                                    <h1 class="text-gray-50 font-semibold">Cristina Frederick</h1>
                                    <button class="px-6 py-1 border-2 border-indigo-600 rounded-full text-gray-50 font-semibold">Following</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default App

// {language.map((product) => (
//     <a key={product.id} href={product.href} className="group">
//         <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
//             <img
//                 src={product.imageSrc}
//                 alt={product.imageAlt}
//                 className="w-full h-full object-center object-cover group-hover:opacity-75"
//             />
//         </div>
//         <h3 className="mt-4 text-sm text-gray-400">{product.name}</h3>
//         {/* <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p> */}
//     </a>
// ))}