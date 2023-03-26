import { FaFacebook, FaInstagram, FaYoutube, FaGithub, FaLinkedin} from "react-icons/fa"
import logoW from "../../assets/logoW.png"

const map = 'https://www.google.com/maps/dir//Centro+Integrado+de+Tecnologia+da+Informa%C3%A7%C3%A3o+(CITi+%2F+UFPE)/@-8.050605,-34.96446,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x7ab1be2128207d9:0xbfdac155456db9af!2m2!1d-34.9513319!2d-8.0553088?hl=pt-BR'

const socials = [{key:0, icon:FaFacebook , href:'https://pt-br.facebook.com/robocin/'},
    {key:1, icon:FaInstagram, href:'https://www.instagram.com/robocinufpe/'},
    {key:2, icon:FaYoutube, href:'https://www.youtube.com/channel/UCi21SoE4Q4y4_i27VOCUdTw'},
    {key:3, icon:FaLinkedin , href:'https://www.linkedin.com/company/robocin/?trk=ppro_cprof&originalSubdomain=br'},
    {key:4, icon:FaGithub, href:'https://github.com/robocin'}]

const text = {title:'Fale conosco!',
            mail: 'robocin@cin.upfe.br',
            adTitle:'Onde nos encontrar',
            adress: 'Av. Jornalista Aníbal Fernandes, s/n - ', 
            adCity: 'Cidade Universitária, Recife- PE,',
            adCEP:'50740-560',
            adLink: 'Ver no Mapa'}

export default function Footer(){
    return(
        <footer className="bg-green-700 text-white p-5 flex flex-col md:flex-row justify-around">
            <div>
            <h3 className="text-lg p-5 pb-2">{text.title}</h3>
            <p className="p-5 pt-2">{text.mail}</p>
            <div className="flex">
            {socials.map((social) => (
                <div key={social.key}>
                <a href={social.href} className='pl-5 p-2'><social.icon alt={social.href} className='h-8 w-8 hover:opacity-80'/></a>
                </div>
            ))}
            </div>
            </div>
            <div className="flex items-center p-5">
                <img src={logoW} alt='logo' className="h-16 w-auto  hover:opacity-80"/>
            </div>
            <div className="p-5">
                <h3 className="text-lg pb-2">{text.adTitle}</h3>
                <p>{text.adress}<br></br>
                {text.adCity}<br></br>
                {text.adCEP}</p>
                <a href={map} className="text-gray-300">{text.adLink}</a>
            </div>
        </footer>
    )
}