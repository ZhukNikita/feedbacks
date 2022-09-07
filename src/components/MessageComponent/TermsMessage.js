import message from "../SubscriptionComponent/SubscriptionMessage.module.css";
import {Button} from "@mui/material";
import React from "react";

export default function TermsMessage({handleClose}){
    return(
        <div className={message.messageWrapper}>
            <div className={message.modal}>
                <div className={message.title}>
                    <h3>Условия пользования</h3>
                    <h4>Условия</h4>
                </div>
                <div>
                    <Button
                        onClick={handleClose}
                        variant="contained"
                        style={{
                            height:' 20px ',
                            width:' 100% ',
                            margin: '10px',
                            borderRadius: '4px',
                            backgroundColor: 'rgb(103, 58, 183)',
                        }}
                    >Согласен c условиями пользования
                    </Button>
                </div>
            </div>
        </div>
    )
}