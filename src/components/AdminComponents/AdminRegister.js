import React, {useState} from 'react'
import admin from './AdminRegister.module.css'
import Logo from "../Logo";
import {CssTextField, NameTextField} from "../InputStyle";
import PasswordStrength from "../PasswordStrength";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {Link} from "react-router-dom";
import {Button} from "@mui/material";

export default function AdminRegister() {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [passwordVis, setPassVis] = useState('password')
    const [confirmPassVis, setConfirmPassVis] = useState('password')
    const [emptyPass, setEmptyPass] = useState('')
    const [emptyConfirmPass, setEmptyConfirmPass] = useState('')
    const [emptyInput, setEmptyInput] = useState('')
    const [emptyName, setEmptyName] = useState('')
    const [emptySurname, setEmptySurname] = useState(null)
    const Check = () => {
        if (!name) {
            setEmptyName(<h5 style={{width: '100%', color: "red"}}>Поле "Имя" не может быть пустым</h5>)
        }
        if (!surname) {
            setEmptySurname(<h5 style={{width: '100%', color: "red"}}>Поле "Фамилия" не может быть пустым</h5>)
        }
        if (!confirmPass || confirmPass !== password) {
            setEmptyConfirmPass('Поле "Повторить пароль" не совпадает или пустое')
        }
        if (!email) {
            setEmptyInput(' Email некорректный')
        }
        if (!password) {
            setEmptyPass('Password некорректный')
        }

    }

    return (
        <div style={{width:'100%' , height:'100%' , display:'flex' , justifyContent:'center', alignItems:'center'}}>
            <div className={admin.body}>
                <Logo/>
                <h2 style={{color: 'rgb(103, 58, 183)'}}>Регистрация:</h2>
                <div className={admin.name}>
                    <NameTextField
                        onChange={e => setName(e.target.value)}
                        style={{marginTop: '10px', marginBottom: '10px', marginRight: '3px'}}
                        id="demo-helper-text-misaligned-no-helper"
                        label="Имя"
                        helperText={emptyName}
                        inputProps={{
                            maxLength: '30',
                        }}
                    />
                    <NameTextField
                        onChange={e => setSurname(e.target.value)}
                        style={{marginTop: '10px', marginBottom: '10px', marginLeft: '3px'}}
                        id="demo-helper-text-misaligned-no-helper"
                        label="Фамилия"
                        helperText={emptySurname}
                        inputProps={{
                            maxLength: '30',
                        }}
                    />
                </div>
                <CssTextField
                    onChange={e => setEmail(e.target.value)}
                    style={{width: '100%', border: '1px solid lightgrey', borderRadius: '12px'}}
                    name="email"
                    type="email"
                    placeholder="someemail@email.com"
                    label="Email Address"
                    inputProps={{
                        maxLength: '30',
                    }}
                />
                <h5 style={{width: '100%', color: "red"}}>{emptyInput}</h5>
                <CssTextField
                    onChange={e => setPassword(e.target.value)}
                    style={{width: '100%', border: '1px solid lightgrey', borderRadius: '12px'}}
                    name="password"
                    type={passwordVis}
                    placeholder="password"
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
                <h5 style={{width: '100%', color: "red"}}>{emptyPass}</h5>
                <CssTextField
                    onChange={e => setConfirmPass(e.target.value)}
                    style={{width: '100%', border: '1px solid lightgrey', borderRadius: '12px'}}
                    name="Confirm password"
                    type={confirmPassVis}
                    placeholder="Confirm password"
                    label=" Confirm Password"
                    margin='normal'
                    inputProps={{
                        maxLength: '30',
                    }}
                    InputProps={{
                        endAdornment:
                            confirmPassVis === 'password'
                                ?
                                <RemoveRedEyeIcon style={{cursor: 'pointer'}} onClick={() => setConfirmPassVis('text')}/>
                                :
                                <VisibilityOffIcon style={{cursor: 'pointer'}}
                                                   onClick={() => setConfirmPassVis('password')}/>
                    }}
                />
                <h5 style={{width: '100%', color: "red"}}>{emptyConfirmPass}</h5>
                <PasswordStrength password={password}/>

                {email === '' || password === '' || confirmPass !== password || name === '' || surname === '' ?
                    <Link to='#'>
                        <Button
                            onClick={Check}
                            variant="outlined"
                            style={{
                                margin: '10px',
                                borderRadius: '4px',
                                borderColor: 'rgb(103, 58, 183)',
                                color: 'rgb(103, 58, 183)'
                            }}>Следующий шаг</Button>
                    </Link>
                    :
                    <Link to='/RestaurantRegister'>
                        <Button variant="contained" style={{
                            margin: '10px',
                            borderRadius: '4px',
                            backgroundColor: 'rgb(103, 58, 183)'
                        }}>Следующий шаг</Button>
                    </Link>
                }
            </div>
        </div>
    )
}