export function Hero() {
    return (
        <section className="bg-gradient-to-tr from-black to-gray-800 text-white">
            <div className="container mx-auto max-w-4xl">
                <h1 className="mb-6">
                    <span className="font-handwriting block text-3xl">Olá, me chamo</span>
                    <span className="font-headline text-5xl font-semibold">Patrick </span>
                    <span className="font-headline text-5xl font-light text-blue-400">Cuppi</span>
                </h1>

                <h2 className="font-semibold flex items-center gap-2">
                    <div className="h-1 w-12 rounded-full bg-blue-800" />
                    Desenvolvedor JavaScript FullStack
                </h2>

                <p className="text-gray-400 ">
                    Sou um Desenvolvedor FullStack que ama criar aplicações web, mobile e sistemas
                    para resolver problemas, expandir negócios e realizar sonhos dos meus clientes através da tecnologia.
                    Atualmente trabalho como freelancer e transformo ideias em sites e aplicações.
                </p>
            </div>
        </section>
    )
}