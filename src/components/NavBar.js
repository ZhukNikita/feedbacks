import {Button} from "@mui/material";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DiamondIcon from "@mui/icons-material/Diamond";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import SettingsIcon from "@mui/icons-material/Settings";
import React from "react";
import bar from "../CssModules/NavBar.module.css";
import {Link} from "react-router-dom";

export default function NavBar(){
    return(
        <div className={bar.NavBar}>
            <Link to='/AboutUs'>
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
            </Link>
            <Link to='/Subscription'>
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
            </Link>
            <Link to='/ProFunction'>
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
            </Link>
            <Link to='/Questions'>
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
            </Link>
            <Link to='/Settings'>
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
            </Link>
        </div>
    )
}