import React from 'react';
import LeftSmallCard from '../LeftSmallCard';
import SmallCard from '../SmallCard';

function SmallAd(props) {
    return (
        <section className='small-card' >
            <LeftSmallCard title="Soar through Notre Dame Cathedral in these amazing drone videos" />
            <SmallCard title="Subscribe to National Geographic"/>
            
        </section>
    );
}

export default SmallAd;