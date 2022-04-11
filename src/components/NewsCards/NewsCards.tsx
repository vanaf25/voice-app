import {Col, Row } from 'antd/lib/grid';
import React from 'react';
import NewsCard from "./NewsCard/NewsCard";
export type ArticleType={
    author:string,
    content:string,
    description:string,
    publishedAt:string,
    source:{
        id:string,
        name:string
    },
    title:string,
    url:string,
    urlToImage:string
}
type NewsCardsPropsType={
    articles:Array<ArticleType>,
    activeArticle:number
}
const NewsCards:React.FC<NewsCardsPropsType> = ({articles,activeArticle}) => {
    return (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{display:"flex"}}>
            {articles.map((article,index)=>{
            return  <NewsCard activeArticle={activeArticle}
                              key={index} index={index}  article={article}/>
            })}
        </Row>
    );
};

export default NewsCards;