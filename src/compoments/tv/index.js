import React from 'react';
import ReactPlayer from 'react-player';
import doc1 from '../../assets/doc1.png'
import doc2 from '../../assets/doc2.png'
import final from '../../assets/finalTV.png'

export default function TV() {
  const videos = [{link:'https://youtu.be/b9h39RmyLJk', title:'Ep. 1 | Mini Doc. RobôCIn', img:doc1},
  {link:'https://youtu.be/56wVokKmikA', title:'Ep. 2 | Mini Doc. RobôCIn', img:doc2},
  {link:'https://youtu.be/6EOWuBZ_lPw', title:'Final LARC 2022 SSL - RobôCIn 3 x 0', img:final}];

  const text = {title:'TV RobôCIn'}

  return (
    <section className='p-5 pt-10 pb-10  md:h-screen'>
            <h1 className="title text-center pt-10 pb-5 mb-5 text-green-700">{text.title}</h1>
            <div className="flex flex-col md:flex-row justify-around p-2">
                {videos.map((video) => (
                    <div key={video.link} className='m-2 mb-5 mt-5'>
                    <ReactPlayer light={<img src={video.img} alt='Thumbnail' />} 
                     url={video.link} width='20rem' height='45vh' controls={true} />
                    <h2 className='subtitle'>{video.title}</h2>
                    </div>
                ))}
                </div>
    </section>
  );
};


