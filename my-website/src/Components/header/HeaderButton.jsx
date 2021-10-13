import { Box, makeStyles, Button, Typography, Badge } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { ShoppingCart } from '@material-ui/icons';
import { useState, useContext } from 'react';

//components
import Login from '../login/Login';
import { LoginContext } from '../../context/ContextProvider'
import Profile from './Profile';

const useStyles = makeStyles({
    login : {
        backgroundColor : '#ffffff',
        color : '#2874f0',
        textTransform : 'none',
        borderRadius : 2,
        padding: '5px 40px',
        boxShadow : 'none',
    },
    wrapper : {
        margin : '0 7% 0 auto',
        display : 'flex',
        '& > *' : {
            marginRight : 50,
            alignItems : 'center',
            textDecoration : 'none',
            color : '#fff'
        }
    },
    container : {
        display : 'flex',

    }
})

const HeaderButton = () => {
    const classes = useStyles();
    const [ open, setOpen ] = useState(false);
    const { account , setAccountuser } = useContext(LoginContext)

    const openLoginDialog = () => {
        setOpen(true);
    }
    return (
        <Box className={classes.wrapper}>
            {
                account ? <Profile account={account} setAccountuser={setAccountuser} /> :
            <Link to="/">
                <Button variant ='contained' onClick={() => openLoginDialog()} className={classes.login}>Login</Button>
            </Link>
            }
            <Link to="/"><Typography style={{marginTop : 5 }}>More</Typography></Link>
            <Link to="/cart" className={classes.container}>
            <Badge badgeContent={4} color="secondary">
                <ShoppingCart />
            </Badge>
                <Typography style={{marginLeft : 10}}>Cart</Typography>
            </Link>
            <Login open={open} setOpen={setOpen} setAccountuser={setAccountuser}/>
        </Box>
    )
}

export default HeaderButton;