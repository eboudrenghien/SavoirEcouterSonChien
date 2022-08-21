import React from 'react'
import LaMeute from './photos/la-meute/laMeute1.jpg'
import CoursCollectif from './photos/cours-collectifs/coursCollectifs1.jpg'
import LesEleves from './photos/les-eleves/les-eleves1.jpg'
import Sport from './photos/sport/sport1.jpg'
import { Link } from 'react-router-dom'
function Albums() {
  return (
      <div className="albums">
        
        <div className="laMeute">
          <Link to="/albums-photos/laMeute">
          <h3 className='album-titre'>La meute</h3>
          <img className='album-img' src={LaMeute} alt="" />
          </Link>
        </div>
        
        <div className="les-eleves">
        <Link to="/albums-photos/LesEleves">
        <h3 className='album-titre'>Les élèves</h3>
          <img className='album-img' src={LesEleves} alt="" />
          </Link> 
        </div>
        <div className="CoursCollectifs">
          <Link to="/albums-photos/AlbumCollectifs">
          <h3 className='album-titre'>Cours Collectifs</h3>
          <img className='album-img' src={CoursCollectif} alt="" />
          </Link>
        </div>
        <div className="sport">
          <Link to="/albums-photos/Sport">
          <h3 className='album-titre'>Sport</h3>
          <img className='album-img' src={Sport} alt="" />
          </Link>
        </div>
      </div>
  )
}

export default Albums