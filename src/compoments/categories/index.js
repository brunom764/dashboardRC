import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import ssl from '../../assets/ssl.jpg'
import seguidorL from '../../assets/seguidorL.jpg'
import twoD from '../../assets/2d.jpg'
import vss from '../../assets/vss.jpg'
import { FaBaseballBall, FaBasketballBall, FaRobot, FaRoute } from "react-icons/fa"


const text = {title:'Categorias', 
subtitle:'Nos dividimos em sub-equipes que cooperam para administrar e desenvolver várias categorias diferentes.'}

const cats = [{key:0, title:'Small Size League', tour:'ROBOCUP | LARC', 
desc:'Uma competição que requer o desenvolvimento de várias áreas, como, o modelo mecânico, os sistemas eletrônicos e de comunicação e a inteligência artifical dos robôs. A partida ocorre entre 2 equipes de 6 robôs cada.', 
img:ssl, icon:FaRobot},
{key:1, title:'Seguidor de Linha', tour:'IRON CUP', 
desc:'É uma categoria que tem o objetivo de desenvolver robôs autônomos que percorrem um percurso no menor tempo possível. O robô possui sensor de reflectância para poder identificar o trajeto delimitado por uma fita.',
img:seguidorL, icon:FaRoute},
{key:2, title:'Simulação 2D', tour:'ROBOCUP | LARC | IRON CUP',
 desc:'Duas equipes de onze agentes autônomos jogam futebol em um estádio virtual 2D representado por um servidor central, o qual sabe tudo sobre o jogo, como, a posição atual de todos os jogadores e da bola.', 
 img:twoD, icon:FaBaseballBall},
{key:3, title:'Very Small Size Soccer', tour:'LARC | IRON CUP', 
desc:'É uma competição que requer desenvolvimento em visão computacional para detectar informações sobre a situação do jogo, IA para planejar os movimentos dos robôs, e robótica para criar agentes que se movem em campo.', 
img:vss, icon:FaBasketballBall}]


export default function Categories(){
    return (
        <section className='px-5 pt-1.5 pb-10 bg-gray-100 xl:h-screen'>
            <h1 className='title titleMain'>{text.title}</h1>
            <h2 className='subtitle subtitleMain'>{text.subtitle}</h2>
            <div className="flex flex-col lg:flex-row justify-around mx-2">
                {cats.map((cat) => (
                    <AwesomeSlider className='h-96 w-32 m-auto lg:mx-5 mb-7 mt-5'  key={cat.key}
                      organicArrows={false}> 
                    <div className="p-2 m-2 absolute flex flex-col justify-center items-center">
                        <cat.icon className="h-16 w-16 text-green-600 mx-auto m-2" aria-hidden="true"/>
                        <h2
                        className="text-center text-green-600 m-1.5 uppercase">
                        {cat.title}
                        </h2>
                        <h4 className='text-center text-green-100 p-2 pt-1'>{cat.tour}</h4>
                        <p className="text-sm max-w-xs pt-1.5 text-justify text-center text-gray-400">{cat.desc}</p>
                    </div>
                    <div data-src={cat.img} className='absolute'></div>
                    </AwesomeSlider>
                    ))}
            </div>
        </section>
    )
}