import React from 'react'
import Portrait1 from '../../styles/assets/portrait/portrait1.jpg'
function CoursEssentiels() {
  return (
    <div className='cours-essentiels'>
      <div className="description-coursEssentiels">
      <div className="img-page">
          <img src={Portrait1} alt="" style={{width:'300px', borderRadius:'20px'}}/>
        </div>
        <h1>COURS ESSENTIELS INDIVIDUELS</h1>
      <h2>Résultats garantis en 1 mois - TEST D'ÉVALUATION OFFERT - Suivi à vie</h2>
      <h3>Chien de toutes races à partir de 2 mois</h3>
     
        <p>Vous souhaitez éduquer votre chiot ? Ou vous rencontrez des problèmes avec votre compagnon ? Agressivité, peur, hyperactivité, destruction, tire en laisse ou saute sur les invités … Venez me rencontrer lors d’un test d’évaluation offert, je vous prouverai en quelques minutes que votre chien peut changer de comportement.</p>
        <p>En faisant appel à l’intelligence de votre chien et au respect mutuel, les résultats obtenus sont immédiats et durables. Des exercices utiles, pour construire une relation harmonieuse entre votre chien et vous.</p>
        <p style={{fontWeight:"600", textAlign:"center", marginTop:"30px"}}>Tarif : 350 €</p>
    </div> 
      <div className="rappel">
        <ul>
        <li>Programme complet pour chien de famille</li>
        <li>4 séances d'une heure</li>
        <li>Travail personnel entre chaque séance</li>
        <li>Résultats rapides et durables</li>
        <li>Test d’évaluation offert</li>
        </ul>
      </div>
    </div>
  )
}

export default CoursEssentiels