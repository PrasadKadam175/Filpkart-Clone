import { Box, Button, Dialog, DialogContent, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useState } from "react";


import { autheticateSignUp, autheticateLogin } from "../../service/api";


const useStyles = makeStyles({
    component : {
        height : '70vh',
        width : '90vh',
    },
    image : {
        backgroundImage : `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        height : '70vh',
        backgroundRepeat : 'no-repeat',
        backgroundColor : '#2874f0',
        width : '40%',
        backgroundPosition : ' center 85%',
        padding : '45px 35px',
        '& > *' : {
            color : '#ffffff',
            fontWeight : 600,
        }
    },
    login : {
        padding : '25px 35px',
        display : 'flex',
        flex : 1,
        flexDirection : 'column',
        '& > *' : {
            marginTop : 10
        }
    },
    text : {
        color : '#787878',
        fontSize : 12
    },
    loginbtn : {
        textTransform : 'none',
        color : '#ffffff',
        backgroundColor : '#fb641b',
        borderRadius : 2,
        height : 48
    },
    otpbtn : {
        textTransform : 'none',
        color : '#2874f0',
        backgroundColor : '#ffffff',
        borderRadius : 2,
        height : 48,
        boxShadow : '0 2px 4px rgba(0 0 0 / 20%) '
    },
    actiontext : {
        textAlign : 'center',
        margin : 'auto 0 5px 0',
        fontSize : 14,
        fontWeight : 600,
        color : '#2874f0',
        cursor : 'pointer'
    },
    error : {
        color : 'red',
        fontSize : 10,
        marginTop : 10,
        lineHeight : 0,
        fontWeight : 600
    }
})

const initialValue = {
        login : {
            view : 'login',
            heading : 'Login',
            subheading : 'Get access to your Orders, whishlist and Recommendation'
        },
        signup : {
            view : 'signup',
            heading : 'Looks like youre new here!',
            subheading : 'Sign up with your mobile number to get started'
        }
}

const signupInitial = {
    firstname : '',
    lastname : '',
    username : '',
    email : '',
    password : '',
    phone : '',
}
const loginInitial = {
    username : '',
    password : ''
}
const Login = ({open, setOpen, setAccountuser}) => {

    const [ account, setAccount ] = useState(initialValue.login);
    const [ signup, setSignup] = useState(signupInitial);
    const [ login, setLogin ] = useState(loginInitial);
    const [ error, setError ] = useState(false);


    const handleClose = () => {
        setOpen(false);
        setAccount(initialValue.login)
    }

    const toggleAccount = () => {
        setAccount(initialValue.signup)
    }

    const signupUser = async () => {
        let response = await autheticateSignUp(signup);
        if(!response) return;
        handleClose();
        setAccountuser(signup.username);
    }

    const loginUser = async () => {
        let response = await autheticateLogin(login);
        if(!response){
            setError(true);
            return
        } 
        handleClose();
        setAccountuser(login.username)
    }

    const onInputChange = (e) => {
        setSignup({...signup, [e.target.name]: e.target.value});
    }

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value})
    }

    const classes = useStyles();

    return(
        <Dialog open={open} onClose={handleClose}>
            <DialogContent className={classes.component}>
                <Box style={{display : 'flex'}}>
                    <Box className={classes.image}>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{marginTop : 20}}>{account.subheading}</Typography>
                    </Box>
                    {
                        account.view === 'login' ?
                        <Box className={classes.login}>
                        <TextField name="username" label="Enter Username/Email" onChange={(e) => {onValueChange(e)}}/>
                        <TextField name="password" label="Enter password" onChange={(e) => {onValueChange(e)}}/>
                        { error && <Typography className={classes.error}>Invalid username or password</Typography>}
                        <Typography className={classes.text} >By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                        <Button variant="contained" className={classes.loginbtn} onClick={() => loginUser()}>Login</Button>
                        <Typography className={classes.text} style={{textAlign : 'center'}}>Or</Typography>
                        <Button variant="contained" className={classes.otpbtn}>Request OTP</Button>
                        <Typography className={classes.actiontext} onClick={() => {toggleAccount()}}>New to Flipkart? Create an account</Typography>
                    </Box> :
                    <Box className={classes.login}>
                        <TextField name="firstname" label="Enter Firstname" onChange={(e) => {onInputChange(e)}}/>
                        <TextField name="lastname" label="Enter Lastname" onChange={(e) => {onInputChange(e)}}/>
                        <TextField name="username" label="Enter Username" onChange={(e) => {onInputChange(e)}}/>
                        <TextField name="email" label="Enter Email" onChange={(e) => {onInputChange(e)}}/>
                        <TextField name="password" label="Enter password" onChange={(e) => {onInputChange(e)}}/>
                        <TextField name="phone" label="Enter Phone number" onChange={(e) => {onInputChange(e)}}/>
                        <Button variant="contained" onClick={() => signupUser()} className={classes.loginbtn}>SignUp</Button>
                    </Box>
                    }
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default Login;