import PhotoPerfil from "../assets/images/perfil.jpg";

export function About() {
    return (
        <section className="container mx-auto my-4 max-w-5xl p-4">
            <div className="relative p-4 text-center">
                <h2 className="relative z-10 text-blue-900 font-bold">
                    <span className="mr-2 font-headline text-3xl">Sobre</span>
                    <span className="font-handwriting text-4xl">Mim</span>
                </h2>
                <p className="relative text-sm text-gray-600">
                    Tenho alguns projetos executados e gostaria que o próximo seja o seu.
                </p>

                <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-100/40" /> 
            </div>

            <div className="relative mx-auto mt-20 max-w-lg">
                <div className="relative bg-blue-100 w-full rounded-lg p-4 ps-20 md:h-64 md:ps-48">
                    <div className="relative w-full h-full rounded-lg bg-gray-50 p-4">
                        <p className="font-handwriting text-lg font-bold">Olá,</p>
                        <p>
                            <span className="mr-1">Meu nome é</span>
                            <span className="font-headline font-bold uppercase text-blue-900">Patrick Cuppi</span>
                        </p>
                        <table>
                            <tbody>
                                <tr>
                                    <td className="font-headline font-bold uppercase text-blue-900">
                                        Idade:
                                    </td>
                                    <td>31</td>
                                </tr>
                                <tr>
                                    <td className="font-headline font-bold uppercase text-blue-900">
                                        Celular:
                                    </td>
                                    <td>
                                        <a 
                                            href="tel:+55199961067332"
                                            className="underline hover:text-blue-800"
                                            rel="noopener"
                                        >
                                            +55 (19) 99610-6732
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-headline font-bold uppercase text-blue-900">
                                        E-mail:
                                    </td>
                                    <td>
                                        <a 
                                            href="mailto:cuppi.patrick@gmail.com"
                                            className="underline hover:text-blue-800"
                                            rel="noopener"
                                        >
                                            cuppi.patrick@gmail.com
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-headline font-bold uppercase text-blue-900">
                                        Local:
                                    </td>
                                    <td>
                                        <a 
                                            href="https://www.google.com/maps/place/Santa+B%C3%A1rbara+d'Oeste,+SP/@-22.7556026,-47.513057,12z/data=!3m1!4b1!4m6!3m5!1s0x94c89d97dedd345f:0xfa0858713f645375!8m2!3d-22.7560892!4d-47.4153925!16s%2Fg%2F11bc57y3_4?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D"
                                            target="_blank" rel="noreferrer"
                                            className="underline hover:text-blue-800"
                                        >
                                            Santa Bárbara d'Oeste/SP
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-headline font-bold uppercase text-blue-900">
                                        Online:
                                    </td>
                                    <td>
                                        <span className="relative flex h-3 w-3">
                                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"> </span>
                                            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"> </span>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="absolute -left-2 -top-4 h-24 w-20 
                            rounded-lg bg-gray-600 bg-cover bg-center 
                            md:-left-12 md:-top-12 md:h-70 md:w-56">
                                <img src={PhotoPerfil} alt="Foto de peril no CV" />
                    </div>
                </div>
            </div>
        </section>
    )
}