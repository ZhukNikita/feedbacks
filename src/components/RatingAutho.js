import React, {useState} from "react";
import {Button, Checkbox, TextField} from "@mui/material";
import autho from '../CssModules/RatingAutho.module.css'
import {Link} from "react-router-dom";
import HelpIcon from '@mui/icons-material/Help';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function RatingAutho(){
    const [messageOn , setMessageOn] = useState(false)
    return(
        <div className={autho.RatingAutho}>
            <TextField
                style={{ marginTop: '20px' , backgroundColor: "#d0f2ff",color: '#04297a' , fontWeight: 'bold'}}
                id="demo-helper-text-misaligned-no-helper"
                label="Имя"
                size='small'
            />
            <TextField
                style={{ marginTop: '20px' , backgroundColor: "#d0f2ff",color: '#04297a' , fontWeight: 'bold'}}
                id="demo-helper-text-misaligned-no-helper"
                label="Номер телефона"
                size='small'
            />
            <div style={{marginTop: '15px'}} >
                <Link to='/RatingAutho'>
                    <Button variant="contained">Отправить</Button>
                </Link>
            </div>
            <div className={autho.anonymous}>
                <Checkbox/>
                <span>Остаться анонимным</span>
                <HelpIcon  style={{marginLeft: '10px'}} onClick={()=> setMessageOn(!messageOn)}/>
            </div>
            {messageOn && (
                <div className={autho.box}> </div>
            )
            }
            <div>
                <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fparse.com" target="_blank"
                   rel="noopener">
                    <FacebookIcon className={autho.fbIcon} style={{height: '40px', width: '40px'}}/>
                </a>
            </div>

        </div>
    )
}