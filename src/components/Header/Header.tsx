import React from 'react';
import bg from "./../../images/fon.jpg";
import styles from './Header.module.css'
const Header = () => {
const cards=[
    {
        id:1,
        title:"Latest News",
        description:{
            title:"",
            body:""
        },
        saying:"Give me the latest news",
        bgColor:"#137078"
    },
    {
        id:2,
        title:"News by Categories",
        description:{
            title:"Categories:",
            body:"Business, Entertainment, General, Health, Science, Sports, Technology"
        },
        saying:"Give me the latest Technology News",
        bgColor: "#2e2e78"
    },
    {
        id:3,
        title:"News by Terms",
        description:{
            title:"Terms:",
            body:"Donald Trump , BitCoin, PlayStation 5, Smartphones"
        },
        saying:"What's up with PlayStation 5",
        bgColor: "#3e7f44"
    },
    {
        id:3,
        title:"News by Sources",
        description:{
            title:"Sources:",
            body:" CNN , Wired, BBC News, Time,IGN, Buzzfeed, ABc News..."
        },
        saying:"Give me the News from CNN",
        bgColor: "#978611"
    }
]
    return (
        <div>
            <div className={styles.header}>
                <img src={bg} alt="bg"/>
                <div className={styles.header__content}>
                    <h1 className={styles.header__title}>Voice App</h1>
                </div>
            </div>
            <div className={styles.cards}>
                {cards.map(card=><div style={{backgroundColor:card.bgColor}} key={card.id} className={styles.cards__item}>
                    <h2>{card.title}</h2>
                    <p className={styles.item__p}>
                        <h3 style={{marginBottom:5}}>{card.description.title}</h3>
                        <p>{card.description.body}</p>
                    </p>
                    <p>
                        <p style={{marginBottom:5}}>Try Saying:</p>
                        {card.saying}
                    </p>
                </div>)}

            </div>
        </div>
    );
};

export default Header;