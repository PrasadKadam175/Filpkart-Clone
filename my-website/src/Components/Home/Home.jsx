import { Box, makeStyles } from '@material-ui/core'

import Navbar from "./Navbar";
import Banner from './Banner';
import Slide from './Slide'
import Midsection from './Midsection';
import { useSelector, useDispatch } from 'react-redux';

// import { products } from '../../constants/data';
import { getproducts as listProducts } from '../../redux/actions/productAction'
import { useEffect } from 'react';


const useStyles = makeStyles({
    component : {
        padding : 10,
        backgroundColor : '#f2f2f2'
    },
    rightwrapper : {
        background : '#ffffff',
        padding : 5,
        margin : '12px 0 0 10px',
        width : '17%'
    }
})

const Home = () => {
    const classes = useStyles();
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

    const { products } = useSelector(state => state.getProducts );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <div>
        <Navbar />
        <Box className={classes.component}>
        <Banner />
        <Box style={{display : 'flex'}}>
            <Box style={{width : '83%'}}>
                <Slide 
                timer={true}
                title = "Deal of the day"
                products = {products}
                />
            </Box>
            <Box className={classes.rightwrapper}>
                <img src={adURL} style={{width:210}} alt="advertisePic"/>
            </Box>
        </Box>
        <Midsection />
        <Slide 
        timer={false}
        title = 'Discounted item'
        products = {products}
        />
        <Slide 
        timer={false}
        title = 'Suggested item'
        products = {products}
        />
        <Slide 
        timer={false}
        title = 'Top seller item'
        products = {products}
        />
        <Slide 
        timer={false}
        title = 'Recommended item'
        products = {products}
        />
        <Slide 
        timer={false}
        title = 'Best rated item'
        products = {products}
        />
        </Box>
        </div>
    )
}
export default Home;