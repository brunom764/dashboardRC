import React, { useState } from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';

export default function NewsLetter(){

    const [email, setEmail] = useState('');
      
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Email submitted: ${email}`);
    };
      
    const handleInputChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <section className='bg-black text-white flex flex-col items-center shadow-green-600 py-5 px-2'>
            <h1 className='pb-3 uppercase text-green-600 font-bold'>Assine nossa Newsletter!</h1>
            <h4 className='pb-2'>Receba conteúdos  <b className='text-green-600 uppercase'> gratuitos </b> e <b className='text-green-600 uppercase'> exclusivos </b>  sobre tecnologia e róbotica, 
                além de notícias do RobôCIn.</h4>
                <form onSubmit={handleSubmit} className='flex items-center'>
                    <label>
                        <input type="email" value={email} onChange={handleInputChange} placeholder='EMAIL'
                        class="border border-gray-400 rounded-lg py-2 px-4 placeholder-gray-400 text-sm" />
                    </label>
                    <button type="submit" className='p-2 text-green-600'><FaArrowAltCircleRight className='h-8 w-8'/></button>
                    </form>
        </section>
    )
}


