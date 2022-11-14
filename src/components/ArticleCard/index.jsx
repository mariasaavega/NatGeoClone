import React from 'react';

function ArticleCard({title,image,alt,link}) {
    return (
        <section  className='article-card'>
            <div className='article-image-wrapper'>
                <img tabindex="0"  src={image} alt={alt} className='article-image'/>
            </div>
            <section tabindex="0" className='article-text'>
                <h3>{title}</h3>
                <a tabindex="0" className='link-text'>{link}</a>
            </section>
        </section>
    );
}

export default ArticleCard;