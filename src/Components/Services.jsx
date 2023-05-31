import { CheckIcon } from '@heroicons/react/20/solid'

const includedFeatures = [
  'Private forum access',
  'Member resources',
  'Entry to annual conference',
  'Official member t-shirt',
]

const services = [
    { 
        name: 'Detetização',
        description: 'Um serviço de dedetização é feito no intuito de evitar um ambiente favorável para atuação de pragas.',
    },
    { 
        name: 'Detetização',
        description: 'Um serviço de dedetização é feito no intuito de evitar um ambiente favorável para atuação de pragas.',
    },
    { 
        name: 'Detetização',
        description: 'Um serviço de dedetização é feito no intuito de evitar um ambiente favorável para atuação de pragas.',
    },
    { 
        name: 'Detetização',
        description: 'Um serviço de dedetização é feito no intuito de evitar um ambiente favorável para atuação de pragas.',
    },
]

export default function Services() {
  return (
    <div id="Servicos" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nossos serviços!</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero doloremque facere iure saepe quisquam et sed accusantium aperiam ex provident nihil maxime cum numquam veniam, deserunt corrupti rerum reprehenderit quos!
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-5xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 gap-y-6 phone:flex phone:flex-colunm flex flex-wrap flex-row justify-around">
            {services.map(({name, description}) => (
                <div key={name} className='rounded-2xl bg-gray-50 px-10 py-10 w-2/5 phone:w-auto sm:w-auto text-center ring-1 ring-inset ring-gray-900/5'>
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900">{name}</h3>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                        {description}
                    </p>
                    <a
                        href="#Contato"
                        className="mt-10 block w-auto rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Fale conosco
                    </a>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
