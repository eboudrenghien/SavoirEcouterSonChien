import React from 'react'

function Tarif({tarif}) {
  return (
    <div className='tarif'>
        <h3>{tarif.titre}</h3>
        <p>{tarif.description}</p>
        <div className="button-edit">
            <button className='edit'>EDITER</button>
            <button className='delete'>SUPPRIMER</button>
          </div>
    </div>
  )
}

export default Tarif