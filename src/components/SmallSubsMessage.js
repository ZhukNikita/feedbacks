import admin from "../CssModules/AdminPanel.module.css";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";
import React from "react";

export default function SmallSubsMessage({setMessageOn}) {
    return (
        <div className={admin.SubscriptionFullInfo} onClick={() => setMessageOn(false)}>
            <div className={admin.SubscriptionContent} onMouseLeave={() => setMessageOn(false)}>
                <div className={admin.SubscriptionHeader}>
                    <h3 style={{color: 'blue'}}>Pro</h3>
                    <h5>Самая популярная</h5>
                </div>
                <div className={admin.SubscriptionFullInfoBody}>
                    <h3>$15<span>/m</span></h3>
                    <h5>Включает в себя</h5>
                    <Link to='/Subscription'>
                        <Button variant="contained" style={{
                            backgroundColor: 'rgb(103, 58, 183)'
                        }}>Изменить</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}