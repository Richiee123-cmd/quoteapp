import { Box, Button, IconButton, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios';
import CachedIcon from '@mui/icons-material/Cached';
import CircularProgress from '@mui/material/CircularProgress';
export default function Randomcode() {
    
        const [quote,setQuote]=useState(null);
        const [loading,setLoading]=useState(false)


        const getRandomQuote = async ()=>{


        axios.get('https://dummyjson.com/quotes/random')
        .then((response)=>{
            setLoading(true);
            setTimeout(()=>{
            setQuote(response.data);
            setLoading(false);
            },2000);
    })
        .catch((error)=>{
            console.log(error);
        })
      };
  return (
    <Box sx={{p:2,backgroundColor:"#f8bbd0"}}>
        <Box sx={{display:"flex",justifyContent:"end"}}>
            {loading?( 
                 <Box sx={{ display: 'flex',justifyContent:"center",alignItems:"centre" }}>
                 <CircularProgress  size={20}/>
                 </Box>):
            ( <Tooltip title="Click to refresh" arrow placement='top'>

            
               <IconButton color='="primary' onClick={getRandomQuote}>
             <CachedIcon/>
             </IconButton>

             </Tooltip>)}
           
      
        </Box>
        <Box>
            {loading?(
                <Typography > Fetching code....</Typography>
            ):(
  <Typography  variant="body" sx={{fontWeight:"1000"}}>
  {quote==null?"Click the refresh button":
  quote?.quote}
</Typography>
            )}
          
        </Box>
        <Box sx={{display:"flex", justifyContent:"end"}}>
            <Typography variant='caption' color="text.secondary">
                {loading?"":
                quote?.author}
            </Typography>
        </Box>
      
    </Box>
  )
}
