import React from 'react';

function SmallCard({title}) {
    return (
        <div tabindex="0" className='simple-card'>
            <section className='right-header'>
            </section>
            <section className='card-footer'>
            <h3>{title}</h3>
            </section>
        </div>
    );
}

export default SmallCard;