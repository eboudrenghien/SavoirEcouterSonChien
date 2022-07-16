import React from 'react'
import Portait5 from '../../styles/assets/portrait/portrait5.jpg'
function Attestation() {
  return (
    <div className='attestation'>
      <div className="description-attestation">
      <div className="img-page">
          <img src={Portait5} alt="" style={{width:'300px', borderRadius:'20px'}}/>
        </div>
        <h1>PERMIS DE DÉTENTION CHIENS DE CATÉGORIES 1 ET 2</h1>
        <p>L’attestation d’aptitude est l’un des documents obligatoires pour obtenir le permis de détention des chiens catégorisés  (loi du 6 Janvier 1999).
          Heureuse propriétaire de plusieurs chiens de catégorie, je vous accompagne lors de cette formation afin d’aborder les sujets attachés à la loi, mais aussi aux chiens, à l’éducation, au comportement, ainsi qu’à l’apprentissage du port de la muselière.
        </p>
        <p>Habilitée par la préfecture de Côte d’Or, je vous propose deux formules adaptée suivant vos besoins. La formation se déroule sur mon terrain et sur rendez vous.</p>
        <p style={{fontWeight:"600", textAlign:"center", marginTop:"30px"}}>Tarif : 160 €</p>
      </div>
      <div className="rappel">
        <ul>
        <li>Formation théorique et pratique </li>
        </ul>
      </div>
    </div>
  )
}

export default Attestation