import React from 'react'

function Contact() {
  return (
    <div className='contact'>
      <div className="description-contact">
        <h1>CONTACT</h1>
        <div className="adresse">
          <div className="premiere-adress">
            <p style={{fontWeight:'700', textDecoration:'underline'}}>Adresse :</p>
            <p>133 Route de Saint Jean de Losne</p>
            <p>21470 BRAZEY-EN-PLAINE</p>
          </div>
          <div className="deuxieme-adresse">
            <p>Espace cani ludique « Michel Busard » </p>
            <p>21850 SAINT APOLLINAIRE</p>
          </div>
        </div>
        <div className="joindre">
          <p>Téléphone: </p>
          <a href="tel:+33771631236">07 71 63 12 36</a>
          <p>Facebook :</p>
          <a href="https://www.facebook.com/SavoirEcouterSonChien">https://www.facebook.com/SavoirEcouterSonChien</a>
          <p>Email: </p>
          <a href="mailto:savoirecoutersonchien@hotmail.com">savoirecoutersonchien@hotmail.com</a>
          <p>Page Web: </p>
          <a href="https://www.savoirecoutersonchien.fr">https://www.savoirecoutersonchien.fr</a>
        </div>
      </div>
    </div>
  )
}

export default Contact