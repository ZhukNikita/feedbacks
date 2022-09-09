import React, {useState} from "react";
import {Button, Checkbox, TextField} from "@mui/material";
import autho from '../CssModules/RatingAutho.module.css'
import {Link} from "react-router-dom";
import HelpIcon from '@mui/icons-material/Help';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logo from "./Logo";
import useMask from "react-mask-hook";

export default function RatingAutho() {
    const [userName , setUserName] = useState('')
    const [emptyUserName , setEmptyUserName] = useState('')
    const [emptyPhoneNumber , setEmptyPhoneNumber] = useState('')
    const [value, setValue] = useState('');


    const maskProps = useMask({
        value,
        onChange: setValue,
        mask: '+(38#)-###-####-##',
        placeholder: '_',
    })
    function UserNameChange(e){
        setUserName(e.target.value)
        setEmptyUserName('')
    }
    function Check(){
        if(userName.length === 0 ) setEmptyUserName(<h6 style={{color:'red' , maxWidth:'210px', marginTop:'10px'}}>Вы не ввели имя, поле не может быть незаполненным.</h6>)
        if(value.length === 0 ) setEmptyPhoneNumber(<h6 style={{color:'red' ,  maxWidth:'210px',marginTop:'10px'}}>Вы не ввели номер телефона, поле не может быть незаполненным.</h6>)
    }
    return (
        <div style={{display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
            <div className={autho.RatingAutho}>
                <Logo/>
                <TextField
                    onChange={e=> UserNameChange(e)}
                    style={{marginTop: '20px', backgroundColor: "#FFF", color: '#04297a', fontWeight: 'bold'}}
                    id="demo-helper-text-misaligned-no-helper"
                    label="Имя"
                    size='small'
                />
                {emptyUserName}
                <TextField
                    onChange={()=> setEmptyPhoneNumber('')}
                    {...maskProps}
                    style={{marginTop: '20px', backgroundColor: "#FFF", color: '#04297a', fontWeight: 'bold'}}
                    id="demo-helper-text-misaligned-no-helper"
                    label="Номер телефона"
                    size='small'
                />
                {value.length >= 1 ? '' :emptyPhoneNumber}
                <div style={{marginTop: '15px'}}>
                    {userName === '' || value === ''?
                        <Button variant="outlined" onClick={Check} style={{ borderRadius: '12px'}}>Отправить</Button>
                        :
                        <Link to='/SmsAccess'>
                            <Button variant="contained" style={{ borderRadius: '12px'}}>Отправить</Button>
                        </Link>
                    }
                </div>
                <div className={autho.anonymous}>
                    <Checkbox/>
                    <span>Остаться анонимным</span>
                    <Tooltip title="Любой текст" placement='top' sx={{color:'black'}}>
                        <IconButton>
                            <HelpIcon />
                        </IconButton>
                    </Tooltip>
                </div>
                <div>
                    <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fparse.com" target="_blank"
                       rel="noopener">
                        <h4 className={autho.fbIcon}>Поделиться отзывом в соц. сетях</h4>
                    </a>
                </div>
            </div>
        </div>

    )
}