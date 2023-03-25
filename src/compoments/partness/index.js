import cin from '../../assets/partness/cin.png'
import cesar from '../../assets/partness/cesar.png'
import hsbs from '../../assets/partness/hsbs.png'
import microsoft from '../../assets/partness/microsoft.png'
import moura from '../../assets/partness/moura.png'
import veroli from '../../assets/partness/veroli.png'


const parts = [{key:0, name:"CIn" ,img:cin },
                {key:1, name:"Cesar School" ,img:cesar },
                {key:2, name:"HSBS" ,img:hsbs },
                {key:3, name:"Microsoft" ,img:microsoft },
                {key:4, name:"Moura" ,img:moura },
                {key:5, name:"Veroli" ,img:veroli },]


export default function Partness(){
    return(
        <section className="py-5 px-2 bg-green-700 border-b border-white">
            <h1 className='text-white font-bold text-center pb-3 uppercase'>Nossos patrocinadores</h1>
            <div className="flex justify-center flex-col md:flex-row flex-wrap px-2">
            {parts.map((part) => (
                <img src={part.img} alt={part.name} 
                className='md:h-14 md:max-w-14 h-16 mx-auto py-2 opacity-80 hover:opacity-100'/>
            ))}
            </div>
        </section>
    )
}