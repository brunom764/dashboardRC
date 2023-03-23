import './about.css'
import robots from '../../assets/robots.jpg'

export default function About(){

const about = {title: 'Quem somos?', 
        subtitle: 'Somos um grupo de pesquisa em robótica do Centro de Informática - UFPE',
        titText: 'Centro de informática - UFPE',
        text: 'RobôCIn é um grupo de pesquisa e desenvolvimento do Centro de Informática da UFPE, que utiliza a robótica para desenvolver soluções. O grupo foi criado em 2015 por 12 estudantes de Engenharia da Computação com ajuda de dois professores. Edna Barros e Hansenclever Bassani. Hoje contamos com 47 estudantes de graduação e pós-graduação e 4 professores estão orientado o time para desenvolver soluções utilizando Inteligência Artificial, Visão Computacional, Mecânica e Eletrônica aplicados na robótica.'
}

    return(
        <section className='pt-8 pb-3 bg-gray-100'>
            <h1 className='title text-center pb-5 text-green-700'>{about.title}</h1>
            <h2 className='subtitle text-center text-gray-600 p-2'>{about.subtitle}</h2>
            <div className='m-10 flex justify-around flex-col md:flex-row p-3'>
                <img src={robots} className='max-h-96 w-auto rounded-lg mb-3' alt='robots'/>
                <div className='flex flex-col'>
                    <h4 className='subtitle py-5'>{about.titText}</h4>
                    <p className='text-lg text-justify text-gray-500 max-w-lg pt-1'>{about.text}</p>
                </div>
            </div>
        </section>

    )
}