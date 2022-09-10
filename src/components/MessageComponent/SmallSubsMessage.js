import admin from "../AdminComponents/AdminPanel.module.css";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";
import React from "react";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

export default function SmallSubsMessage({setMessageOn}) {
    return (
        <div className={admin.SubscriptionFullInfo} onClick={() => setMessageOn(false)}>
            <div className={admin.SubscriptionContent} onMouseLeave={() => setMessageOn(false)}>
                <div className={admin.triangle}></div>
                <div className={admin.SubscriptionHeader}>
                    <RocketLaunchIcon sx={{marginRight:'10px' , backgroundColor:'lightblue', padding:'10px' , height:'30px' , width:'30px' , borderRadius:'25px'}}/>
                    <div>
                        <h3>Партнер</h3>
                        <h5 style={{color:'gray'}}>возможности тарифа</h5>
                        <h5 style={{color:'blue'}}>до 20.07.2023</h5>
                    </div>
                    <Link to='/Subscription'>
                        <Button variant="outlined" style={{
                            color:'blue',
                            border:'1px soled lightblue',
                            borderRadius:'16px',
                        }}>Продлить</Button>
                    </Link>
                </div>
                {/*<div className={admin.SubscriptionFullInfoBody}>*/}
                {/*    <h3>$15<span>/m</span></h3>*/}
                {/*    <h5>Включает в себя</h5>*/}
                {/*    <Link to='/Subscription'>*/}
                {/*        <Button variant="contained" style={{*/}
                {/*            backgroundColor: 'rgb(103, 58, 183)'*/}
                {/*        }}>Изменить</Button>*/}
                {/*    </Link>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}