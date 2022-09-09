import about from './AboutUs.module.css'
import NavBar from "../NavBar";
export default function AboutUs(){
    return(
        <div className={about.Page}>
            <NavBar/>
            <div className={about.body}>
                <h2>О нас</h2>
            </div>
        </div>

    )
}