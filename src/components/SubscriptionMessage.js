import message from "../CssModules/SubscriptionMessage.module.css";
import React from "react";
import {Button} from "@mui/material";

export default function SubscriptionMessage({handleClose}){
    return(
        <div className={message.messageWrapper}>
            <div className={message.modal}>
                <h3>Внимание</h3>
                <h4>Вы уверены? Это действие активирует QR  код на 14 дней.</h4>
                <div>
                    <Button
                        variant="contained"
                        style={{
                            margin: '10px',
                            borderRadius: '8px',
                            backgroundColor: 'rgb(103, 58, 183)',
                            width:'140px'
                        }}
                        onClick={()=>handleClose()}
                    >Активировать
                    </Button>
                    <Button
                        variant="contained"
                        style={{
                            margin: '10px',
                            borderRadius: '8px',
                            backgroundColor: 'rgb(103, 58, 183)',
                            width:'140px'
                        }}
                        onClick={()=>handleClose()}
                    >Позже
                    </Button>
                </div>
            </div>
        </div>
    )
}