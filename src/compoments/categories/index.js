import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import ssl from '../../assets/ssl.jpg'
import seguidorL from '../../assets/seguidorL.jpg'
import twoD from '../../assets/2d.jpg'
import vss from '../../assets/vss.jpg'
import { FaBaseballBall, FaBasketballBall, FaRobot, FaRoute } from "react-icons/fa"


const text = {title:'Categorias', 
subtitle:'Nos dividimos em sub-equipes que cooperam para administrar e desenvolver várias categorias diferentes.'}

const cats = [{title:'Small Size League', tour:'ROBOCUP | LARC', 
desc:'Uma competição que requer o desenvolvimento de várias áreas. Nós desenvolvemos o modelo mecânico, os sistemas eletrônicos e de comunicação e a inteligência artifical dos robôs. Um jogo de SSL ocorre entre duas equipes de seis robôs cada.', 
img:ssl, icon:FaRobot},
{title:'Seguidor de Linha', tour:'IRON CUP', 
desc:'É uma categoria que tem o objetivo de desenvolver robôs autônomos que percorrem um percurso no menor tempo possível. O robô possui sensor de reflectância para poder identificar o trajeto delimitado por uma fita.',
img:seguidorL, icon:FaRoute},
{title:'Simulação 2D', tour:'ROBOCUP | LARC | IRON CUP',
 desc:'Duas equipes de onze agentes autônomos jogam futebol em um estádio virtual 2D representado por um servidor central, chamado SoccerServer. Este servidor sabe tudo sobre o jogo, ou seja, a posição atual de todos os jogadores e a bola, a física e assim por diante.', 
 img:twoD, icon:FaBaseballBall},
{title:'Very Small Size Soccer', tour:'LARC | IRON CUP', 
desc:'É uma competição que requer desenvolvimento em visão computacional para detectar informações sobre a situação do jogo; IA para planejar todos os movimentos dos robôs; e robótica para criar agentes que precisam se mover perfeitamente em campo.', 
img:vss, icon:FaBasketballBall}]


export default function Categories(){
    return (
        <section className='p-5 pt-5 pb-10 bg-gray-100 md:h-screen'>
            <h1 className='title text-center pb-2 text-green-700'>{text.title}</h1>
            <h2 className='subtitle text-center text-gray-600 p-2'>{text.subtitle}</h2>
            <div className="flex flex-col md:flex-row justify-around">
                {cats.map((cat) => (
                    <AwesomeSlider className='h-96 w-64 m-auto mb-7 mt-5' 
                      organicArrows={false}> 
                    <div className="p-2 m-2 absolute b">
                        <cat.icon className="h-16 w-16 text-green-500 mx-auto m-2" aria-hidden="true"/>
                        <h2
                        className="text-center text-green-500 m-2 uppercase">
                        {cat.title}
                        </h2>
                        <h4 className='text-center text-green-100 p-2 pt-1'>{cat.tour}</h4>
                        <p className="text-sm max-w-xs p-2 text-justify text-center text-gray-400">{cat.desc}</p>
                    </div>
                    <div data-src={cat.img}>1</div>
                    </AwesomeSlider>
                    ))}
            </div>
        </section>
    )
}