import React from 'react';
import AdCard from '../AdCard';
import SmallAd from '../SmallAd';

function MainPosts(props) {
    return (
        <div className='main-posts'>
            <AdCard />
            <SmallAd />
        </div>
    );
}

export default MainPosts;