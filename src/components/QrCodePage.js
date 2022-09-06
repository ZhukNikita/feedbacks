import QrCode from 'qrcode';
import qr from '../CssModules/QrCodePage.module.css'
import React, {useState , useEffect} from "react";
import {Button} from "@mui/material";
import ReplyIcon from '@mui/icons-material/Reply';
import PrintIcon from '@mui/icons-material/Print';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import SubscriptionMessage from "./SubscriptionMessage";
import {AspectRatio} from "@mui/joy";
import {Link} from "react-router-dom";

export default function QrCodePage({text}){
    const [src , SetSrc] =useState('');
    const [messageOn , setMessageOn] = useState(false);
    const handleOpen = ()=>{
        setMessageOn(true)
    }
    const handleClose = ()=>{
        setMessageOn(false)
    }
    useEffect(() => {
            QrCode.toDataURL(text).then((data)=> {
            SetSrc(data)
        })
    }, []);
    
    return(
        <div className={qr.body}>
            <h2>QR сгенерирован</h2>
            <div className={qr.QrCode}>
                <img src={src} alt="QrCode" style={{mixBlendMode: 'multiply'}}/>
            </div>

            <div className={qr.buttons}>
                <Button
                    variant="contained"
                    style={{
                        margin: '10px',
                        borderRadius: '8px',
                        backgroundColor: 'rgb(103, 58, 183)'
                    }}
                    onClick={()=>handleOpen()}
                ><PrintIcon/>
                </Button>
                <Button variant="contained" style={{
                    margin: '10px',
                    borderRadius: '8px',
                    backgroundColor: 'rgb(103, 58, 183)'
                }}><ReplyIcon/>
                </Button>
                <Button variant="contained" style={{
                    margin: '10px',
                    borderRadius: '8px',
                    backgroundColor: 'rgb(103, 58, 183)'
                }}><SaveAltIcon/>
                </Button>
            </div>
            <h2>Как пользоваться:</h2>
            <div className={qr.Video} style={{width:'100%'}}>
                <iframe
                    style={{borderRadius:'12px'}}
                    width="380px" height="210px" src="https://www.youtube.com/embed/D7SlK16o82o"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </div>
            <Link to='/OrderStyleQr'>
                <Button
                    sx={() => ({
                        margin: '10px',
                        borderRadius: '8px',
                        background: `rgb(255, 231, 217)`,
                        color: 'rgb(122, 12, 46)',
                        fontWeight: 'bold',
                        '&:hover': {
                            background: `rgb(204, 160, 132)`,
                        },
                    })}
                    variant="contained"
                >Заказать стилизацию под бизнес
                </Button>
            </Link>
            <Button
                onClick={handleOpen}
                sx={() => ({
                    margin: '10px',
                    borderRadius: '8px',
                    backgroundColor: 'rgb(209, 233, 252)',
                    color:'rgb(17,46,147)',
                    fontWeight: 'bold',
                    '&:hover': {
                        background: `rgb(124, 173, 213)`,
                    },
                })}
                variant="contained"
            >Активировать на 14 дней
            </Button>

            {
                messageOn && (
                    <SubscriptionMessage handleClose={handleClose}/>
                )
            }
        </div>
    )
}