import { Box, makeStyles } from "@material-ui/core";
import { ImageURL } from "../../constants/data";

const useStyles = makeStyles({
    wrapper : {
        display : 'flex',
        justifyContent : 'space-between',
        marginTop : 20,
    }
})

const Midsection = () => {
    const classes = useStyles();
    const coronaURL = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return(
        <>
        <Box className={classes.wrapper}>
            {
                ImageURL.map(image => (
                    <img src={image} alt="speacialimage" style={{width : '33%'}}/>
                ))
            }
        </Box>
        <img src={coronaURL} alt="coronawarrior" style={{width : '100%', marginTop : '20px'}}/>
        </>
    )
}

export default Midsection;