import React, { useState } from 'react'

export default function Tour(t) {

    const [readmore,setReadmore] = useState(false)
    return (
        <div className="box">


            <div className="flexing">
                <div className="left">
                    <img src={t.image} alt="" />
                </div>
                <div className="tit">
                    <h3>{t.name}</h3>
                    <h3>${t.price}</h3>
                </div>

                <div className="right">
                    <p>
                        {(readmore)? t.info : t.info.substring(0,200)}...<button className='showing' onClick={() => setReadmore(!readmore)}>{readmore? "show less" : "show more"}</button>
                    </p>

                </div>
                <div className="btn">
                    <button onClick = {() => t.removeTour(t.id)  }>Not Interested</button>
                </div>

            </div>
        </div>
    )
}



// {readmore?t.info : `${t.info.
    // substring(0,200)}`}...
    // <button className = " showing"  
    // onClick={() => setReadmore
    // (!readmore)}>{readmore? "show 
    // less" : "show more"}</button>
// 
// 






