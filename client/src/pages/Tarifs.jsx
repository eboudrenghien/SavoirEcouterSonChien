import React from 'react'

function Tarifs() {
  return (
    <div className='tarifs'>
      <div className="all-tarifs">
        <h1>TARIFS – 1 formule et un suivi à vie !</h1>
      
        <div className="tarif">
          <h3>Stage intensif individuel – 450 €</h3>
          <p>Résultats en 1 journée et demi + accès aux cours collectifs</p>
          <div className="button-edit">
            <button className='edit'>EDITER</button>
            <button className='delete'>SUPPRIMER</button>
          </div>
        </div>
        <div className="tarif">
          <h3>Cours essentiels individuels – 350 €</h3>
          <p>Résultats en 1 mois + accès aux cours collectifs</p>
          <div className="button-edit">
            <button className='edit'>EDITER</button>
            <button className='delete'>SUPPRIMER</button>
          </div>
        </div>
        <div className="tarif">
          <h3>Rééducation sur 7 jours en garde au centre canin – Me contacter pour les tarifs et modalités d’accueil</h3>
          <p>Résultats garantis – 4 heures de travail et promenades éducatives tous les jours + accès aux cours collectifs</p>
        
          <div className="button-edit">
            <button className='edit'>EDITER</button>
            <button className='delete'>SUPPRIMER</button>
          </div></div>
        <div className="tarif">
          <h3>Formation pour les propriétaires de chiens de catégorie – Permis de détention – 160 €</h3>
          <p> Deux formules au choix, formation théorique ou cours essentiels individuels.</p>
          <div className="button-edit">
            <button className='edit'>EDITER</button>
            <button className='delete'>SUPPRIMER</button>
          </div>
        </div>
        <div className="tarif">
          <h3>Rencontres canines – Gratuit et illimité, suivi à vie du chien (réservé à ceux qui ont suivi le programme)</h3>
          <div className="button-edit">
            <button className='edit'>EDITER</button>
            <button className='delete'>SUPPRIMER</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tarifs