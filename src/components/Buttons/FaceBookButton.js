import React from 'react';
import FacebookAuth from 'react-facebook-auth';
import autho from "../../CssModules/RatingAutho.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";

const MyFacebookButton = ({onClick}) => (
    <button onClick={onClick} className={autho.facebook}>
        <FacebookIcon style={{marginLeft: '2px', width: '25px', height: '25px', color: "white"}}/>
        Sign in with Facebook
    </button>
);

const authenticate = (response) => {
    console.log(response);
};

export const FaceBook = () => (
    <div>
        <FacebookAuth
            appId="<app-id>"
            callback={authenticate}
            component={MyFacebookButton}
        />
    </div>
);