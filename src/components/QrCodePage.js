import QrCode from 'qrcode';
import qr from '../CssModules/QrCodePage.module.css'
import {useState , useEffect} from "react";

export default function QrCodePage({text}){
    const [src , SetSrc] =useState('')

    useEffect(() => {
            QrCode.toDataURL(text).then((data)=> {
            SetSrc(data)
        })
    }, []);
    
    return(
        <div className={qr.body}>
            <img src={src} alt="QrCode"/>
        </div>
    )
}