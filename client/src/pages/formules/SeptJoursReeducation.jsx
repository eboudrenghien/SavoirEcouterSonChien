import React from 'react'
import Portrait3 from '../../styles/assets/portrait/portrait3.jpg'
function SeptJoursReeducation() {
  return (
    <div className='reeducation'>
      <div className="description-reeducation">
      <div className="img-page">
          <img src={Portrait3} alt="" style={{width:'300px', borderRadius:'20px'}}/>
        </div>
        <h1>7 JOURS POUR RÉÉDUQUER VOTRE CHIEN - Suivi à vie</h1>
        <p>Marine Santamaria vous propose au centre canin Savoir Ecouter Son Chien, une pension éducation sur 7 jours qui vous garantie efficacité et rapidité. Une solution simple, adaptée à vos impératifs, sur 6 jours de garde et d’éducation/rééducation tous les jours, et 1 journée qui vous est destinée pour la mise en place d’un programme complet et l’accompagnement au retour à la maison dans la continuité du travail effectué. </p>
        <p>Promenade éducative tous les jours. </p>
        <p style={{fontWeight:"600", textAlign:"center", marginTop:"30px"}}>Pour les tarifs et modalités d’accueil, contactez-moi. </p>
      </div>
      <div className="rappel">
        <ul>
        <li>Travail en immersion dans la meute</li>
        <li>Éducation et promenade quotidienne</li>
        <li>6 jours de travail intense</li>
        <li >Une journée mise en pratique avec le maîtres</li>
        </ul>
      </div>
    </div>
  )
}

export default SeptJoursReeducation