import { HiDownload } from "react-icons/hi";

export function Hero() {
    return (
        <section className="bg-gradient-to-tr from-black to-gray-800 text-white rounded-br-[80px] md:rounded-br-[280px]">
            <div className="container mx-auto max-w-4xl p-2 py-12 flex flex-col md:flex-row">
                <div className="basis-1/2">
                    <h1 className="mb-6 text-center md:text-left">
                        <span className="font-handwriting block text-3xl text-center md:text-left">Olá, me chamo</span>
                        <span className="font-headline text-5xl font-semibold">Patrick </span>
                        <span className="font-headline text-5xl font-light text-blue-400">Cuppi</span>
                    </h1>

                    <h2 className="font-semibold flex items-center gap-2 text-center md:text-left">
                        <div className="h-1 w-12 rounded-full bg-blue-800" />
                        Desenvolvedor JavaScript FullStack
                    </h2>

                    <p className="text-gray-400 my-6 text-center md:text-left">
                        Sou um Desenvolvedor FullStack que ama criar aplicações web, mobile e sistemas
                        para resolver problemas, expandir negócios e realizar sonhos dos meus clientes através da tecnologia.
                        Atualmente trabalho como freelancer e transformo ideias em sites e aplicações.
                    </p>

                    <div className="flex items-center gap-2 justify-center md:justify-start">
                        {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
                        <a href="#" className="underline font-bold text-white " rel="noopener">Fale Comigo</a>
                        <span className="italic text-gray-500">ou</span>
                        {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
                        <a href="#" 
                            className="button text-gray-600 hover:text-gray-900 flex items-center gap-2" 
                            rel="noopener">
                                <HiDownload />
                                Baixe meu CV
                        </a>
                    </div>
                </div>
                <div className="basis-1/2">
                </div>                
            </div>
        </section>
    )
}