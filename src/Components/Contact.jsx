import { useState } from 'react'
import { PhoneIcon, EnvelopeOpenIcon } from '@heroicons/react/20/solid'

const contacts = [
    {
      name: 'Telefone:',
      info: '(11) 4332-3299',
      icon: PhoneIcon,
    },
    {
        name: 'Telefone:',
        info: '(11) 4330-2099',
        icon: PhoneIcon,
    },
    {
        name: 'Email:',
        info: 'detizadora@uol.com.br',
        icon: EnvelopeOpenIcon,
    },
]

export default function Contact() {
    return (
        <footer id="Contato" className="bg-white dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="flex justify-evenly p-5">
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contato</h2>
                        <ul role="list" className="divide-gray-100">
                        {contacts.map((contact) => (
                            <li key={contact.info} className="flex justify-start flex-wrap gap-x-10 py-5">
                                <div className="flex gap-x-4">
                                    {<contact.icon />}
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-semibold leading-6 text-white">{contact.name}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end">
                                    <p className="text-sm leading-6 text-white">{contact.info}</p>
                                </div>
                            </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Nos siga</h2>
                        <ul className="text-gray-600 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="" className="hover:underline ">Rede social</a>
                            </li>
                            <li>
                                <a href="" className="hover:underline">Rede social</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </footer>
    )
}




