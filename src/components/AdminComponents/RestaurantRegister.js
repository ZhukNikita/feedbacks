import restaurant from "../../CssModules/RestaurantRegister.module.css";
import Logo from "../Logo";
import React, {useState} from "react";
import {CssTextField} from "../InputStyle";
import useMask from "react-mask-hook";
import {Button, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select} from "@mui/material";
import {Link} from "react-router-dom";
import admin from "./AdminAutho.module.css";
import TermsMessage from "../MessageComponent/TermsMessage";


export default function RestaurantRegister() {
    const [value, setValue] = useState('');
    const [city, setCity] = useState('');
    const [restaurantType, setRestaurantType] = useState('Restaurant');
    const [restaurantName, setRestaurantName] = useState('');
    const [address, setAddress] = useState('');
    const [job, setJob] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(true);
    const [emptyCity, setEmptyCity] = useState('')
    const [emptyTelNumber, setEmptyTelNumber] = useState('')
    const [emptyRestaurantName, setEmptyRestaurantName] = useState('')
    const [emptyAddress, setEmptyAddress] = useState('')
    const [emptyJob, setEmptyJob] = useState('')
    const [messageOn, setMessageOn] = useState(false)
    const handleClose = () => setMessageOn(false);
    const Check = () => {
        if (!city) {
            setEmptyCity(<h5 style={{width: '100%', color: "red"}}>Поле "Город" не может быть пустым</h5>)
        }
        if (!value) {
            setEmptyTelNumber(<h5 style={{width: '100%', color: "red"}}>Поле "Номер телефона" не может быть пустым</h5>)
        }
        if (!address) {
            setEmptyAddress(<h5 style={{width: '100%', color: "red"}}>Поле "Aдрес" не может быть пустым</h5>)
        }
        if (!restaurantName) {
            setEmptyRestaurantName(<h5 style={{width: '100%', color: "red"}}>Поле "Название заведения" не может быть
                пустым</h5>)
        }
        if (!job) {
            setEmptyJob(<h5 style={{width: '100%', color: "red"}}>Поле "Ваша должность" не может быть пустым</h5>)
        }


    }
    const maskProps = useMask({
        value,
        onChange: setValue,
        mask: '+(38#)-###-####-##',
        placeholder: '_',
    })
    const style = {width: '100%', border: '1px solid lightgrey', borderRadius: '12px', marginTop: '10px'}
    return (
        <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div className={restaurant.body}>
                <Logo/>
                <h2 className={restaurant.title}>Регистрация:</h2>
                <CssTextField
                    style={style}
                    name="telephone"
                    label='Номер телефона'
                    type="tel"
                    {...maskProps}
                    inputProps={{
                        maxLength: '30',
                    }}
                />
                {emptyTelNumber}
                <CssTextField
                    onChange={e => setCity(e.target.value)}
                    style={style}
                    name="city"
                    type="text"
                    placeholder="Город"
                    label="Город"
                    inputProps={{
                        maxLength: '30',
                    }}
                    InputProps={{
                        style: {
                            border: 'none'
                        }
                    }}
                />
                {emptyCity}
                <FormControl fullWidth style={{marginTop: '10px'}}>
                    <InputLabel id="demo-simple-select-label">Тип заведения</InputLabel>
                    <Select
                        onChange={e => setRestaurantType(e.target.value)}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Тип заведения"
                        value={restaurantType}
                    >
                        <MenuItem value="Restaurant">Ресторан</MenuItem>
                        <MenuItem value='Cafe'>Кафе</MenuItem>
                        <MenuItem value='Beauty saloon'>Салон красоты</MenuItem>
                    </Select>
                </FormControl>
                <CssTextField
                    onChange={e => setRestaurantName(e.target.value)}
                    style={style}
                    name="name"
                    type="text"
                    placeholder="Название заведения"
                    label="Название заведения"
                    inputProps={{
                        maxLength: '30',
                    }}
                />
                {emptyRestaurantName}
                <CssTextField
                    onChange={e => setAddress(e.target.value)}
                    style={style}
                    name="address"
                    type="text"
                    placeholder="Адрес заведения"
                    label="Адрес заведения"
                    inputProps={{
                        maxLength: '30',
                    }}
                />
                {emptyAddress}
                <CssTextField
                    onChange={e => setJob(e.target.value)}
                    style={style}
                    name="job"
                    type="text"
                    placeholder="Ваша должность"
                    label="Ваша должность"
                    inputProps={{
                        maxLength: '30',
                    }}
                />
                {emptyJob}
                <FormControlLabel
                    style={{width: '100%'}}
                    control={<Checkbox onClick={() => setAgreeTerms(!agreeTerms)} style={{color: 'rgb(103, 58, 183)'}}
                                       defaultChecked/>}
                    label="Я согласен с уловиями пользования"
                />
                {city === '' || value === '' || restaurantName === '' || restaurantType === '' || agreeTerms !== true || address === '' || job === '' ?
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
                    <Link to='/AdminPanel'>
                        <Button variant="contained" style={{
                            margin: '10px',
                            borderRadius: '4px',
                            backgroundColor: 'rgb(103, 58, 183)'
                        }}>Следующий шаг</Button>
                    </Link>
                }
                <hr className={restaurant.hr}/>
                <Link to='/'>Уже есть аккаунт?</Link>
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