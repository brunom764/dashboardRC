import React, { useState } from 'react';
import Swal from 'sweetalert2'
import axios from 'axios';
import { FaArrowAltCircleRight } from 'react-icons/fa';


export default function NewsLetter(){

  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/emails', { email });
      console.log(response.data);
      Swal.fire({
        title: `Olá, seu email, ${email}, foi cadastrado com sucesso. Obrigado!`,
        icon: 'success',
        iconColor: '#469C57',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        },
        confirmButtonColor: '#469C57'
      });
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: `Erro ao cadastrar email ${email}`,
        icon: 'error',
        iconColor: '#ff5252',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        },
        confirmButtonColor: '#ff5252'
      });
    }
    setEmail('');
  };

      
    const handleInputChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <section className='bg-gray-100 text-gray flex flex-col items-center py-5 px-3 mx-4 my-8 rounded-lg lg:w-3/4 lg:mx-auto lg:opacity-90'>
            <h1 className='pb-3 uppercase text-green-600 font-bold'>Assine nossa Newsletter!</h1>
            <h4 className='pb-2 text-center'>Receba conteúdos  <b className='text-green-600 uppercase'> gratuitos </b> e <b className='text-green-600 uppercase'> exclusivos </b>  sobre tecnologia e róbotica, 
                além de notícias do RobôCIn.</h4>
                <form onSubmit={handleSubmit} className='flex items-center'>
                    <label>
                        <input type="email" value={email} onChange={handleInputChange} placeholder='EMAIL'
                        className="rounded-lg py-2 px-4 placeholder-gray-400 text-sm text-black" />
                    </label>
                    <button type="submit" className='p-2 text-green-600'><FaArrowAltCircleRight className='h-8 w-8'/></button>
                    </form>
        </section>
    )
}


