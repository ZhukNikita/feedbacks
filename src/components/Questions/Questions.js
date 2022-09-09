import questions from './Questions.module.css'
import NavBar from "../NavBar";
export default function Questions(){
    return(
        <div className={questions.Page}>
            <NavBar/>
            <div className={questions.body}>
                <h2>Вопросы</h2>
            </div>
        </div>

    )
}