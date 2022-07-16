import React from 'react'
import Portrait2 from '../../styles/assets/portrait/portrait2.jpg'
function CoursCollectifs() {
  return (
    <div className='cours-collectifs'>
      
       <div className="description-coursCollectifs">
        <div className="img-page">
          <img src={Portrait2} alt="" style={{width:'300px', borderRadius:'20px'}}/>
        </div>
        
        <h1>RENCONTRES CANINES / COURS COLLECTIFS</h1>
        <p>Accès réservé aux personnes ayant suivi un des programmes proposés</p>
        <p>Ces cours permettent d’approfondir la sociabilisation de votre chien et de réviser les exercices vu en cours individuel.</p>
        <p>Vous apprendrez à vos chiens à travailler ensemble.</p>
        <p>Les cours se tiennent sur mon terrain ou en ville, afin de travailler vos chiens dans toutes les situations possibles.</p>
        <p style={{fontWeight:"600", textAlign:"center", marginTop:"30px"}}>Tarif : GRATUIT</p>
      </div>
    </div>
  )
}

export default CoursCollectifs