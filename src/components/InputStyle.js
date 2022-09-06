import {withStyles} from "@material-ui/core/styles";
import {TextField} from "@mui/material";

export const CssTextField = withStyles({
    root: {
        color: 'black',
        '& label.Mui-focused': {
            color: 'blue',
            background: 'white',
        },
        '& label': {
            background: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '& input': {
                borderRadius: '12px',
                zIndex: '0',
                width: '100%'
            },
            '&.Mui-focused input': {
                color: 'black',
                borderColor: 'blue',
                borderRadius: '12px',
            },
            '& fieldset': {
                border: 'none',
            },
        },
    },
})(TextField);
export const NameTextField = withStyles({
    root: {
        color: 'black',
        '& label.Mui-focused': {
            color: 'blue',
            backgroundColor: 'white',
        },
        '& label': {
            backgroundColor: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '& input': {
                border: '1px solid lightgrey',
                borderRadius: '12px',
                width: '100%',
                zIndex: '0',
            },
            '&.Mui-focused input': {
                color: 'black',
                borderColor: 'blue',
                borderRadius: '12px',
            },
            '& fieldset': {
                border: 'none',
            },
        },
    },
})(TextField);