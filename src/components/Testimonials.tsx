import { FaQuoteLeft } from "react-icons/fa";

export function Testimonials() {
    return (
        <section className="container mx-auto max-w-4xl p-4 py-8">
            <div className="relative mb-4 p-4 text-center">
                <h2 className="relative z-50 mb-2 font-bold">
                    <span className="mr-2 font-headline text-3xl text-gray-800">
                        Depoimentos de
                    </span>
                    <span className="font-handwriting text-4xl text-blue-800">
                        Clientes
                    </span>
                </h2>
                <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10" />
                <figure>
                    <FaQuoteLeft className="h-8 w-8 text-gray-600" />
                    <blockquote className="mb-6">
                        <p className="text-2xl text-gray-900">
                            Patrick atendeu todas as minhas expectativas referentes ao projetos, tanto em relação ao prazo como em usabilidade e design.
                        </p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center gap-2">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="O. Coutinho" className="h-6 w-6 rounded-full" />
                        <div className="flex items-center divide-x-2 divide-gray-200">
                            <div className="pr-3 font-medium text-gray-900">O. Coutinho</div>
                            <div className="pl-3 text-sm font-light text-gray-500">M.T. M. Elétricos</div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
    )
}