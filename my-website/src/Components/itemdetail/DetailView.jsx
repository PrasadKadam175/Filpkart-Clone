import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductDetails } from "../../redux/actions/productAction";
import { Box, makeStyles, Typography, Table, TableBody, TableRow, TableCell } from "@material-ui/core";
import { LocalOffer as Offerbadge } from '@material-ui/icons';
import clsx from 'clsx';
import ActionItems from "./ActionItem";

const useStyle = makeStyles({
    component : {
        marginTop : 55,
        background : '#f2f2f2'
    },
    container : {
        margin : '0 80px',
        background : '#ffffff',
        display : 'flex'
    },
    rightcontainer : {
        marginTop : 50,
        '& > *' : {
            marginTop : 10
        }
    },
    smalltext : {
        fontSize : 14,
        verticalAlign : 'baseline',
        '& > *' : {
            fontSize : 14,
            marginTop : 10
        }
    },
    greyTextColor : {
        color : '#787878',
    },
    price : {
        fontWeight : 600,
    },
    badge :{
        fontSize : 14,
        marginRight : 10,
        color : '#00cc00'
    }
})

const DetailView = ( { match } ) => { 

    const { product } = useSelector(state =>  state.getProductDetails);

    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000))

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductDetails(match.params.id));
    }, )

    const classes = useStyle();
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const sellerURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    return(
        <Box className={classes.component}>
            {
                product && Object.keys(product).length &&
            
            <Box className={classes.container}>
                <Box style={{minWidth : '40%'}}>
                    <ActionItems product={product}/>
                </Box>
                <Box className={classes.rightcontainer}>
                    <Typography>{product.title.longTitle}</Typography>
                    <Typography className={clsx(classes.smalltext,classes.greyTextColor)}>
                        8 Rating & 1 Review
                        <span><img src={fassured} style={{width : 77, marginLeft : 20}}alt="assueredimage"/></span>
                    </Typography>
                    <Typography>
                        <span className={classes.price}>₹{product.price.cost}</span> &nbsp;&nbsp;&nbsp;
                        <span className={classes.greyTextColor}><strike>₹{product.price.mrp}</strike></span> &nbsp;&nbsp;&nbsp;
                        <span style={{color : '#388e3c'}}>{product.price.discount}off</span>
                    </Typography>
                    <Typography style={{ marginTop : 20, fontWeight : 600}}>Available offers</Typography>
                <Box className={classes.smalltext}>
                    <Typography><Offerbadge className={classes.badge}/>Special PriceGet extra 10% off (price inclusive of discount)</Typography>
                    <Typography><Offerbadge className={classes.badge}/>Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card</Typography>
                    <Typography><Offerbadge className={classes.badge}/>Bank Offer20% off on 1st txn with SBI Cards and Mobikwik</Typography>
                    <Typography><Offerbadge className={classes.badge}/>Bank Offer10% Off on Bank of Baroda Mastercard</Typography>
                </Box>
                <Table>
                    <TableBody>
                        <TableRow className={classes.smalltext}>
                            <TableCell className={classes.greyTextColor}>Delivery</TableCell>
                            <TableCell style={{fontWeight : 600}}>{date.toDateString()} | ₹40 </TableCell>
                        </TableRow>
                        <TableRow className={classes.smalltext}>
                            <TableCell className={classes.greyTextColor}>Warranty</TableCell>
                            <TableCell>No Warranty</TableCell>
                        </TableRow>
                        <TableRow className={classes.smalltext}>
                            <TableCell className={classes.greyTextColor}>Seller</TableCell>
                            <TableCell className={classes.smalltext}>
                                <span style={{color : '#2874f0'}}>SuperCom</span>
                                <Typography>GST invoice available</Typography>
                                <Typography>14 Days return policy</Typography>
                                <Typography>View more seller starting from ₹399</Typography>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>
                                <img src={sellerURL} style={{width: '65%'}}alt="sellimage" />
                            </TableCell>
                        </TableRow>
                        <TableRow className={classes.smalltext}>
                            <TableCell className={classes.greyTextColor}>Description</TableCell>
                            <TableCell>{product.description}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                </Box>
            </Box>
            }
        </Box>
    )
}


export default DetailView;