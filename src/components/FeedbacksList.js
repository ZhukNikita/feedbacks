import {Rating} from "@mui/material";
import React from "react";
import css from '../CssModules/Feedback.module.css'

export default function FeedbacksList(){

    var today = new Date();
    var now = today.toLocaleString();
    let date = new Date()
    let month = date.getMonth() + 1
    const feedbacks=[{
        id: Math.random(1000),
        rate: 3,
        UserName: 'John',
        text:'Delicious',
        status:'Активный',
        date: now

    },{
        id: Math.random(1000),
        rate: 2,
        UserName: 'James',
        text:'Thanks',
        status:'В обработке',
        date: now

    },{
        id: Math.random(1000),
        rate: 4,
        UserName: 'Alex',
        text:'very beautiful place',
        status:'Активный',
        date: now

    }
    ,{
        id: Math.random(1000),
        rate: 1,
        UserName: 'Sandra',
        text:'not so good',
        status:'Решенный',
        date: now
        }]
    return (
        <div className={css.body}>
            <ul>
                {
                    feedbacks.map((feedback)=>
                        <li className={css.item} key={feedback.id}>
                            <hr/>
                            <div className={css.content}>
                                <div className={css.ratingStatus}>
                                    <Rating
                                        readOnly='true'
                                        name="simple-controlled"
                                        value={feedback.rate}
                                    />
                                    <div className={css.status}
                                         style={
                                        feedback.status == 'Активный'?{ backgroundColor:'lightblue'}
                                            : feedback.status == 'В обработке'?
                                            { backgroundColor:'grey'}: {backgroundColor:'lightgreen'}  }
                                    >
                                        <span>{feedback.status}</span>
                                    </div>

                                </div>
                                <h2>{feedback.UserName}</h2>
                                <h3>{feedback.text}</h3>
                                <h3 style={{textAlign:'right' , margin: '10px'}}>{feedback.date}</h3>
                            </div>
                        </li>
                    )
                }
            </ul>

        </div>
    )

}