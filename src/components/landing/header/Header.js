import { Box, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import './Header.css';
export const Header = () => {
    return (

        <div className="container-header" style={{ backgroundImage: "url(https://borizz1414.github.io/dream-factory-react/img/slider.jpg)" }}>
            <Grid container >
                <Grid item md={5}>
                    <Box mt={3} ml={22}>
                        <img src='https://borizz1414.github.io/dream-factory-react/img/logo-dream-factory.png' width="155" />
                    </Box>
                </Grid>
                <Grid item md={7}>
                    <Box mt={10}
                        display="flex"
                        justifyContent="space-around"
                    >
                        <Box mr={3} className="items-menu">
                            <p id="border-bottom">HOME</p>
                        </Box>
                        <Box mr={3} className="items-menu">
                            <p>SERVICES</p>
                        </Box>
                        <Box mr={3} className="items-menu">
                            <p>COMPANY</p>
                        </Box>
                        <Box mr={3} className="items-menu">
                            <p>STONE CARE</p>
                        </Box>
                        <Box mr={3} className="items-menu">
                            <p>CONTACT US</p>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item md={7}>
                    <Box ml={12} mt={14}>
                        <Box className="title">
                            <span>Where dreams come true</span><span id="point">.</span>
                        </Box>
                        <Box className="subtitle">
                            <p>We are the most committed aesthetic consultant in the market, handling highly competitive rates and providing the highest quality from the best professionals in the region, it is our interest to provide an unforgettable experience to our patients through medical tourism, we have highly qualified staff to offer the best medical and tourist consulting in the market. "Dream Factory VIP" your best choice.</p>
                        </Box>
                    </Box>

                </Grid>
                <Grid item md={5}>
                    <Box p={5}
                        display="flex"
                        justifyContent="center">
                        <Card className="card">
                            <Box pl={3}>
                                <Box pt={4}>
                                    <h2>Contact us</h2>
                                    <p>Complete the fields below and contact us</p>
                                </Box>
                                <Box display="flex"
                                    flexDirection="column"
                                    pr={5}
                                    pl={2}>
                                        <Box mt={3}>        <TextField  className="standard-basic" label="Name" /></Box>
                                        <Box mt={3}>  <TextField  className="standard-basic" label="Email" /></Box>
                                   
                                    <Box mt={3} ><TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          width="100%"
          variant="outlined"
        /></Box>

                            <Box mt={8}
                                 mb={8}
                                display="flex"
                                justifyContent="center"><Button id="btn">Send</Button></Box>
                                </Box>
                            </Box>
                        </Card>
                    </Box>
                </Grid>
            </Grid>
        </div>

    )
}
