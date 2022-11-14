import React from 'react';

function LeftSmallCard({title}) {
    return (
        <div tabindex="0" className='simple-card'>
            <section className='left-header'>
                
            </section>
            <section className='card-footer'>
            <h4>MAGAZINE</h4>
              <h3>{title}</h3>
            </section>
        </div>
    );
}

export default LeftSmallCard;