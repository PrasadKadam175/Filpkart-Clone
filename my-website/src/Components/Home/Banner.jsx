
import Carousel from 'react-material-ui-carousel';
import { bannerData } from '../../constants/data';
import { makeStyles,  } from '@material-ui/core';


const usestyles = makeStyles({
    img : {
        width : '100%',
    },
    carousel : {
        marginTop : 10
    }
})

const Banner = () => {
    const classes = usestyles();
    return(
        <Carousel 
        autoplay={true} 
        animation="slide" 
        indicators={false}
        cycleNavigation={true}
        navButtonsAlwaysVisible={true}
        navButtonsProps = {
            {
                style : {
                    backgroundColor : '#ffffff',
                    color : '#949494',
                    borderRadius : 0,
                    margin : 0
                }
            }
        }
        className={classes.carousel}
        >
            
            {
                bannerData.map(image => (
                    <img src={image} alt="banner images" className={classes.img} />
                ))
            }
        </Carousel>
    )
}

export default Banner;