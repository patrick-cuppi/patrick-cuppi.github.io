import { HiAcademicCap } from "react-icons/hi"
import { HiCodeBracketSquare } from "react-icons/hi2"

export function Skills() {
    const educations = [
        {
            name: "Especialização em Engenharia de Software | UNICAMP"
        },
        {
            name: "Engenharia de Produção | UNIMEP"
        },
        {
            name: "Bootcamp FullStack Development | TERA"
        },
        {
            name: "Full Stack JavaScript | OneBitCode"
        },
        {
            name: "Python | OneBitCode"
        },
        {
            name: "Python PRO | Let's Code"
        },
        {
            name: "React avançado | Ada Tech"
        },
        {
            name: "Rust avançado | Alura"
        }
    ]

    const skills = [
        // {
        //     name: "HTML5",
        //     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
        //     level: 95
        // },
        // {
        //     name: "CSS3",
        //     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
        //     level: 95
        // },
        {
            name: "Node.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
            level: 85
        },
        {
            name: "React.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            level: 80
        },
        {
            name: "JavaScript",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
            level: 90
        },
        {
            name: "TypeScript",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
            level: 90
        },
        {
            name: "Python",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
            level: 85
        },
        {
            name: "Rust",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg",
            level: 85
        },
        {
            name: "PostgreSQL",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
            level: 80
        },
        // {
        //     name: "SQLite",
        //     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original-wordmark.svg",
        //     level: 80
        // },
        // {
        //     name: "MySQL",
        //     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
        //     level: 80
        // },
        {
            name: "MongoDB",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
            level: 90
        },
        {
            name: "Docker",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg",
            level: 80
        },
        {
            name: "AWS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
            level: 80
        },
    ]

    return (
        <section className="rounded-br-[80px] bg-gray-300 md:rounded-br-[180px]">
            <div className="container mx-auto max-w-4xl p-4 py-12">
                <div className="relative mb-4 p-4 text-center">
                    <h2 className="relative z-50 mb-2 font-bold">
                        <span className="mr-2 font-headline text-3xl text-gray-800">Educação &</span>
                        <span className="font-handwriting text-4xl text-blue-800">Skills</span>
                    </h2>
                    <p className="relative text-sm text-gray-700">
                        FullStack Developer | React.js | Node.js | TypeScript | JavaScript | Python
                    </p>
                    <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10" />
                </div>

                <div className="flex flex-col gap-8 md:flex-row">
                    <div className="basis-1/2">
                        <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-gray-700">
                            <HiAcademicCap className="h-8 w-8 text-blue-600" />
                            Educação
                        </h3>
                        {educations.map((education, index) => (
                            <div 
                                className="mb-2 rounded-lg bg-white p-4 text-sm font-semibold text-gray-900"
                                key={`education-${// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                                    index}`}
                            >
                                {education.name}
                            </div>
                        ))}
                    </div>

                    <div className="basis-1/2">
                        <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-gray-700">
                            <HiCodeBracketSquare className="h-8 w-8 text-blue-600" />
                            Skills
                        </h3>

                        <div className="grid grid-cols-1 gap-4 font-semibold md:grid-cols-2">
                            {skills.map((skill, index) => (
                                <div 
                                    className="flex flex-row items-center gap-2 md:flex-col md:items-start"
                                    key={`skill-${// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                                        index}`}
                                >
                                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white p-2">
                                        <img 
                                            src={skill.icon} 
                                            alt={skill.name} 
                                            className="h-10 w-10 rounded"
                                        />
                                    </div>
                                    <div className="w-full flex-grow">
                                        <h4 className="font-headline text-gray-900">
                                            {skill.name}
                                        </h4>
                                        <div className="h-2.5 w-full rounded-full bg-white">
                                            <div 
                                                className="h-2 5 rounded-full bg-blue-600"
                                                style={{ width: `${skill.level}%` }}
                                            /> 
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}