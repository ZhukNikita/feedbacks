import React, {useState, useEffect} from "react";
import admin from '../CssModules/AdminPanel.module.css'
import Logo from "./Logo";
import {Button, ButtonGroup} from "@mui/material";
import {Link} from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FeedbacksList from "./FeedbacksList";
import SmallSubsMessage from "./SmallSubsMessage";


export default function AdminPanel() {
    const [messageOn, setMessageOn] = useState(false)

    return (
        <div className={admin.body}>
            <div className={admin.Logo}><Logo/></div>
            <div className={admin.Subscription}>
                <h5>14 дней</h5>
                <div className={admin.raz}>
                    <InfoIcon className={admin.SubscriptionInfo} style={{height: '18px', width: '18px'}}
                              onMouseOver={() => setMessageOn(true)}/>
                    {
                        messageOn && (
                            <SmallSubsMessage setMessageOn={setMessageOn}/>
                        )
                    }
                </div>

            </div>
            <br/>
            <br/>
            <div className={admin.content}>
                <div className={admin.title}>
                    <h2>Как пользоваться:</h2>
                </div>
                <div className={admin.Video}>
                    <iframe
                        width="370"
                        height="200"
                        style={{borderRadius: '12px'}}
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
                            <h4>Посмотреть все <ArrowForwardIosIcon style={{width: '10px', height: '10px'}}/></h4>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}