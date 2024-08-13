import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

export default function Card({data}) {
  return (
    <div style={{height:"20vh",overflow:"auto"}}>
      <Box sx={{p:3,backgroundColor:"#9e9e9e"}}>
        <Typography variant='body2'>
            {data?.quote}
        </Typography>
        <Typography variant='caption' color={"text.secondary"}>
            {data?.author}

        </Typography>
      </Box>
    </div>
  )
}
