import css from "./Feedback.module.css";
import {Rating} from "@mui/material";
import React, {useState} from "react";
import CommentItem from "./CommentItem";

export default function FeedBackItem({feedback, comment}) {
    const commentItem = {
        id: Math.random(1000)
    }
    const [comments, setComments] = useState([commentItem])
    const [commentOn, setCommentOn] = useState(false)

    function openCloseComments() {
        setCommentOn(!commentOn)
    }

    function addComment() {
        setComments([...comments, commentItem])
    }

    return (
        <li className={css.item} key={feedback.id}>
            <div className={css.content}>
                <div className={css.ratingStatus}>
                    <div style={{display:'flex' , minWidth:'200px' , maxWidth:'350px' , alignItems:'center' , justifyContent:'space-between'}}>
                        <h2>{feedback.UserName}</h2>
                        <Rating
                            readOnly={true}
                            name="simple-controlled"
                            value={feedback.rate}
                        />
                    </div>

                    <div className={css.status}
                         style={
                             feedback.status == 'Активный' ? {
                                     backgroundColor: 'rgb(208, 242, 255',
                                     color: 'rgb(4, 41, 122)'
                                 }
                                 : feedback.status == 'В обработке' ?
                                     {backgroundColor: 'grey'} : feedback.status == 'Не решено' ? {
                                             backgroundColor: 'rgba(255, 72, 66, 0.16)',
                                             color: 'rgb(183, 33, 54)'
                                         } :
                                         {
                                             backgroundColor: 'rgba(84, 214, 44, 0.16)',
                                             color: 'rgb(34, 154, 22)'
                                         }}
                    >
                        <span>{feedback.status}</span>
                    </div>

                </div>
                <h3 className={css.mainText}>{feedback.text}</h3>
                <h3 className={css.date}>{feedback.date}</h3>
                {
                    comment && (<h3 className={css.commentButton} onClick={openCloseComments}>Коментарии</h3>)
                }
            </div>
            {
                commentOn && (
                    comments.map((commentItem, index) =>
                        <CommentItem feedback={feedback} key={commentItem.id} comments={comments} index={index}
                                     addComment={addComment}/>
                    )

                )
            }
        </li>
    )
}