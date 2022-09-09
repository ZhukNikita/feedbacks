import pro from './ProFucntions.module.css'
import NavBar from "../NavBar";
export default function ProFunctions(){
    return(
        <div className={pro.Page}>
            <NavBar/>
            <div className={pro.body}>
                <h2>Функции Pro</h2>
            </div>
        </div>

    )
}