import user from '../../assets/user.png'
const text = {
    title: 'Depoimentos dos nossos membros',
    subtitle: 'Nosso processo seletivo está aberto. Clique aqui e venha fazer parte do RobôCIn!'
}
export default function Team(){
    const members = [
        { key:0, name: 'João', img:user, pos:'Desenvolvimento', message:'Ser membro do RobôCIn tem me permitido aplicar todo o conhecimento adquirido na faculdade em projetos reais, o que tem sido um grande diferencial na minha formação e um grande passo para minha carreira.' },
        { key:1, name: 'Maria', img:user, pos:'Administração', message: 'O RobôCIn me proporcionou não apenas a chance de trabalhar em projetos empolgantes, mas também de conhecer pessoas de diversas áreas e culturas, o que tem sido uma experiência enriquecedora para mim.'},
        { key:2, name: 'Pedro', img:user, pos:'Comunicação', message: 'Fazer parte do RobôCIn tem sido uma experiência incrível, não apenas por ter a oportunidade de desenvolver habilidades, mas também por ter a chance de trabalhar com um grupo de pessoas incríveis e dedicadas.'},
    ];

    return (
        <section className='p-5 pt-10 pb-10  xl:h-screen bg-gray-100'>
        <h1 className="title titleMain">{text.title}</h1>
        <div className='flex flex-col md:flex-row justify-around xl:mt-3 p-2'>
            {members.map((member) => (
                <div key={member.key} className='bg-white px-2 py-5 flex flex-col items-center m-2 rounded-lg my-3 border shadow-lg hover:shadow-xl'>
                    <div className='flex items-center justify-around'>
                        <img src={member.img} alt={member.name} className='h-32 w-32 mr-2'/>
                        <div className='flex flex-col ml-2'>
                            <h3 className="text-center text-green-600 m-1.5 uppercase">{member.name}</h3>
                            <h6 className="text-center text-green-500 mb-1.5">{member.pos}</h6>
                        </div>
                    </div>
                    <p className="text-sm max-w-xs p-1.5 text-justify text-center text-gray-400">"{member.message} "</p>
                </div>
            ))}
        </div>
        <a href='https://robocin.com.br/seletiva.html'><h2 className="subtitle subtitleMain mt-5 border-green-600 my-2">{text.subtitle}</h2></a>
        </section>
    );
};