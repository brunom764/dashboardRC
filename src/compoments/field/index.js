import {TrophyIcon, MagnifyingGlassIcon, CpuChipIcon}  from '@heroicons/react/24/outline'
import 'animate.css'

const fields = [{name:'Competições', desc:'Nós participamos de diversas competições, como a RoboCup, a IRONCup e a LARC.',
 icon: TrophyIcon}, 
{name:'Pesquisa', desc:'Professores e estudantes pesquisando dentro dos problemas da robótica.', icon:MagnifyingGlassIcon},
{name:'Desenvolvimento', desc:'Nós projetamos e desenvolvemos a eletrônica, a mecânica e a inteligência dos robôs.', 
icon:CpuChipIcon}]

export default function Field(){

    return(
        <section className='p-5 pt-10 pb-10'>
            <h1 className="title text-center pb-5 m-5 text-green-700">Nossa atuação</h1>
            <div className="flex flex-col md:flex-row justify-around">
            {fields.map((field) => (
                <div className="p-2 m-2">
                    <field.icon className="h-32 w-32 text-green-600 mx-auto m-2 animate__animated animate__infinite animate__pulse" aria-hidden="true"/>
                    <h2
                    className="subtitle text-center m-2">
                    {field.name}
                    </h2>
                    <p className="text-sm max-w-xs p-2 text-justify text-center text-gray-500">{field.desc}</p>
                </div>
          ))}
          </div>
        </section>
    )
}