import { type FormEvent, useRef, useState } from "react"
import emailjs from '@emailjs/browser';
import { FaSpinner, FaWhatsapp } from "react-icons/fa"
import { HiCheckCircle } from "react-icons/hi"
import { HiOutlineEnvelope, HiOutlineMapPin } from "react-icons/hi2"

export function Contact() {
    const form = useRef<HTMLFormElement>(null)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    const sendEmail = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if(!form.current) return

        setLoading(true)

        emailjs
            .sendForm(
                "service_gvfjvfj",
                "template_px3uybi",
                form.current,
                "-3ZPrm2-bBRd9eKxZ"
            )
            .then(
                () => {
                    setSuccess(true)
                    setLoading(false)
                },
                (error) => {
                    setError(true)
                    setLoading(false)
                    console.error(error)
                }
            )
    }

    const contacts = [
        {
            name: "WhatsApp",
            description: "+55 (19) 99610-6732",
            link: "https://wa.me/5519996106732?text=Olá",
            icon: <FaWhatsapp className="h-10 w-10" />
        },
        {
            name: "E-mail",
            description: "cuppi.patrick@gmail.com",
            link: "mailto:cuppi.patrick@gmail.com",
            icon: <HiOutlineEnvelope className="h-10 w-10" />
        },
        {
            name: "Santa Bárbara d'Oeste",
            description: "Centro",
            link: "https://www.google.com/maps/place/Santa+B%C3%A1rbara+d'Oeste,+SP/@-22.7556026,-47.513057,12z/data=!3m1!4b1!4m6!3m5!1s0x94c89d97dedd345f:0xfa0858713f645375!8m2!3d-22.7560892!4d-47.4153925!16s%2Fg%2F11bc57y3_4?entry=ttu&g_ep=EgoyMDI0MTAwMS4wIKXMDSoASAFQAw%3D%3D",
            icon: <HiOutlineMapPin className="h-10 w-10" />
        }
    ]

    return (
        <section id="contact" className="bg-blue-700 text-white" >
            <div className="container mx-auto max-w-4xl p-4 py-8">
                <div className="mb-6">
                    <h2 className="z-50 mb-2">
                        <span className="mr-2 font-headline text-3xl font-semibold">Fale</span>
                        <span className="font-handwriting text-4xl">Comigo</span>
                    </h2>
                    <p className="text-sm">
                        Entre em contato por formulário ou WhatsApp, com certeza irei te ajudar.
                    </p>
                </div>

                <div className="flex flex-col gap-6 md:flex-row">
                    <div className="basis-2/3">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="mb-4">
                                <label htmlFor="message" className="mb-2 block ps-4 font-headline font-semibold">
                                    Mensagem:
                                </label>
                                <textarea 
                                    name="message" 
                                    id="message" 
                                    className="h-36 w-full rounded-lg border border-white bg-transparent p-2 outline-none"
                                    required
                                />
                            </div>
                            <div className="mb-6 flex flex-col gap-4 md:flex-row">
                                <div className="flex-grow">
                                    <label htmlFor="fullName" className="mb-2 block ps-4 font-headline font-semibold">
                                            Seu nome:
                                        </label>
                                        <textarea 
                                            name="fullName" 
                                            id="fullName"
                                            className="h-10 w-full rounded-lg border border-white bg-transparent p-2 outline-none"
                                            required
                                        />
                                </div>
                                <div className="flex-grow">
                                    <label htmlFor="email" className="mb-2 block ps-4 font-headline font-semibold">
                                            Seu e-mail:
                                        </label>
                                        <textarea 
                                            name="email" 
                                            id="email" 
                                            className="h-10 w-full rounded-lg border border-white bg-transparent p-2 outline-none"
                                            required
                                        />
                                </div>
                            </div>

                            <div>
                                <button 
                                    type="submit"
                                    disabled={loading}
                                    className="button flex items-center gap-2 text-blue-700"
                                >
                                    {loading && <FaSpinner className="h-4 w-4 animate-spin" /> }
                                    {success && <HiCheckCircle className="h-4 w-4" />}
                                    Enviar Mensagem
                                </button>

                                {error && (
                                    <p className="mt-2">
                                        Ocorreu um erro ao enviar a messagem, tente novamente.
                                    </p>
                                )}
                            </div>
                        </form>
                    </div>

                    <div className="basis-1/3">
                        {contacts.map((contact, index) => (
                            <div
                                key={`contact-${// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                                    index}`} 
                                className="mb-4 flex items-center gap-4 rounded-lg border border-dashed border-gray-400 p-4"
                            >
                                {contact.icon}
                                <div>
                                    <p className="font-headline font-semibold">{contact.name}</p>
                                    <a 
                                        href={contact.link}
                                        target="_blank"
                                        className="text-gray-300 underline underline-offset-2" 
                                        rel="noopener noreferrer"
                                    >
                                        {contact.description}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}