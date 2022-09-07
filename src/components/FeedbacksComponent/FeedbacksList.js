import React from "react";
import css from './Feedback.module.css'
import FeedBackItem from "./FeedBackItem";


export default function FeedbacksList({feedbacks, comment}) {
    return (
        <div className={css.body}>
            <ul>
                {
                    feedbacks.map((feedback) =>
                        <FeedBackItem comment={comment} feedback={feedback} key={feedback.id}/>
                    )
                }
            </ul>

        </div>
    )

}