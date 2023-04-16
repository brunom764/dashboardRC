import React from 'react';
import ReactPlayer from 'react-player';


export default function TV() {
  const videos = [{link:'https://youtu.be/b9h39RmyLJk', title:'Ep. 1 | Mini Doc. RobôCIn'},
  {link:'https://youtu.be/56wVokKmikA', title:'Ep. 2 | Mini Doc. RobôCIn'}];

  const text = {title:'Tv robôCIn', subtitle:'Nos acompanhe pelo YouTube e conheça mais do nosso projeto'}

  return (
    <section className='px-5 py-10 xl:min-h-screen'>
            <h1 className="title titleMain">{text.title}</h1>
            <h2 className='subtitle subtitleMain'>{text.subtitle}</h2>
            <div className="flex flex-col lg:flex-row justify-around px-2 py-4">
                {videos.map((video) => (
                    <div key={video.link} className='mb-5 mt-5 pb-2 lg:w-1/3 shadow-xl'>
                    <ReactPlayer
                     url={video.link} width='100%' height='40vh' controls={true} />
                    <h2 className='subtitle text-center pt-2'>{video.title}</h2>
                    </div>
                ))}
                </div>
    </section>
  );
};


