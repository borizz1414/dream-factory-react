import React from 'react'
import './Blog.css'
import {Box} from '@material-ui/core'
import Card from '@material-ui/core/Card'
export const Blog = () => {
    return (
        <>
             <Box display="flex"
                 justifyContent="center"
                 flexDirection="column"
                 alignItems="center"
                 mb={3}>
                <h1>Blog</h1>
                <p id="li">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </Box>
            <Box>
                <Box display="flex"
                justifyContent="space-around">
                    <Card id="card-blog">
                       
                        <Box className="img-blog">
                            
                        </Box>
                        <Box p={4}>
                        <Box className="dental-health">
                        
                            DENTAL HEALTH
                        </Box>
                        <Box>
                        
                            <h1>Lorem ipson dolor</h1>
                            </Box>
                           
                            <p id="li">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                            <Box mt={4}>
                            <p>2 Abril, 2020</p>
                            </Box>
                       
                        </Box>
                    </Card>
                    <Card id="card-blog">
                       
                       <Box className="img-blog">
                           
                       </Box>
                       <Box p={4}>
                       <Box className="dental-health">
                        
                        DENTAL HEALTH
                    </Box>
                       <Box>
                       
                           <h1>Lorem ipson dolor</h1>
                           </Box>
                           <p id="li">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                           <Box mt={4}>
                           <p>2 Abril, 2020</p>
                           </Box>
                      
                       </Box>
                   </Card>
                   <Card id="card-blog">
                       
                       <Box className="img-blog">
                           
                       </Box>
                       <Box p={4}>
                       <Box className="dental-health">
                        
                        DENTAL HEALTH
                    </Box>
                       <Box>
                       
                           <h1>Lorem ipson dolor</h1>
                           </Box>
                           <p id="li">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                           <Box mt={4}>
                           <p>2 Abril, 2020</p>
                           </Box>
                      
                       </Box>
                   </Card>
                   <Card id="card-blog">
                       
                       <Box className="img-blog">
                           
                       </Box>
                       <Box p={4}>
                       <Box className="dental-health">
                        
                        DENTAL HEALTH
                    </Box>
                       <Box>
                       
                           <h1>Lorem ipson dolor</h1>
                           </Box>
                           <p id="li">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                           <Box mt={4}>
                           <p>2 Abril, 2020</p>
                           </Box>
                      
                       </Box>
                   </Card>
                </Box>
            </Box>
        </>
    )
}
