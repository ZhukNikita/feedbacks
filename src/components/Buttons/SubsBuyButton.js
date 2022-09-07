import {Button} from "@mui/material";
import React from "react";
export const SubsBuyButton = ({onClick}) =>{
    return(
        <Button
        sx={() => ({
            margin: '15px',
            borderRadius: '8px',
            color: 'rgb(183, 129, 3)',
            backgroundColor: 'rgb(255, 247, 205)',
            fontWeight: 'bold',
            '&:hover': {
                background: `rgb(206, 190, 107)`,
            },
            })}
            variant="contained"
            onClick={onClick}
        >Buy
        </Button>)
}
