import subs from './SubscriptionPage.module.css';
import SubsTable from "./SubsTable";
import React from "react";
import {SubsBuyButton} from "../Buttons/SubsBuyButton";
import NavBar from "../NavBar";

export default function SubscriptionPage() {
    return (
        <div style={{width:'100%', height:'100%' ,display:'flex' , justifyContent:'center', alignItems:'center'}}>
            <div className={subs.Page}>
                <NavBar/>
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
        </div>
    )
}