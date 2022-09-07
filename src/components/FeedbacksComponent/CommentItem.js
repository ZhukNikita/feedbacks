import css from "./Feedback.module.css";
import {Button, TextareaAutosize} from "@mui/material";
import React, {useState} from "react";

export default function CommentItem({comments, index, addComment, feedback}) {
    const [adminComment, setAdminComment] = useState('')
    return (
        <div className={css.comment} style={comments.length >= 1 ? {borderRadius: '0'} : ''}>
            <div style={{width: '100%'}}>
                <h3 className={css.CommentText}>
                    <TextareaAutosize
                        value={adminComment}
                        onChange={(e) => setAdminComment(e.target.value)}
                        aria-label="empty textarea"
                        placeholder=" Коментарий админа"
                        style={{width: '98%', padding: '5px', height: '70px', borderRadius: '10px'}}
                    /></h3>
            </div>
            <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                <div>
                    {
                        comments[comments.length - 1] === comments[index] ? (<Button
                            sx={() => ({
                                margin: '15px',
                                borderRadius: '8px',
                                color: 'rgb(183, 129, 3)',
                                height: '20px',
                                width: "200px",
                                backgroundColor: 'rgb(255,239,185)',
                                fontWeight: 'bold',
                                fontSize: '12px',
                                textTransform: 'none',
                                '&:hover': {
                                    background: `rgb(206, 190, 107)`,
                                },
                            })}
                            variant="contained"
                            onClick={addComment}
                        >Добавить коментарий
                        </Button>) : ''
                    }
                </div>
                <div style={{width: '100%', marginRight: '20px'}}>
                    <h3 style={{width: "100%", textAlign: 'right'}}>Admin Name</h3>
                    <h3 style={{textAlign: 'right', color: 'lightgray',}}>{feedback.date}</h3>
                </div>
            </div>
            <hr/>
        </div>
    )
}