import React from 'react'
import { useState, useEffect } from 'react'
import {FaHeart, FaDownload, FaShare} from 'react-icons/fa';

const Photos = () => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([])
  useEffect(()=>{
    const fetchImages = async()=>{
      setLoading(true);
      const ClientID = '?client_id=-llkpUFREOFUi-JZN6kSmDQwu0VcR4FTpbpAEl1QUOk';
      const mainUrl = 'https://api.unsplash.com/photos/';
      try{
        const response = await fetch(`${mainUrl}${ClientID}`)
        const data = await response.json()
        setPhotos(data)
        setLoading(false)      
      }
      catch(error){
        setLoading(false)
        console.log(error)
      }
    }
     fetchImages(); 
    }, []);


  return (
    <main>
      <section className='photos'>
        {loading ? (<p> Loading... </p>) : 
        photos.map((photo) => (
          <article key={photo.id} className='photo'>
            <img src={photo.urls.regular} alt={photo.alt_description} />
            <div className='photo-info'>
              <div className='photo-header'>
                <h4>{photo.user.name}</h4>
                <button className='favourite-btn'>
                  <FaHeart />
                </button>
              </div>
              <div className='photo-actions'>
                <p className='photo-likes'>
                  <FaHeart className='heart-icon'/> {photo.likes}
                </p>
                <button className='share-btn'>
                  <FaShare/>
                </button>
                <button className='download-btn'>
                  <FaDownload/>
                </button>
              </div>
              <a className='' href={photo.user.portfolio_url}>
                <img src={photo.user.profile_image.medium} className='user-img' alt={photo.user.name}/>
              </a>

              
            </div>

          </article>
        ))
        })
      </section>
    </main>
  );
};

export default Photos;
