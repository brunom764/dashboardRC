import './about.css'
import robots from '../../assets/robots.jpg'

export default function About(){

const about = {title: 'Quem somos?', 
        subtitle: 'Somos um grupo de pesquisa em robótica do Centro de Informática - UFPE',
    text: 'RobôCIn é um grupo de pesquisa e desenvolvimento do Centro de Informática da UFPE, que utiliza a robótica para desenvolver soluções. O grupo foi criado em 2015 por 12 estudantes de Engenharia da Computação com ajuda de dois professores. Edna Barros e Hansenclever Bassani. Hoje contamos com 47 estudantes de graduação e pós-graduação e 4 professores estão orientado o time para desenvolver soluções utilizando Inteligência Artificial, Visão Computacional, Mecânica e Eletrônica aplicados na robótica.'
}

    return(
        <section className='pt-10 about b-gray-700'>
            <h1 className='title text-center mb-10 text-green-700'>{about.title}</h1>
            <h2 className='subtitle text-center text-gray-600 mt-8 pb-10'>{about.subtitle}</h2>
            <div className='m-10 flex items-center justify-around flex-col md:flex-row p-5'>
                <img src={robots} className='max-h-108 w-auto mb-4 rounded-lg' alt='robots'/>
                <p className='text-xl text-justify text-gray-500 max-w-lg mb-4'>{about.text}</p>
            </div>
        </section>

    )
}