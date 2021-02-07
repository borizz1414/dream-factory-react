import { Box, Grid } from '@material-ui/core';
import './Header.css';
export const Header = () => {
    return (
       
        <Grid container className="container-header" style={{ backgroundImage: "url(/img/slider.jpg)" }}>
            <Grid item md={4}>
                <Box mt={8} ml={24}>
                    <img src='/img/logo-dream-factory.png' width="155"/>
                </Box>
            </Grid>
            <Grid item md={8}>
                <Box mt={20} >
                    <Box className="items-menu">
                        <p>HOME</p>
                    </Box>
                </Box>
            </Grid>
           
        </Grid>
       
    )
}
