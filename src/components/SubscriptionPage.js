import subs from '../CssModules/SubscriptionPage.module.css';
import SubsTable from "./SubsTable";
import React from "react";
import {SubsBuyButton} from "./SubsBuyButton";
import {Button} from "@mui/material";
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DiamondIcon from '@mui/icons-material/Diamond';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import SettingsIcon from '@mui/icons-material/Settings';

export default function SubscriptionPage() {
    return (
        <div className={subs.Page}>
            <div className={subs.NavBar}>
                <Button
                    startIcon={<EmojiPeopleIcon/>}
                    sx={() => ({
                        justifyContent: 'start',
                        textTransform: 'none',
                        color: 'rgb(99, 115, 129)',
                        width: '100%',
                        border: 'none',
                        borderRadius: '6px',
                        fontWeight: 'bold',
                        '&:hover': {
                            border: 'none',
                            backgroundColor: `#ececec`,
                        },
                    })}
                    variant="outlined">
                    О нас
                </Button>
                <Button
                    startIcon={<AttachMoneyIcon/>}
                    sx={() => ({
                        justifyContent: 'start',
                        textTransform: 'none',
                        color: 'rgb(99, 115, 129)',
                        width: '100%',
                        border: 'none',
                        borderRadius: '6px',
                        fontWeight: 'bold',
                        '&:hover': {
                            border: 'none',
                            backgroundColor: `#ececec`,
                        },
                    })}
                    variant="outlined">
                    Тарифы
                </Button>
                <Button
                    startIcon={<DiamondIcon/>}
                    sx={() => ({
                        justifyContent: 'start',
                        textTransform: 'none',
                        color: 'rgb(99, 115, 129)',
                        width: '100%',
                        border: 'none',
                        borderRadius: '6px',
                        fontWeight: 'bold',
                        '&:hover': {
                            border: 'none',
                            backgroundColor: `#ececec`,
                        },
                    })}
                    variant="outlined">
                    Функции Pro
                </Button>
                <Button
                    startIcon={<HelpCenterIcon/>}
                    sx={() => ({
                        justifyContent: 'start',
                        textTransform: 'none',
                        color: 'rgb(99, 115, 129)',
                        width: '100%',
                        border: 'none',
                        borderRadius: '6px',
                        fontWeight: 'bold',
                        '&:hover': {
                            border: 'none',
                            backgroundColor: `#ececec`,
                        },
                    })}
                    variant="outlined">
                    Вопросы/Ответы
                </Button>
                <Button
                    startIcon={<SettingsIcon/>}
                    sx={() => ({
                        justifyContent: 'start',
                        textTransform: 'none',
                        color: 'rgb(99, 115, 129)',
                        width: '100%',
                        border: 'none',
                        borderRadius: '6px',
                        fontWeight: 'bold',
                        '&:hover': {
                            border: 'none',
                            backgroundColor: `#ececec`,
                        },
                    })}
                    variant="outlined">
                    Настройки
                </Button>
            </div>
            <div className={subs.body}>
                <div className={subs.SubsTable}>
                    <h2>Тарифы:</h2>
                </div>
                <div>
                    <SubsTable/>
                </div>
                <hr/>
                <div className={subs.SubsButtons}>
                    <SubsBuyButton onClick={() => console.log('buy 1')}/>
                    <SubsBuyButton onClick={() => console.log('buy 2')}/>
                    <SubsBuyButton onClick={() => console.log('buy 3')}/>
                </div>

            </div>
        </div>
    )
}