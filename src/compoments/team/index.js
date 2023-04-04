import user from '../../assets/user.png'
const text = {
    title: 'Depoimentos dos nossos membros',
    subtitle: 'Nosso processo seletivo está aberto, venha fazer parte do RoboCIn'
}
export default function Team(){
    const members = [
        { key:0, name: 'João', img:user, message: 'Fazer parte do RoboCIn tem sido uma experiência incrível, não apenas por ter a oportunidade de desenvolver habilidades, mas também por ter a chance de trabalhar com um grupo de pessoas incríveis e dedicadas.' },
        { key:1, name: 'Maria', img:user, message: 'O RoboCIn me proporcionou não apenas a chance de trabalhar em projetos empolgantes, mas também de conhecer pessoas de diversas áreas e culturas, o que tem sido uma experiência enriquecedora para mim.'},
        { key:2, name: 'Pedro', img:user, message: 'Ser membro do RoboCIn tem me permitido aplicar todo o conhecimento adquirido na faculdade em projetos reais, o que tem sido um grande diferencial na minha formação e um grande passo para minha carreira.'},
    ];


    return (
        <section className='p-5 pt-10 pb-10  md:h-screen'>
        <h1 className="title titleMain">{text.title}</h1>
        <div className='flex flex-col md:flex-row justify-around xl:mt-3'>
            {members.map((member) => (
                <div key={member.key} className='p-2 flex flex-col items-center'>
                    <img src={member.img} alt={member.name} className='h-32 w-32'/>
                    <h3>{member.name}</h3>
                    <p>{member.message}</p>
                </div>
            ))}
        </div>
        <h2 className="subtitle subtitleMain">{text.subtitle}</h2>
        </section>
    );
};