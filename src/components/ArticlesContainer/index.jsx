import React from 'react';
import ArticleCard from '../ArticleCard';

function ArticlesContainer() {
    return (
        <div className='articles'>
            <h2 tabindex="0" className='news-title'>IN THIS ISSUE</h2>
            <section className='article-card-wrapper' >
                <ArticleCard 
                    title="MAGAZINE FROM THE EDITOR" 
                    image = "https://i.natgeofe.com/n/cea48cb3-b171-424a-a710-22924e2b1fa7/STOCK_shutterstock_editorial_10208503h.jpg?w=572.3999848365784&h=401.3999893665314"
                    alt="NotreDame image"
                    link = "Which cultural sites should be preserved -and how?"

                />
                <ArticleCard 
                    title="MAGAZINE "
                    image = "https://i.natgeofe.com/n/e517656a-ac71-492d-87ca-05bf5252d023/OG_square.jpg?w=175.4999953508377&h=175.4999953508377"
                    alt="White mountain"
                    link = "Follow the journey to K2's summit in the deadlies season"
                    />
                <ArticleCard 
                    title="MAGAZINE "
                    image = "https://i.natgeofe.com/n/0271c472-c5b8-466f-97e0-dac8a2ece18a/STOCKPKG_MM9819__DSC0108_square.jpg?w=175.4999953508377&h=175.4999953508377"
                    alt="Ocean life"
                    link = "These fish are doting parents, buldiers, and dancers"

                                    />
                <ArticleCard 
                    title="SCIENCE"
                    image = "https://i.natgeofe.com/n/afd92f1b-3ff4-4ebb-96bf-a4c6a5d284db/Olive-Bud_square.jpg?w=175.4999953508377&h=175.4999953508377"
                    alt="coral"
                    link = "The hidden beauty of the plants that feed the world "

                    />
                <ArticleCard 
                    title="MAGAZINE "
                    image = "https://i.natgeofe.com/n/35f4d8e0-80bd-4147-af73-4edb4568fec9/STOCK_DEPARTMETNS_02_2022_BT_Triamyxa_ventrites_NG_square.jpg?w=175.4999953508377&h=175.4999953508377"
                    alt="new species found"
                    link = "A new beetle species found in Triassic feces, and more breakthroughs"

                   />
                <a href="" className='see-all'>SEE ALL </a>
            </section>
        </div>
    );
}

export default ArticlesContainer;