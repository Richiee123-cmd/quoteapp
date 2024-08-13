import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Box } from '@mui/material';
import Card from './components/Card';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Randomcode from './components/Randomcode';
import backgroundImage from '../src/photo-1721539584865-134ea847dbaf.avif';
import Cardseleton from './components/Cardseleton';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function App() {
  const [allQuotes, setAllQoutes] = useState([]);
  const [QuotesLoading, setQoutesLoading] = useState(true);
  useEffect(() => {


    axios
      .get('https://dummyjson.com/quotes')
      .then((response) => {
        // console.log(response.data.quotes);
        setQoutesLoading(true)
        setTimeout(() => {
          setQoutesLoading(false)
          setAllQoutes(response.data.quotes);
        }, 3000);

        //  console.log(error);
      })
      .catch((error) => {
      })


  }, []);


  return (
    <div>


      <Box sx={{
        display: "flex",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "center",
        backgroundPosition: "center"
      }}>
        <Grid container spacing={2} sx={{ p: 2, display: "flex", justifyContent: "center", alignItems: "center", mb: 2 }} >
          <Grid item xs={4} >
            <Item elevation={5}><Randomcode /></Item>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{
        flexGrow: 1, minHeight: "100vh", display: "flex",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "center",
        backgroundPosition: "center"
      }}>

        <Grid container spacing={2} sx={{ p: 2 }} >
          {QuotesLoading ? (
            [1, 2, 3, 4, 5, 6].map(() =>
              <Grid item xs={4} >
                <Item elevation={5}>
                  <Cardseleton />
                </Item>
              </Grid>)) : (
            allQuotes?.map((value, index) => (
              <Grid item xs={4} key={index}>
                <Item><Card data={value} /></Item>
              </Grid>
            ))
          )}

        </Grid>


      </Box>
    </div>
  );
}

export default App;
