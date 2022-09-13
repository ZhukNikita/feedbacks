import about from './AboutUs.module.css'
import NavBar from "../NavBar";
import Footer from "../Footer";
export default function AboutUs(){
    return(
        <div className={about.Page}>
            <NavBar/>
            <div className={about.body}>
                <h2>О нас</h2>
            </div>
            <Footer/>
        </div>

    )
}