import { FaFacebook, FaInstagram, FaYoutube, FaGithub, FaLinkedin} from "react-icons/fa"
import logoW from "../../assets/logoW.png"

const map = 'https://www.google.com/maps/dir//Centro+Integrado+de+Tecnologia+da+Informa%C3%A7%C3%A3o+(CITi+%2F+UFPE)/@-8.050605,-34.96446,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x7ab1be2128207d9:0xbfdac155456db9af!2m2!1d-34.9513319!2d-8.0553088?hl=pt-BR'

const social = [{icon:FaFacebook , href:'https://pt-br.facebook.com/robocin/'},
    {icon:FaInstagram, href:'https://www.instagram.com/robocinufpe/'},
    {icon:FaYoutube, href:'https://www.youtube.com/channel/UCi21SoE4Q4y4_i27VOCUdTw'},
    {icon:FaLinkedin , href:'https://www.linkedin.com/company/robocin/?trk=ppro_cprof&originalSubdomain=br'},
    {icon:FaGithub, href:'https://github.com/robocin'}]

export default function Footer(){
    return(
        <footer className="bg-green-700 text-white p-5 flex flex-col md:flex-row justify-around">
            <div>
            <h3 className="text-lg p-5 pb-2">Fale conosco!</h3>
            <p className="p-5">robocin@cin.upfe.br</p>
            <div className="flex">
            {social.map((social) => (
                <a href={social.href} className='pl-5 p-2'><social.icon className='h-8 w-8 hover:opacity-80'/></a>
            ))}
            </div>
            </div>
            <div className="flex items-center p-5">
                <img src={logoW} alt='logo' className="h-16 w-auto  hover:opacity-80"/>
            </div>
            <div className="p-5">
                <h3 className="text-lg pb-2">Onde nos encontrar</h3>
                <p>Av. Jornalista Aníbal Fernandes, s/n<br></br> -
                    Cidade Universitária, Recife- PE,<br></br>
                    50740-560</p>
                <a href={map} className="text-gray-300">Ver no Mapa</a>
            </div>
        </footer>
    )
}