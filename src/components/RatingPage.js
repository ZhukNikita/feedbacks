import rate from '../CssModules/Rate.module.css'
import React, {useState} from "react";
import {Button, Rating} from "@mui/material";
import {Link} from "react-router-dom";
import {Textarea} from "@mui/joy";
import Logo from "./Logo";

function RatingPage({rating, setRating}) {
    const [feedback, setFeedBack] = useState('');
    return (
        <div style={{width:'100%' , height:'100%' , display:'flex' , justifyContent:'center', alignItems:'center'}}>
            <div className={rate.body}>
                <Logo/>
                <h3>СТРАНИЦА ОТЗЫВОВ</h3>
                <Rating
                    name="simple-controlled"
                    value={rating}
                    onChange={(event, newValue) => {
                        setRating(newValue);
                    }}
                />
                <Textarea
                    sx={() => ({
                        margin: '15px',
                        borderRadius: '8px',
                        color: 'rgb(3, 114, 183)',
                        fontWeight: 'bold',
                        borderColor: `rgb(3, 114, 183)`,
                        '&:hover': {
                            background: `rgb(189, 207, 253)`,
                        },
                    })}
                    minRows={3}
                    maxRows={4}
                    onChange={(e) => {
                        setFeedBack(e.target.value)
                    }}
                    placeholder="Текст"
                    style={{marginTop: '20px', width: '100%', borderRadius: '10px'}}
                />
                {feedback === '' || rating === null ?
                    <Link to='#'>
                        <Button variant="outlined" style={{marginTop: '20px', borderRadius: '12px'}}>Отправить</Button>
                    </Link>
                    :
                    <Link to='/RatingAutho'>
                        <Button variant="contained" style={{marginTop: '20px', borderRadius: '12px'}}>Отправить</Button>
                    </Link>
                }
            </div>
        </div>

    );
}

export default RatingPage;
