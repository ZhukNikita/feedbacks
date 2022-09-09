import settings from './Settings.module.css'
import NavBar from "../NavBar";
export default function Settings(){
    return(
        <div className={settings.Page}>
            <NavBar/>
            <div className={settings.body}>
                <h2>Настройки</h2>
            </div>
        </div>

    )
}