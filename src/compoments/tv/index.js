import React from 'react';
import ReactPlayer from 'react-player';
import doc1 from '../../assets/doc1.png'
import doc2 from '../../assets/doc2.png'


export default function TV() {
  const videos = [{link:'https://youtu.be/b9h39RmyLJk', title:'Ep. 1 | Mini Doc. RobôCIn', img:doc1},
  {link:'https://youtu.be/56wVokKmikA', title:'Ep. 2 | Mini Doc. RobôCIn', img:doc2},];

  const text = {title:'Tv robôCIn', desc:'Nos acompanhe pelo YouTube e conheça mais do nosso projeto'}

  return (
    <section className='p-5 pt-10 pb-10'>
            <h1 className="title text-center pt-5 pb-1 text-green-700">{text.title}</h1>
            <h4 className='text-center text-gray-600 p-4'>{text.desc}</h4>
            <div className="flex flex-col md:flex-row justify-around p-2">
                {videos.map((video) => (
                    <div key={video.link} className='mb-5 mt-5 md:w-1/3'>
                    <ReactPlayer
                     url={video.link} width='100%' height='40vh' controls={true} />
                    <h2 className='subtitle text-center pt-2'>{video.title}</h2>
                    </div>
                ))}
                </div>
    </section>
  );
};


