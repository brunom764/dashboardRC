import React from 'react';
import ReactPlayer from 'react-player';

export default function TV() {
  const videoLinks = ['https://youtu.be/b9h39RmyLJk','https://youtu.be/56wVokKmikA', 'https://youtu.be/herRUhHtrc4'];

  const text = {title:'TV RobôCIn'}

  return (
    <section className='p-5 pt-10 pb-10  md:h-screen'>
            <h1 className="title text-center pt-10 pb-5 mb-5 text-green-700">{text.title}</h1>
            <div className="flex flex-col md:flex-row justify-around p-2">
                {videoLinks.map((link) => (
                    <div key={link} className='mb-5 mt-5'>
                    <ReactPlayer light={<img src='https://example.com/thumbnail.png' alt='Thumbnail' />} 
                     url={link} width='20rem' height='45vh' controls={true} />
                    </div>
                ))}
                </div>
    </section>
  );
};


