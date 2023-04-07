import avatar1 from '../../assets/avatar/avatar1.png'
import avatar2 from '../../assets/avatar/avatar2.png'
import avatar3 from '../../assets/avatar/avatar3.png'

const text = {
    title: 'Depoimentos dos nossos membros',
    subtitle: 'Nosso processo seletivo está aberto. Clique aqui e venha fazer parte do RobôCIn!'
}
export default function Team(){
    const members = [
        { key:0, name: 'Ana Júlia', img:avatar1, pos:'Desenvolvedora VSS', title:'aplicar o conhecimento adquirido na faculdade em projetos reais',
         message:'Ser membro do RobôCIn tem me permitido aplicar todo o conhecimento adquirido na faculdade em projetos reais, o que tem sido um grande diferencial na minha formação e um grande passo para minha carreira.' },
        { key:1, name: 'Geydson Renan', img:avatar2, pos:'Simulação 2D', title:'conhecer pessoas de diversas áreas e culturas',
          message: 'O RobôCIn me proporcionou não apenas a chance de trabalhar em projetos empolgantes, mas também de conhecer pessoas de diversas áreas e culturas, o que tem sido uma experiência enriquecedora para mim.'},
        { key:2, name: 'Maria Beatriz', img:avatar3, pos:'Comunicação', title:'oportunidade de desenvolver habilidades',
          message: 'Fazer parte do RobôCIn tem sido uma experiência incrível, não apenas por ter a oportunidade de desenvolver habilidades, mas também por ter a chance de trabalhar com um grupo de pessoas incríveis e dedicadas.'},
    ];

    return (
        <section className='p-5 pt-10 pb-10  xl:h-screen bg-gray-100'>
        <h1 className="title titleMain">{text.title}</h1>
        <div className='flex flex-col md:flex-row justify-around xl:mt-3 p-2'>
            {members.map((member) => (
                <figure key={member.key} className="flex flex-col items-center justify-center p-6 m-2 text-center bg-white border-b border-gray-200 md:border-r">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 uppercase">{member.title}</h3>
                        <p className="my-4">"{member.message}"</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center space-x-3">
                        <img className="rounded-full w-9 h-9" src={member.img} alt={member.name}/>
                        <div className="space-y-0.5 font-medium text-left">
                            <div>{member.name}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">{member.pos}</div>
                        </div>
                    </figcaption>    
                </figure>
            ))}
        </div>
        <a href='https://robocin.com.br/seletiva.html'><h2 className="subtitle subtitleMain mt-5 border-green-600 my-2">{text.subtitle}</h2></a>
        </section>
    );
};