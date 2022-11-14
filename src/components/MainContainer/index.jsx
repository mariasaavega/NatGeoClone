import React from 'react';
import ArticlesContainer from '../ArticlesContainer';
import MainPosts from '../MainPosts';

function MainContainer(props) {
    return (
        <section className='main-container'>
            <MainPosts />
            <ArticlesContainer />
        </section>
    );
}

export default MainContainer;