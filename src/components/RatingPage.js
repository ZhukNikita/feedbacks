import rate from '../CssModules/Rate.module.css'
import React, {useState} from "react";
import {Button, Rating, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {Textarea} from "@mui/joy";

function RatingPage({rating, setRating}) {
    const [feedback, setFeedBack] = useState('');
    return (
        <div style={{width:'100%' , height:'100%' , display:'flex' , justifyContent:'center', alignItems:'center'}}>
            <div className={rate.Rating}>
                <Typography component="legend">СТРАНИЦА ОТЗЫВОВ</Typography>
                <Rating
                    name="simple-controlled"
                    value={rating}
                    onChange={(event, newValue) => {
                        setRating(newValue);
                    }}
                />
                <Textarea
                    minRows={3}
                    maxRows={4}
                    onChange={(e) => {
                        setFeedBack(e.target.value)
                    }}
                    placeholder="ТЕКСТ"
                    style={{marginTop: '20px', width: 200, borderRadius: '10px', border: '1px solid grey'}}
                />
                {feedback === '' || rating === null ?
                    <Link to='#'>
                        <Button variant="outlined" style={{marginTop: '20px', borderRadius: '4px'}}>Отправить</Button>
                    </Link>
                    :
                    <Link to='/RatingAutho'>
                        <Button variant="contained" style={{marginTop: '20px', borderRadius: '4px'}}>Отправить</Button>
                    </Link>
                }
            </div>
        </div>

    );
}

export default RatingPage;
