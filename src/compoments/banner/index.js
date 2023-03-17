import Typical from 'react-typical';
import 'animate.css';
import './banner.css'


export default function Banner() {
    return(
            <section className='banner bg-cover flex justify-center'>
                    <div className='flex flex-col items-center justify-around'>
                    <Typical 
                    steps={['Campeão mundial em SSL', 10000,
                    'Campeão Latino-Americano em SSL', 10000,
                    'Campeão Nacional em VSS', 10000,
                    'Campeão Latino-Americano em simulação 2D',10000,
                    'Melhor campanha de um time BR em 2021',1000,
                    'Campeão Latino-Americano em VSS', 10000]}
                    loop={Infinity}
                    wrapper="h2"
                    className='title text-white opacity-80 text-center uppercase tracking-widest m-2'
                />
              </div>
            </section>
    )
    }