import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon, InformationCircleIcon } from '@heroicons/react/outline'
import emailjs from '@emailjs/browser';
import { useNav } from '../hook/useNav';

function Contact() {

    const contactRef = useNav('Contact');
    const [open, setOpen] = useState(false);
    const handeleOpen = (e) => setOpen(true)
    const handeleClose = () => setOpen(false)
    const cancelButtonRef = useRef(null)
    const [text, setText] = useState("")
    const [title, setTitle] = useState("")
    const [success, setSuccess] = useState(false)

    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [user_name, setUser_name] = useState("");

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_cxshpkg', 'template_gw3cz8p', form.current, 'bEGg7kcG2OQX3kBvP')
            .then((result) => {
                setSuccess(true)
                setMessage("")
                setEmail("")
                setTel("")
                setUser_name("")
                setTitle('Merci pour votre email')
                setText('Un email à bien été envoyer')
                handeleOpen()
            }, (error) => {
                setSuccess(false)
                setTitle('Toute nos excuses')
                setText('Une erreur est survenue lors de l\'envoi de l\'email merci de réessayer plus tard')
                handeleOpen()
            });
    };

    const info = () => {
        if (success) {
            return (
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-white sm:mx-0 sm:h-10 sm:w-10">
                    <InformationCircleIcon className="h-6 w-6 text-indigo-500" aria-hidden="true" />
                </div>
            )
        } else {
            return (
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <ExclamationIcon className="h-6 w-6 text-red-500" aria-hidden="true" />
                </div>
            )
        }
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
                        <div className="flex items-center sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative dark:bg-gray-800 bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                                    <div className="dark:bg-gray-800 bg-gray-50 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            {info()}
                                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-indigo-500">
                                                    {title}
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <p className="text-sm dark:text-gray-400 text-black">
                                                        {text}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dark:bg-gray-900 bg-gray-300 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                        <button
                                            type="button"
                                            className="mt-3 w-full inline-flex justify-center rounded-md shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
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
            <section ref={contactRef} id='contactContainer'>

                <div className="flex items-center justify-center">
                    <h4 className="mt-10 text-xl md:text-4xl font-medium leading-snug text-black dark:text-white">Une demande ?</h4>
                </div>
                <div className="content-center">
                    <div className="flex flex-col items-center justify-center w-full px-10 pt-5 pb-20 lg:pt-20 lg:flex-row">
                        <div className="relative z-10 w-full max-w-2xl mt-20 lg:mt-0 lg:w-5/12">
                            <div className="relative z-10 flex flex-col items-start justify-start p-10 bg-white dark:bg-gray-800 shadow-2xl rounded-xl h-2/6">
                                <form className="relative w-full mt-6 space-y-8" ref={form} onSubmit={sendEmail}>
                                    <div className="relative">
                                        <label className="absolute px-2 ml-2 -mt-3 text-sm font-medium text-black bg-white dark:bg-gray-800 dark:text-white">Nom / Prenom</label>
                                        <input type="text" name="user_name" className="contact_input" placeholder="John" value={user_name} onChange={(e)=>{setUser_name(e.target.value)}} required />
                                    </div>
                                    <div className="relative">
                                        <label className="absolute px-2 ml-2 -mt-3 font-medium xs:text-sm text-black bg-white dark:bg-gray-800 dark:text-white">Address Email</label>
                                        <input type="email" name="user_email" className="contact_input" placeholder="exemple@email.com" value={email} onChange={(e)=>{setEmail(e.target.value)}} required />
                                    </div>
                                    <div className="relative">
                                        <label className="absolute px-2 ml-2 -mt-3 font-medium xs:text-sm text-black bg-white dark:bg-gray-800 dark:text-white">Téléphone</label>
                                        <input type="tel" name="phone_number" className="contact_input" placeholder="06 00 00 00 00" value={tel} onChange={(e)=>{setTel(e.target.value)}} pattern="^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$" required />
                                    </div>
                                    <div className="relative">
                                        <label className="absolute px-2 ml-2 -mt-3 font-medium xs:text-sm text-black bg-white dark:bg-gray-800 dark:text-white">Message</label>
                                        <textarea name="message" className="contact_area_input" value={message} onChange={(e)=>{setMessage(e.target.value)}} placeholder="Merci de détailler votre besoin aux maximum" required />
                                    </div>
                                    <div className="relative">
                                        <button className="inline-block w-full px-5 py-4 text-sm font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-800 ease">Envoyer</button>
                                    </div>
                                </form>
                            </div>
                            <svg className="absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 dark:text-gray-200 fill-current" viewBox="0 0 91 91" xmlns="http://www.w3.org/2000/svg">
                                <g stroke="none" strokeWidth="1" fillRule="evenodd">
                                    <g fillRule="nonzero">
                                        <g>
                                            <g>
                                                <circle cx="3.261" cy="3.445" r="2.72"></circle>
                                                <circle cx="15.296" cy="3.445" r="2.719"></circle>
                                                <circle cx="27.333" cy="3.445" r="2.72"></circle>
                                                <circle cx="39.369" cy="3.445" r="2.72"></circle>
                                                <circle cx="51.405" cy="3.445" r="2.72"></circle>
                                                <circle cx="63.441" cy="3.445" r="2.72"></circle>
                                                <circle cx="75.479" cy="3.445" r="2.72"></circle>
                                                <circle cx="87.514" cy="3.445" r="2.719"></circle>
                                            </g>
                                            <g transform="translate(0 12)">
                                                <circle cx="3.261" cy="3.525" r="2.72"></circle>
                                                <circle cx="15.296" cy="3.525" r="2.719"></circle>
                                                <circle cx="27.333" cy="3.525" r="2.72"></circle>
                                                <circle cx="39.369" cy="3.525" r="2.72"></circle>
                                                <circle cx="51.405" cy="3.525" r="2.72"></circle>
                                                <circle cx="63.441" cy="3.525" r="2.72"></circle>
                                                <circle cx="75.479" cy="3.525" r="2.72"></circle>
                                                <circle cx="87.514" cy="3.525" r="2.719"></circle>
                                            </g>
                                            <g transform="translate(0 24)">
                                                <circle cx="3.261" cy="3.605" r="2.72"></circle>
                                                <circle cx="15.296" cy="3.605" r="2.719"></circle>
                                                <circle cx="27.333" cy="3.605" r="2.72"></circle>
                                                <circle cx="39.369" cy="3.605" r="2.72"></circle>
                                                <circle cx="51.405" cy="3.605" r="2.72"></circle>
                                                <circle cx="63.441" cy="3.605" r="2.72"></circle>
                                                <circle cx="75.479" cy="3.605" r="2.72"></circle>
                                                <circle cx="87.514" cy="3.605" r="2.719"></circle>
                                            </g>
                                            <g transform="translate(0 36)">
                                                <circle cx="3.261" cy="3.686" r="2.72"></circle>
                                                <circle cx="15.296" cy="3.686" r="2.719"></circle>
                                                <circle cx="27.333" cy="3.686" r="2.72"></circle>
                                                <circle cx="39.369" cy="3.686" r="2.72"></circle>
                                                <circle cx="51.405" cy="3.686" r="2.72"></circle>
                                                <circle cx="63.441" cy="3.686" r="2.72"></circle>
                                                <circle cx="75.479" cy="3.686" r="2.72"></circle>
                                                <circle cx="87.514" cy="3.686" r="2.719"></circle>
                                            </g>
                                            <g transform="translate(0 49)">
                                                <circle cx="3.261" cy="2.767" r="2.72"></circle>
                                                <circle cx="15.296" cy="2.767" r="2.719"></circle>
                                                <circle cx="27.333" cy="2.767" r="2.72"></circle>
                                                <circle cx="39.369" cy="2.767" r="2.72"></circle>
                                                <circle cx="51.405" cy="2.767" r="2.72"></circle>
                                                <circle cx="63.441" cy="2.767" r="2.72"></circle>
                                                <circle cx="75.479" cy="2.767" r="2.72"></circle>
                                                <circle cx="87.514" cy="2.767" r="2.719"></circle>
                                            </g>
                                            <g transform="translate(0 61)">
                                                <circle cx="3.261" cy="2.846" r="2.72"></circle>
                                                <circle cx="15.296" cy="2.846" r="2.719"></circle>
                                                <circle cx="27.333" cy="2.846" r="2.72"></circle>
                                                <circle cx="39.369" cy="2.846" r="2.72"></circle>
                                                <circle cx="51.405" cy="2.846" r="2.72"></circle>
                                                <circle cx="63.441" cy="2.846" r="2.72"></circle>
                                                <circle cx="75.479" cy="2.846" r="2.72"></circle>
                                                <circle cx="87.514" cy="2.846" r="2.719"></circle>
                                            </g>
                                            <g transform="translate(0 73)">
                                                <circle cx="3.261" cy="2.926" r="2.72"></circle>
                                                <circle cx="15.296" cy="2.926" r="2.719"></circle>
                                                <circle cx="27.333" cy="2.926" r="2.72"></circle>
                                                <circle cx="39.369" cy="2.926" r="2.72"></circle>
                                                <circle cx="51.405" cy="2.926" r="2.72"></circle>
                                                <circle cx="63.441" cy="2.926" r="2.72"></circle>
                                                <circle cx="75.479" cy="2.926" r="2.72"></circle>
                                                <circle cx="87.514" cy="2.926" r="2.719"></circle>
                                            </g>
                                            <g transform="translate(0 85)">
                                                <circle cx="3.261" cy="3.006" r="2.72"></circle>
                                                <circle cx="15.296" cy="3.006" r="2.719"></circle>
                                                <circle cx="27.333" cy="3.006" r="2.72"></circle>
                                                <circle cx="39.369" cy="3.006" r="2.72"></circle>
                                                <circle cx="51.405" cy="3.006" r="2.72"></circle>
                                                <circle cx="63.441" cy="3.006" r="2.72"></circle>
                                                <circle cx="75.479" cy="3.006" r="2.72"></circle>
                                                <circle cx="87.514" cy="3.006" r="2.719"></circle>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <svg className="absolute bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-12 text-indigo-500 fill-current" viewBox="0 0 91 91" xmlns="http://www.w3.org/2000/svg">
                                <g stroke="none" strokeWidth="1" fillRule="evenodd">
                                    <g fillRule="nonzero">
                                        <g>
                                            <g>
                                                <circle cx="3.261" cy="3.445" r="2.72"></circle>
                                                <circle cx="15.296" cy="3.445" r="2.719"></circle>
                                                <circle cx="27.333" cy="3.445" r="2.72"></circle>
                                                <circle cx="39.369" cy="3.445" r="2.72"></circle>
                                                <circle cx="51.405" cy="3.445" r="2.72"></circle>
                                                <circle cx="63.441" cy="3.445" r="2.72"></circle>
                                                <circle cx="75.479" cy="3.445" r="2.72"></circle>
                                                <circle cx="87.514" cy="3.445" r="2.719"></circle>
                                            </g>
                                            <g transform="translate(0 12)">
                                                <circle cx="3.261" cy="3.525" r="2.72"></circle>
                                                <circle cx="15.296" cy="3.525" r="2.719"></circle>
                                                <circle cx="27.333" cy="3.525" r="2.72"></circle>
                                                <circle cx="39.369" cy="3.525" r="2.72"></circle>
                                                <circle cx="51.405" cy="3.525" r="2.72"></circle>
                                                <circle cx="63.441" cy="3.525" r="2.72"></circle>
                                                <circle cx="75.479" cy="3.525" r="2.72"></circle>
                                                <circle cx="87.514" cy="3.525" r="2.719"></circle>
                                            </g>
                                            <g transform="translate(0 24)">
                                                <circle cx="3.261" cy="3.605" r="2.72"></circle>
                                                <circle cx="15.296" cy="3.605" r="2.719"></circle>
                                                <circle cx="27.333" cy="3.605" r="2.72"></circle>
                                                <circle cx="39.369" cy="3.605" r="2.72"></circle>
                                                <circle cx="51.405" cy="3.605" r="2.72"></circle>
                                                <circle cx="63.441" cy="3.605" r="2.72"></circle>
                                                <circle cx="75.479" cy="3.605" r="2.72"></circle>
                                                <circle cx="87.514" cy="3.605" r="2.719"></circle>
                                            </g>
                                            <g transform="translate(0 36)">
                                                <circle cx="3.261" cy="3.686" r="2.72"></circle>
                                                <circle cx="15.296" cy="3.686" r="2.719"></circle>
                                                <circle cx="27.333" cy="3.686" r="2.72"></circle>
                                                <circle cx="39.369" cy="3.686" r="2.72"></circle>
                                                <circle cx="51.405" cy="3.686" r="2.72"></circle>
                                                <circle cx="63.441" cy="3.686" r="2.72"></circle>
                                                <circle cx="75.479" cy="3.686" r="2.72"></circle>
                                                <circle cx="87.514" cy="3.686" r="2.719"></circle>
                                            </g>
                                            <g transform="translate(0 49)">
                                                <circle cx="3.261" cy="2.767" r="2.72"></circle>
                                                <circle cx="15.296" cy="2.767" r="2.719"></circle>
                                                <circle cx="27.333" cy="2.767" r="2.72"></circle>
                                                <circle cx="39.369" cy="2.767" r="2.72"></circle>
                                                <circle cx="51.405" cy="2.767" r="2.72"></circle>
                                                <circle cx="63.441" cy="2.767" r="2.72"></circle>
                                                <circle cx="75.479" cy="2.767" r="2.72"></circle>
                                                <circle cx="87.514" cy="2.767" r="2.719"></circle>
                                            </g>
                                            <g transform="translate(0 61)">
                                                <circle cx="3.261" cy="2.846" r="2.72"></circle>
                                                <circle cx="15.296" cy="2.846" r="2.719"></circle>
                                                <circle cx="27.333" cy="2.846" r="2.72"></circle>
                                                <circle cx="39.369" cy="2.846" r="2.72"></circle>
                                                <circle cx="51.405" cy="2.846" r="2.72"></circle>
                                                <circle cx="63.441" cy="2.846" r="2.72"></circle>
                                                <circle cx="75.479" cy="2.846" r="2.72"></circle>
                                                <circle cx="87.514" cy="2.846" r="2.719"></circle>
                                            </g>
                                            <g transform="translate(0 73)">
                                                <circle cx="3.261" cy="2.926" r="2.72"></circle>
                                                <circle cx="15.296" cy="2.926" r="2.719"></circle>
                                                <circle cx="27.333" cy="2.926" r="2.72"></circle>
                                                <circle cx="39.369" cy="2.926" r="2.72"></circle>
                                                <circle cx="51.405" cy="2.926" r="2.72"></circle>
                                                <circle cx="63.441" cy="2.926" r="2.72"></circle>
                                                <circle cx="75.479" cy="2.926" r="2.72"></circle>
                                                <circle cx="87.514" cy="2.926" r="2.719"></circle>
                                            </g>
                                            <g transform="translate(0 85)">
                                                <circle cx="3.261" cy="3.006" r="2.72"></circle>
                                                <circle cx="15.296" cy="3.006" r="2.719"></circle>
                                                <circle cx="27.333" cy="3.006" r="2.72"></circle>
                                                <circle cx="39.369" cy="3.006" r="2.72"></circle>
                                                <circle cx="51.405" cy="3.006" r="2.72"></circle>
                                                <circle cx="63.441" cy="3.006" r="2.72"></circle>
                                                <circle cx="75.479" cy="3.006" r="2.72"></circle>
                                                <circle cx="87.514" cy="3.006" r="2.719"></circle>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );

}

export default Contact