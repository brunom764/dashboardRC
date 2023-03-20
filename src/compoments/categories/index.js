import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import ssl from '../../assets/ssl.jpg'
import seguidorL from '../../assets/seguidorL.jpg'
import twoD from '../../assets/2d.jpg'
import vss from '../../assets/vss.jpg'
import { FaBaseballBall, FaBasketballBall, FaRobot, FaRoute } from "react-icons/fa"


const text = {title:'Categories', 
subtitle:'Nos dividimos em sub-equipes que cooperam para administrar e desenvolver várias categorias diferentes.'}

const cats = [{title:'Small Size League', tour:'ROBOCUP | LARC', 
desc:'Uma competição que requer o desenvolvimento de várias áreas. Nós desenvolvemos o modelo mecânico, os sistemas eletrônicos e de comunicação e a inteligência artifical dos robôs. Um jogo de SSL ocorre entre duas equipes de seis robôs cada.', 
img:ssl, icon:FaRobot},
{title:'Seguidor de Linha', tour:'IRON CUP', 
desc:'É uma categoria que tem o objetivo de desenvolver robôs autônomos que percorrem um percurso no menor tempo possível. O robô possui sensor de reflectância para poder identificar o trajeto delimitado por uma fita.',
img:seguidorL, icon:FaRoute},
{title:'Simulação 2D', tour:'ROBOCUP | LARC | IRON CUP',
 desc:'Duas equipes de onze agentes autônomos jogam futebol em um estádio de futebol virtual bidimensional representado por um servidor central, chamado SoccerServer. Este servidor sabe tudo sobre o jogo, ou seja, a posição atual de todos os jogadores e a bola, a física e assim por diante. O jogo conta ainda com a comunicação entre o servidor e cada agente.', 
 img:twoD, icon:FaBaseballBall},
{title:'Very Small Size Soccer', tour:'LARC | IRON CUP', 
desc:'É uma competição que requer desenvolvimento nas principais áreas do RobôCIn, visão computacional para detectar informações sobre a situação do jogo; inteligência artificial para planejar todos os movimentos dos robôs, para que a equipe possa marcar gols e se defender dos adversários; e robótica que envolve eletrônica e mecânica para criar agentes que precisam se mover perfeitamente em campo.', 
img:vss, icon:FaBasketballBall}]

const AutoplaySlider = withAutoplay(AwesomeSlider)

export default function Categories(){
    return (
        <section className='p-5 pt-10 pb-10 bg-gray-100  md:h-screen'>
            <h1 className='title text-center pb-5 text-green-700'>{text.title}</h1>
            <h2 className='subtitle text-center text-gray-600 p-2'>{text.subtitle}</h2>
            <div className="flex flex-col md:flex-row justify-around">
                {cats.map((cat) => (
                    <AutoplaySlider className='h-96 w-5/6 m-auto' play={true}
                     cancelOnInteraction={false} organicArrows={false}
                     interval={10000}>
                    <div className="p-2 m-2">
                        <cat.icon className="h-20 w-20 text-green-600 mx-auto m-2 animate__animated animate__infinite animate__pulse" aria-hidden="true"/>
                        <h2
                        className="subtitle text-center m-5">
                        {cat.title}
                        </h2>
                        <h4 className='text-center text-gray-600 p-2 pt-1'>{cat.tour}</h4>
                        <p className="text-sm max-w-xs p-2 text-justify text-center text-gray-500">{cat.desc}</p>
                    </div>
                    <div data-src={cat.img}>1</div>
                    </AutoplaySlider>
                    ))}
            </div>
        </section>
    )
}