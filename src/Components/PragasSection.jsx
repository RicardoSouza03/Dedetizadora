import cupimSolo from '../assets/cupim_solo.jpg'
import aranha from '../assets/aranha.jpg'
import mosquito from '../assets/mosquito.jpg'
import mosca from '../assets/mosca.png'

const texto = `Texto explicativo`

const pragas = [
    {
      name: 'Cupim de solo',
      role: texto,
      imageUrl: cupimSolo,
    },
    {
        name: 'Aranha',
        role: texto,
        imageUrl: aranha,
    },
    {
        name: 'Mosquito',
        role: texto,
        imageUrl: mosquito,
    },
    {
        name: 'Mosca',
        role: texto,
        imageUrl: mosca,
    },
    {
        name: 'Mosca',
        role: texto,
        imageUrl: mosca,
    },
    {
        name: 'Mosquito',
        role: texto,
        imageUrl: mosquito,
    },
    {
        name: 'Aranha',
        role: texto,
        imageUrl: aranha,
    },
    {
        name: 'Cupim de solo',
        role: texto,
        imageUrl: cupimSolo,
    },
  ]
  
  export default function PragasSection() {
    return (
      <div id="Pragas" className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Conheça os tipos de praga</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quidem, est quia non natus error sapiente, et consequuntur facilis esse similique! Voluptate aperiam corrupti ipsam a quo quia maiores repudiandae!
            </p>
          </div>
          <ul role="list" className="grid gap-x-4 gap-y-12 grid-cols-3 sm:gap-y-16 col-span-2 phone:grid-cols-1 phone: col-span-0">
            {pragas.map((person) => (
              <li key={person.name}>
                <div className="flex flex-col items-center gap-x-6">
                  <img className="h-36 w-36 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  