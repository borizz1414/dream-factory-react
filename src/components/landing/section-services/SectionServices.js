import React from 'react'
import './SectionServices.css';
import {Box, Grid} from '@material-ui/core'
import Button from '@material-ui/core/Button'
export const SectionServices = () => {
    return (
        <>
            <Box display="flex"
                 justifyContent="center"
                 flexDirection="column"
                 alignItems="center"
                 mb={3}>
                <h1>Services</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </Box>
            <Box className="container-card"
                 display="flex">
                     <Box className="text-card"
                          >
                <Box 
                     display="flex"
                     alignItems="center"
                     className="container-text"
                     >
                    <Box ml={3}>
                    <h1 className="color-title">01.</h1>
                    </Box>
                    <Box ml={4}>
                    <p className="color-subtitle">Porcelain Smile Desing</p>
</Box>  
                </Box>
                <Box px={4}>
                    <p>Porcelain smile designs are highly sought after for their durability that is over 10 years, being very resistant to fractures, they do not lose their original color, they are not pigmented with dark drinks or the use of tobacco, additionally the preparation of the dental structure is minimal and minimally invasive (the state of the patient's teeth must be taken into account before performing the procedure) and also has a 10-year guarantee backed by our partner clinics.</p>
                </Box>
                <Box  display="flex"
                            justifyContent="center"
                            mt={10}>

                    <Button id="btn-outline">
                    Make an appointment
                    </Button>
                </Box>
                <Box>

                </Box>
                </Box>
                <Box className="img-card">
                    <img src='img/PorcelainSmileDesing.jpg' width="100%"/>
                </Box>
            </Box>
            <Box className="container-card"
                 display="flex">
                   
                <Box className="img-card">
                    <img src='img/Highaestheticresin.jpg' width="100%"/>
                </Box>
                <Box className="text-card"
                          >
                <Box 
                     display="flex"
                     alignItems="center"
                     className="container-text"
                     >
                    <Box ml={3}>
                    <h1 className="color-title">02.</h1>
                    </Box>
                    <Box ml={4}>
                    <p className="color-subtitle">High aesthetic resin smile design</p>
</Box>  
                </Box>
                <Box px={4}>
                    <p>It is a procedure that is performed directly, they are highly used techniques to give the desired effects of our patients in terms of the color, size and perfection of their smile, it is not an expensive procedure and with satisfactory results are achieved, its durability following the Suggested care is from 5 to 8 years, however, it requires a minimum maintenance every 4 to 6 months to maintain the desired results (all treatments are subject to the state of the teeth of our patients).</p>
                </Box>
                <Box  display="flex"
                            justifyContent="center"
                            mt={10}>

                    <Button id="btn-outline">
                    Make an appointment
                    </Button>
                </Box>
                <Box>

                </Box>
                </Box>
            </Box>
            <Box className="container-card"
                 display="flex">
                     <Box className="text-card"
                          >
                <Box 
                     display="flex"
                     alignItems="center"
                     className="container-text"
                     >
                    <Box ml={3}>
                    <h1 className="color-title">03.</h1>
                    </Box>
                    <Box ml={4}>
                    <p className="color-subtitle">Oral rehabilitation</p>
</Box>  
                </Box>
                <Box px={4}>
                    <p>All procedures must be evaluated directly with our professionals and all procedures depend on the explicit need of each of our patients. Certain exams may be required to diagnose and carry out adequate rehabilitation.</p>
                </Box>
                <Box  display="flex"
                            justifyContent="center"
                            mt={10}>

                    <Button id="btn-outline">
                    Make an appointment
                    </Button>
                </Box>
                <Box>

                </Box>
                </Box>
                <Box className="img-card">
                    <img src='img/Oralrehabilitation.jpg' width="100%"/>
                </Box>
            </Box>
            <Box className="container-card"
                 display="flex">
                     
                <Box className="img-card">
                    <img src='img/Aestheticplastic.jpg' width="100%"/>
                </Box>
                <Box className="text-card"
                          >
                <Box 
                     display="flex"
                     alignItems="center"
                     className="container-text"
                     >
                    <Box ml={3}>
                    <h1 className="color-title">04.</h1>
                    </Box>
                    <Box ml={4}>
                    <p className="color-subtitle">Aesthetic plastic surgery</p>
</Box>  
                </Box>
                <Box px={4}>
                    <p>The objective of cosmetic surgery is to correct and / or modify body disproportions, in order to bring them closer to the sociocultural beauty parameters, "Dream Factory" has agreements with the most prominent cosmetic surgeons in the region (Cali-Colombia) and the Dominican Republic through our commercial partner Bellavita.</p>
                </Box>
                <Box  display="flex"
                            justifyContent="center"
                            mt={10}>

                    <Button id="btn-outline">
                    Make an appointment
                    </Button>
                </Box>
                <Box>

                </Box>
                </Box>
            </Box>
            <Box display="flex"
                 justifyContent="center"
                 flexDirection="column"
                 alignItems="center"
                 mb={3}>
                <h1>Results</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </Box>
            <Box>
            <img className="img-results" src="img/results1.jpg"/>
            <img className="img-results"src="img/results2.jpg"/>
            <img className="img-results"src="img/results3.jpg"/>
            <img className="img-results"src="img/results4.jpg"/>
            <img className="img-results"src="img/results5.jpg"/>
            </Box>
            <Box>
            <img className="img-results"src="img/results6.jpg"/>
            <img className="img-results"src="img/results7.jpg"/>
            <img className="img-results"src="img/results8.jpg"/>
            <img className="img-results"src="img/results9.jpg"/>
            <img className="img-results"src="img/results10.jpg"/>
            </Box>

        </>
    )
}
