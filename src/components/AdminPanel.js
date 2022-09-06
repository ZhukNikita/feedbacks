import React, {useState , useEffect} from "react";
import admin from '../CssModules/AdminPanel.module.css'
import Logo from "./Logo";
import {Button, ButtonGroup} from "@mui/material";
import {Link} from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FeedbacksList from "./FeedbacksList";


export default function AdminPanel() {
    const[messageOn , setMessageOn] = useState(false)

    return (
        <div className={admin.body}>
            <div className={admin.Logo}><Logo/></div>
            <div className={admin.Subscription}>
                <h5>14 дней</h5>
                <div className={admin.raz}>
                    <InfoIcon className={admin.SubscriptionInfo} style={{height: '18px',width: '18px'}} onMouseOver={()=>setMessageOn(true)}/>
                    {
                        messageOn &&(
                            <div className={admin.SubscriptionFullInfo} onClick={()=>setMessageOn(false)}>
                                <div className={admin.SubscriptionContent} onMouseLeave={()=>setMessageOn(false)}>
                                    <div className={admin.SubscriptionHeader}>
                                        <h3 style={{color : 'blue'}}>Pro</h3>
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

                            </div>)
                    }

                </div>

            </div>
            <br/>
            <br/>
            <div className={admin.content}>
                <h2>Как пользоваться:</h2>
                <div>
                        <iframe
                            width="370"
                            height="200"
                            style={{borderRadius:'12px'}}
                            src="https://www.youtube.com/embed/RK1K2bCg4J8"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                </div>
                <Link to='/QrPage'>
                    <Button variant="contained" style={{
                        margin: '10px',
                        borderRadius: '8px',
                        backgroundColor: 'rgb(103, 58, 183)'
                    }}>Сгенерировать QR</Button>
                </Link>
                <div className={admin.feedbackTitle}><h3>Мои отзывы:</h3></div>
                <div className={admin.feedbacksList}>
                    <h3 style={{margin: '20px'}}>Последние 5</h3>
                    <div className={admin.feedbacksListContent}>
                        <FeedbacksList/>
                    </div>
                    <div className={admin.feedbacksListFooter}>
                        <Link to='/Feedbacks'>
                            <h4>Посмотреть все <ArrowForwardIosIcon style={{width: '10px', height:'10px'}}/></h4>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}