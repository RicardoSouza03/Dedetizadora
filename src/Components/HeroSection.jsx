import gif from '../assets/baratas.gif'

const links = [
    { name: 'Serviços', href: '#Servicos' },
    { name: 'Pragas', href: '#Pragas' },
    { name: 'Entre em contato', href: '#Contato' },
]
const stats = [

]

export default function HeroSection() {
    return (
        <div id="Sobre" className="relative isolate overflow-hidden bg-gray-900 py-24">
            <img
                src={gif}
                alt="Baratas dançantes"
                className="absolute inset-0 -z-10 h-full w-full object-cover object-right phone:object-center md:object-center"
            />
            <div
                className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                aria-hidden="true"
            >
                <div
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                style={{
                    clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                />
            </div>
            <div
                className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                aria-hidden="true"
            >
                <div
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                style={{
                    clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Detetizadora</h2>
                <p className="mt-6 text-lg leading-8 text-white">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. A architecto dolor nisi ullam doloribus quaerat? Nostrum quas doloribus praesentium nemo non? Molestias voluptas asperiores cupiditate atque a distinctio placeat deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, eligendi quod modi numquam ratione quasi, illo nisi quis, quam expedita non tempore! Saepe neque repellat ipsum iusto, amet non esse?
                </p>
                </div>
                <div className="mx-auto mt-10 max-w-2xl">
                <div className="grid grid-cols-2 gap-x-2 gap-y-6 text-base font-semibold leading-7 text-white">
                    {links.map((link) => (
                    <a key={link.name} href={link.href}>
                        {link.name} <span aria-hidden="true">&rarr;</span>
                    </a>
                    ))}
                </div>
                <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                    <div key={stat.name} className="flex flex-col-reverse">
                        <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                        <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                    </div>
                    ))}
                </dl>
                </div>
            </div>
        </div>
    )
}
