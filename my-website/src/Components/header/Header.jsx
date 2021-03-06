
import { AppBar, Toolbar, makeStyles, Typography, Box , withStyles} from '@material-ui/core';
import { Link } from 'react-router-dom'

//importing componets here
import SearchBar from './SearchBar';
import HeaderButton from './HeaderButton';

const useStyles = makeStyles({
    header : {
        background : '#2874f0',
        height : 55
    },
    logo:{
        width : 75,
    },
    sublogo: {
        width : 10,
        height : 10,
        marginLeft : 4,
    },
    container : {
        display : 'flex',
    },
    subheading : {
        fontSize : 10,
        fontStyle : 'italic',
    },
    component : {
        marginLeft : '12%',
        lineHeight : 0,
        textDecoration : 'none',
        color : '#fff',
    }
})

const ToolBar = withStyles({
    root : {
        minHeight : 55,
    }
})(Toolbar);

const Header = () => {
    const classes = useStyles();
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return (
        <AppBar className={classes.header}>
            <ToolBar>
                <Link to="/" className={classes.component}>
                    <img src={logoURL} className={classes.logo}alt='logo'/>
                    <Box className={classes.container}>
                    <Typography className={classes.subheading}>Explore <Box component='span' style={{color:'#ffe500'}}>Plus</Box></Typography>
                    <img src={subURL} className={classes.sublogo} alt='sub-url' />
                    </Box>
                </Link>
                <SearchBar />
                <HeaderButton />
            </ToolBar>
        </AppBar>
    )
}

export default Header
