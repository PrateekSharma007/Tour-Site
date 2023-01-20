import React from 'react'

export default function Tour(t) {
    return (
        <div className="box">
            <h3>{t.name}</h3>

            <div className="flexing">
                <div className="left">
                    <img src={t.image} alt="" />
                </div>
                <div className="right">
                    <p>{t.info}</p>
                    <div className="price">${t.price}</div>
                </div>
                
            </div>
        </div>
    )
}
