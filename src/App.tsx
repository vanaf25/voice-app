import React, {useEffect, useState} from 'react';
import './App.css';
import alanBtn from "@alan-ai/alan-sdk-web";
import 'antd/dist/antd.css'
import NewsCards, {ArticleType} from "./components/NewsCards/NewsCards";
import { wordsToNumbers } from 'words-to-numbers';
import Header from "./components/Header/Header";
const alanKey="858b1c003c9977b366a488524777f18e2e956eca572e1d8b807a3e2338fdd0dc/stage"
type onCommandType={
    command:"newHeadlines" | "openArticle" | "goBack" | "highlight" ,
    articles:Array<ArticleType>,
    number:string,
    articleNumber:number
}

function App() {
    const [articles,setArticles]=useState<Array<ArticleType>>([])
    const [activeArticle,setActiveArticle]=useState(-1)
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: (commandData:onCommandType) => {
                if (commandData.command === 'newHeadlines') {
                   setArticles(commandData.articles);
                   setActiveArticle(-1)
                }
                else if  (commandData.command==="openArticle"){
                    console.log(wordsToNumbers(commandData.number))
                    let parsedNumber=wordsToNumbers(commandData.number)
                   if (parsedNumber) {
                       parsedNumber=Number(parsedNumber)
                       const article=commandData.articles[parsedNumber-1]
                       if (parsedNumber>20){
                           alanBtn().playText('Please try again')
                       }
                       else  if(article){
                           window.open(article.url)
                           alanBtn().playText("Opening...")
                       }
                   }
                }
                else if (commandData.command==="goBack"){
                    setArticles([]);
                    setActiveArticle(-1)
                }
                else if(commandData.command==="highlight"){
                    setActiveArticle(commandData.articleNumber)
                }
            }
        });
    }, []);
    useEffect(()=>{
        console.log(articles)
    },[articles])
  return (
    <div className={"container"}>
        {!articles.length && <Header/>}
        <NewsCards activeArticle={activeArticle} articles={articles}/>
    </div>
  );
}

export default App;
