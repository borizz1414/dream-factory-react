import React from 'react'
import './Plans.css';
import {Box, Card} from '@material-ui/core'
import Button from '@material-ui/core/Button'
export const Plans = () => {
    return (
        <>
             <Box className="container-plans">
             <Box display="flex"
                 justifyContent="center"
                 flexDirection="column"
                 alignItems="center"
                 mb={3}>
                <h1>Plastic Aesthetic surgery plans</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </Box>
            <Box px={5}
                 mb={4}
                 display="flex"
                 justifyContent="space-around">
                <Card className="card-plans">
                    <Box p={2}>
                    <Box borderBottom="2px solid #A57D24">
                        <h1>Basic</h1>
                    </Box>
                    <Box>
                        <Box mt={2}><p>Lipo 360</p></Box>
                        <Box mt={2}><p>Breast Lift</p></Box>
                        <Box mt={2}><p>BBL</p></Box>
                        <Box mt={2}><p>Loding in a recovery home</p></Box>
                        <Box mt={2}><p>Medical insurance</p></Box>
                        <Box mt={2}><p>Local transportation</p></Box>
                        <Box mt={2}><p>Exams and laboratory</p></Box>
                        <Box mt={2}><p>Blood and reserve</p></Box>
                        <Box mt={2}><p>5 post-surgical massages</p></Box>
                        <Box mt={2}><p>Covid-19 test</p></Box>
                        <Box mt={2}><p>1 Shaper</p></Box>

                    </Box>
                    <Box display="flex"
                         justifyContent="center"
                         mt={4}>
                        <Button id="btn-plan">
                            Adquire Plan
                        </Button>
                    </Box>
                    </Box>
                   
                </Card>
                <Card className="card-plans">
                    <Box p={2}>
                    <Box borderBottom="2px solid #A57D24">
                        <h1>Premium</h1>
                    </Box>
                    <Box>
                        <Box mt={2}><p>Lipo 360</p></Box>
                        <Box mt={2}><p>Breast Lift</p></Box>
                        <Box mt={2}><p>BBL</p></Box>
                        <Box mt={2}><p>Loding in a recovery home</p></Box>
                        <Box mt={2}><p>Medical insurance</p></Box>
                        <Box mt={2}><p>Local transportation</p></Box>
                        <Box mt={2}><p>Exams and laboratory</p></Box>
                        <Box mt={2}><p>Blood and reserve</p></Box>
                        <Box mt={2}><p>5 post-surgical massages</p></Box>
                        <Box mt={2}><p>Covid-19 test</p></Box>
                        <Box mt={2}><p>1 Shaper</p></Box>

                    </Box>
                    <Box display="flex"
                         justifyContent="center"
                         mt={4}>
                        <Button id="btn-plan">
                            Adquire Plan
                        </Button>
                    </Box>
                    </Box>
                   
                </Card>
                <Card className="card-plans">
                    <Box p={2}>
                    <Box borderBottom="2px solid #A57D24">
                        <h1>Special</h1>
                    </Box>
                    <Box>
                        <Box mt={2}><p>Lipo 360</p></Box>
                        <Box mt={2}><p>Breast Lift</p></Box>
                        <Box mt={2}><p>BBL</p></Box>
                        <Box mt={2}><p>Loding in a recovery home</p></Box>
                        <Box mt={2}><p>Medical insurance</p></Box>
                        <Box mt={2}><p>Local transportation</p></Box>
                        <Box mt={2}><p>Exams and laboratory</p></Box>
                        <Box mt={2}><p>Blood and reserve</p></Box>
                        <Box mt={2}><p>5 post-surgical massages</p></Box>
                        <Box mt={2}><p>Covid-19 test</p></Box>
                        <Box mt={2}><p>1 Shaper</p></Box>

                    </Box>
                    <Box display="flex"
                         justifyContent="center"
                         mt={4}>
                        <Button id="btn-plan">
                            Adquire Plan
                        </Button>
                    </Box>
                    </Box>
                   
                </Card>
            </Box>
            </Box>
            <Box display="flex"
                 justifyContent="center"
                 flexDirection="column"
                 alignItems="center" className="container-slider" style={{ backgroundImage: "url(/img/hotel1.jpg)" }}>
            <Box >
                <h1 id="ibis-hotel">
                    IBIS Hotel
                </h1>
            </Box>
            <Box px={30}>
            <p id="p-ibis">Theyare not pigmented with dark drinks or the use of tobacco, additionally the preparation of the dental structure is minimal and minimally invasive (the state of the patient's teeth must be taken into account before performing the procedure) and also has a 10-year guarantee backed by our partner clinics.</p>
              
            </Box>
            </Box>
        </>
    )
}
