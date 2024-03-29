import {TrophyIcon, MagnifyingGlassIcon, CpuChipIcon}  from '@heroicons/react/24/outline'
import 'animate.css'

const fields = [{key:0, name:'Competições', desc:'Nós participamos de diversas competições, como a RoboCup, a IRONCup e a LARC.',
 icon: TrophyIcon}, 
{key:1, name:'Pesquisa', desc:'Professores e estudantes pesquisando dentro dos problemas da robótica.', icon:MagnifyingGlassIcon},
{key:2, name:'Desenvolvimento', desc:'Nós projetamos e desenvolvemos a eletrônica, a mecânica e a inteligência dos robôs.', 
icon:CpuChipIcon}]

const text = {title:'Nossa atuação', subtitle:'Nossa atuação é diversa de pesquisas cientifícas até competições de robótica'}

export default function Field(){

    return(
        <section className='px-5 pt-10 xl:min-h-screen'>
            <h1 className="title titleMain">{text.title}</h1>
            <h2 className='subtitle subtitleMain'>{text.subtitle}</h2>
            <div className="flex flex-row flex-wrap justify-around xl:mt-3">
            {fields.map((field) => (
                <div className="p-4 mx-2 my-4 md:shadow-lg" key={field.key}>
                    <field.icon className="h-40 w-40 text-green-600 mx-auto m-2 animate__animated animate__infinite animate__pulse" aria-hidden="true"/>
                    <h2
                    className="subtitle text-center m-5">
                    {field.name}
                    </h2>
                    <p className="text-sm max-w-xs p-2 text-justify text-center mx-auto text-gray-500">{field.desc}</p>
                </div>
          ))}
          </div>
        </section>
    )
}