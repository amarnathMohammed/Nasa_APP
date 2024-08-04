import React from 'react';

export default function Main(props) {
  const { data } = props;

  return (
    <div className='imgContainer'>
      {data.media_type === 'image' ? (
        <img src={data.url} alt={data.title || 'bg-img'} className='bgImage' />
      ) : data.media_type === 'video' ? (
        <iframe
          src={data.url}
          title={data.title || 'bg-video'}
          className='bgVideo'
          frameBorder='0'
          allowFullScreen
        ></iframe>
      ) : (
        <p>Unsupported media type</p>
      )}
    </div>
  );
}

