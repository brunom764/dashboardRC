import Typical from 'react-typical';
import 'animate.css';
import './banner.css'


export default function Banner() {
    return(
            <section className='banner bg-cover flex justify-center'>
                    <div className='flex flex-col items-center justify-around'>
                    <Typical 
                    steps={['Campeão mundial em SSL', 20000,'Campeão Latino-Americano em SSL', 20000,
                    'Campeão Latino-Americano em simulação 2D',20000,
                    'Campeão Latino-Americano em VSS', 20000, 'Campeão Nacional em VSS', 20000]}
                    loop={Infinity}
                    wrapper="h2"
                    className='title text-white opacity-80 text-center uppercase tracking-20'
                />
              </div>
            </section>
    )
    }