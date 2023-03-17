import Typical from 'react-typical';
import 'animate.css';
import './banner.css'


export default function Banner() {
    return(
            <section className='banner bg-cover flex justify-center'>
                    <div className='flex flex-col items-center justify-around'>
                    <h1 className="texto animate__animated animate__bounce title text-center text-white opacity-80">
                        Bem-vindo ao RoboCin!
                    </h1>
                    <Typical 
                    steps={['Campeão mundial em SSL', 20000,'Campeão Latino-Americano em SSL', 20000,
                    'Campeão Latino-Americano em simulação 2D',20000,
                    'Campeão Latino-Americano e nacional em VSS', 20000]}
                    loop={Infinity}
                    wrapper="h2"
                    className='title text-white opacity-70 text-center'
                />
              </div>
            </section>
    )
    }