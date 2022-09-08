import React, {useState} from "react";
import Logo from "../Logo";
import admin from './AdminAutho.module.css'
import {FaceBook} from "../Buttons/FaceBookButton";
import {Google} from "../Buttons/GoogleButton";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";
import {CssTextField} from "../InputStyle";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import TermsMessage from "../MessageComponent/TermsMessage";


export default function AdminAutho() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordVis, setPassVis] = useState('password')
    const [messageOn, setMessageOn] = useState(false)
    const [emptyPass, setEmptyPass] = useState('')
    const [emptyInput, setEmptyInput] = useState('')
    const handleClose = () => setMessageOn(false);
    const Check = () => {
        if (!email) {
            setEmptyInput(' Email некорректный')
        }
        if (!password) {
            setEmptyPass('Пароль некорректный')
        }

    }
    const style = {width: '100%', border: '1px solid lightgrey', borderRadius: '12px'}
    return (
        <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div className={admin.body}>
                <Logo/>
                <h2 className={admin.title}>Здравствуйте ,<br/> войти с помощью:</h2>
                <div>
                    <FaceBook/>
                    <Google/>
                </div>
                <div className={admin.hr}>
                    <hr/>
                    <span>Или</span>
                    <hr/>
                </div>
                <CssTextField
                    style={style}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    type="email"
                    placeholder="someemail@email.com"
                    label="Email Address"
                    defaultValue="someemail@email.com"
                    inputProps={{
                        maxLength: '30',
                    }}

                />
                <h5 style={{width: '100%', color: "red"}}>{emptyInput}</h5>
                <CssTextField
                    onChange={e => setPassword(e.target.value)}
                    style={style}
                    name="password"
                    type={passwordVis}
                    placeholder="password"
                    defaultValue='123456'
                    label="Password"
                    margin='normal'
                    inputProps={{
                        maxLength: '30',
                    }}
                    InputProps={{
                        endAdornment:
                            passwordVis === 'password'
                                ?
                                <RemoveRedEyeIcon style={{cursor: 'pointer'}} onClick={() => setPassVis('text')}/>
                                :
                                <VisibilityOffIcon style={{cursor: 'pointer'}} onClick={() => setPassVis('password')}/>
                    }}
                />
                <h5 style={{margin: '0', width: '100%', color: "red"}}>{emptyPass}</h5>
                <Link to='/ForgotPassword'>
                    Забыли пароль?
                </Link>
                {email === '' || password === '' ?
                    <Link to='#'>
                        <Button
                            onClick={Check}
                            variant="outlined"
                            style={{
                                margin: '10px',
                                borderRadius: '4px',
                                borderColor: 'rgb(103, 58, 183)',
                                color: 'rgb(103, 58, 183)'
                            }}>Отправить</Button>
                    </Link>
                    :
                    <Link to='/AdminPanel'>
                        <Button variant="contained" style={{
                            margin: '10px',
                            borderRadius: '4px',
                            backgroundColor: 'rgb(103, 58, 183)'
                        }}>Отправить</Button>
                    </Link>
                }
                <Link to='/AdminRegister'>
                    Зарегистрироваться?
                </Link>
                <h4 className={admin.info} onClick={() => {
                    setMessageOn(!messageOn)
                }}>Условия использования</h4>
                {
                    messageOn && (
                        <TermsMessage handleClose={handleClose}/>
                    )
                }
            </div>
        </div>
    )
}