
import { Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { ShoppingCart as Cart, FlashOn as Flash } from '@material-ui/icons';
import { addToCart } from "../../redux/actions/cartAction";
import { useDispatch }   from 'react-redux';


import clsx from "clsx";

const useStyles = makeStyles({
    leftContainer : {
        padding : '40px 0 0 80px'
    },
    image : {
        width : '95%',
        padding : '15px 20px',
        border : '1px solid #f0f0f0'
    },
    button : {
        height : 50,
        width : '46%',
        color : '#fff',
        borderRadius : 2
    },
    addTocart : {
        background : '#ff9f00',
        marginRight : 10
    },
    buyNow : {
        background : '#fb641b'
    }
})

const ActionItems = ({ product }) => {

    const classes = useStyles();

    const dispatch = useDispatch();

    const addItemToCart = () => {
        dispatch(addToCart(product.id))
    }

    return(
        <Box className={classes.leftContainer}>
            <img src={product.detailUrl} className={classes.image} alt="productImage"/>
            <Button onClick={() =>  addItemToCart()} variant="contained" className={clsx(classes.button, classes.addTocart)}><Cart />Add to Cart</Button>
            <Button variant="contained" className={clsx(classes.button, classes.buyNow)}><Flash />Buy now</Button>
        </Box>
    )
}

export default ActionItems;