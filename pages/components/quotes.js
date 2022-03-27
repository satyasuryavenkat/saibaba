import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
const Quotes = () => {
    const img1 = "https://i.pinimg.com/736x/bb/f3/d0/bbf3d0c7808cf0be0015b72e93985bb6.jpg";
    const img2 = "https://i.pinimg.com/originals/2e/fb/59/2efb591b2fa36f97ef65fc82ef21222d.jpg";
    return(
        <>
          <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
       
          ml:1,
          mt:1,
          mr:1,
          width: '100%',
          height: 600,
          backgroundColor: '#FFF4E8'
        },
      }}
    >
      <Paper elevation={1}>
      <Grid container spacing={2}>
        
        <Grid item xs={4}>
         <Card sx={{ maxWidth: 400, mt:5, ml:20 }}>
 
 <img src={img1} width='100%' alt="recipe thumbnail"/>

    </Card>
        </Grid>
        <Grid item xs={6} sx={{ml:10, mt:27}} >
       
          <Typography variant='h5'>
        
         "Do you know why you are in trouble because you worried about tomorrow? you keep on thinking about the future. That is the cause of problems. Dont think about tomorrow, Live in the present. God will take care of Tomorrow." 
        
        - Sai Baba
    </Typography>

        </Grid>
      </Grid>
      
   
          </Paper>
      <Paper elevation={1}>
      <Grid container spacing={2}>
        
        <Grid item xs={6} sx={{ml:18, mt:27}} >
        <Typography variant='h5'>
       
     
       
       "What Matters is to Live in the present, Live Now, For every moment is now. It is thoughts and acts of your moments that create your Future. The outline of your Future path already Exists, for you already created its pattern by your past."  
      
           - Sai Baba
        </Typography>
        </Grid>
        <Grid item xs={4} >
        <Card sx={{ maxWidth: 400, mt:5, ml:20 }}>
 
 <img src={img2} width='100%' alt="recipe thumbnail"/>

    </Card>
         

        </Grid>
      </Grid>

      </Paper>
    </Box>
        </>
    )
}

export default Quotes;