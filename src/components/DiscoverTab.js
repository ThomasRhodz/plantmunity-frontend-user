import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Tbs from '@mui/material/Tabs';
import Tb from '@mui/material/Tab';
import Typography from "@material-ui/core/Typography";

import ExploreIcon from '@mui/icons-material/Explore';
import ForumIcon from '@mui/icons-material/Forum';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import { withStyles } from "@material-ui/core/styles";

import ImageList from './Explore';
import ForumnList from './Forum';
import Identify from './Identify';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const DiscoverTab = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const StyledTab = withStyles((theme) => ({
    root: {
      textTransform: "none",
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: "18px",
      marginRight: theme.spacing(1),
    },
  }))((props) => <Tb {...props} />);
      

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue)
  };
  return ( 
    
    <Grid container direction={matches? 'column':'row'} alignItems="center" sx={{ padding: 3, paddingLeft: 0, marginTop: {xs:10,sm:10,md:13}, marginLeft: 'auto', marginRight: 'auto', width:{xs:'375',sm:'840px',md:'1425px'} , height: {xs:'520px',sm:'535px',md:'600px'}, bgcolor: 'background.paper',  }}>
      <Grid item>
        <Grid container direction='column' alignItems='center'>
          <Grid item>
            
            <Typography
                variant={matches?'h5':'h4'}
                style={{fontFamily:'Roboto', marginTop: '-10px'}}
                gutterBottom
            >
              Discover   
            </Typography>
          </Grid>
          <Grid item>
            <Tbs variant='fullWidth' TabIndicatorProps={{style: {background:'#6da58a'}}} orientation={matches? 'horizontal':'vertical'} value={value} onChange={handleChange} sx={{ height:{xm:55, sm:55, md:525}, borderRight: {xs:0, sm:0, md:1}, borderBottom:{xs:1, sm:1, md:0}, width: {xs:375, sm:840, md:170}}} style={{borderColor: '#dddfdc', marginTop:'-20px'}}>
              <StyledTab 
                  icon={<ExploreIcon style={value===0?{ color: '#6da58a' }:{ color: '' } }/>} 
                  iconPosition="start" 
                  label={<span style={value===0?{ color: '#6da58a' }:{ color: '' } }>Explore</span>} 
                  sx={{fontFamily: 'apple-system', fontSize: {xs:12, sm:15, md:15}}}
              />
              <StyledTab 
                  icon={<ForumIcon style={value===1?{ color: '#6da58a' }:{ color: '' } }/>} 
                  iconPosition="start" 
                  label={<span style={value===1?{ color: '#6da58a' }:{ color: '' } }>Forums</span>} 
                  sx={{fontFamily: 'apple-system', fontSize: {xs:12, sm:15, md:15}}}
              />
              <StyledTab 
                  icon={<ImageSearchIcon style={value===2?{ color: '#6da58a' }:{ color: '' } }/>} 
                  iconPosition="start" 
                  label={<span style={value===2?{ color: '#6da58a' }:{ color: '' } }>Identify</span>}  
                  sx={{fontFamily: 'apple-system', fontSize: {xs:12, sm:15, md:15}}}
              />
            </Tbs>
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{width:{xs:0, sm:0, md:20}, height:{xs:20, sm:20, md:0}}} /> 
      <Grid item sx={value===0?{display:'flex'} : {display:'none'}}>
        <ImageList /> 
      </Grid>
      <Grid item sx={value===1?{display:'flex'} : {display:'none'}}>
        <ForumnList /> 
      </Grid>
      <Grid item sx={value===2?{display:'flex'} : {display:'none'}}>
        <Identify /> 
      </Grid>
    </Grid>
  )
}

export default DiscoverTab