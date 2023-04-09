import robots from '../../assets/robots.jpg'

export default function About(){

const about = {title: 'Quem somos?', 
        subtitle: 'Somos um grupo de pesquisa em robótica do CIn - UFPE',
        titText: 'Nossa história',
        text: 'RobôCIn é um grupo de pesquisa e desenvolvimento do Centro de Informática da UFPE, que utiliza a robótica para desenvolver soluções. O grupo foi criado em 2015 por 12 estudantes de Engenharia da Computação com ajuda de dois professores. Edna Barros e Hansenclever Bassani. Hoje contamos com 47 estudantes de graduação e pós-graduação e 4 professores estão orientado o time para desenvolver soluções utilizando Inteligência Artificial, Visão Computacional, Mecânica e Eletrônica aplicados na robótica.'
}

    return(
        <section className='py-4 bg-gray-100 xl:h-screen'>
            <h1 className='title titleMain'>{about.title}</h1>
            <h2 className='subtitle subtitleMain'>{about.subtitle}</h2>
            <div className='m-10 flex justify-around items-center flex-row flex-wrap p-2'>
                <img src={robots} className='h-96 w-auto lg:h-80  saturate-200 rounded-lg mb-3 shadow-xl xl:transform xl:scale-80 xl:-rotate-6 hover:-rotate-0' alt='robots'/>
                <div className='flex flex-col mx-2'>
                    <h4 className='subtitle py-4 text-center uppercase'>{about.titText}</h4>
                    <p className='text-lg text-justify text-gray-500 max-w-lg pt-1'>{about.text}</p>
                </div>
            </div>
        </section>

    )
}