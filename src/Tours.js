import React from 'react'
import Tour from './Tour'

export default function Tours(props) {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>

      </div>
      <div className = "boxe">
        {props.tour.map((t) => {
          return <Tour key = {t.id } {...t} /> 
        })}
      </div>
    </section>
  )
}

