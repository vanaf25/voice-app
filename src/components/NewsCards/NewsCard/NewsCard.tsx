import Link from 'antd/lib/typography/Link';
import React, {useState, useEffect, createRef, RefObject} from 'react';
import {ArticleType} from "../NewsCards";
import styles from './NewsCard.module.css'
const NewsCard:React.FC<{article:ArticleType,index:number,activeArticle:number}> = ({article:
    {author,publishedAt,
        description,
        urlToImage,url,
        source,content,title},index,activeArticle}) => {
    const [elRefs, setElRefs]=useState([])
    const scrollToRef=(ref:RefObject<any>)=>window.scrollTo(0, ref.current.offsetTop - 50)
    useEffect(()=>{
    setElRefs((refs)=>Array(20).fill('')
    .map((_,index)=>refs[index] || createRef() ))
    },[])
    useEffect(()=>{
        if (index===activeArticle && elRefs[activeArticle]){
            scrollToRef(elRefs[activeArticle])
        }
    },[index,activeArticle,elRefs])
    return (
        <div ref={elRefs[index]} className={`${styles.card} ${activeArticle===index ? styles.active:""}` }>
            <div className={styles.card__image}>
                <Link href={url} target={"_blank"}>
                    <img src={urlToImage}  alt="image"/>
                </Link>

            </div>
            <div className={styles.card__content}>
            <div className={styles.card__block_flex}>
                <span>{new Date(publishedAt).toLocaleDateString()}</span>
                <span>{author}</span>
            </div>
                <h2 className={styles.card__title}>{title}</h2>
                <p className={styles.card__description}>{description}</p>
                <div className={styles.card__block_flex}>
                    <Link href={url} target={"_blank"}>Learn More</Link>
                    <p>{index+1}</p>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;