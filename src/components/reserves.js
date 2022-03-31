// //MUI Components
// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import {navigate} from 'gatsby';

//  //Icons
// import ExploreIcon from '@mui/icons-material/Explore';
// import StorefrontIcon from '@mui/icons-material/Storefront';
// import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import EmailRoundedIcon from '@mui/icons-material/EmailRounded';


// //MUI Styling
// import '../css/pageStyles.css';
// //import { makeStyles } from "@material-ui/core/styles";


// //styling
// // const useStyles = makeStyles((theme) => ({

// // }));
// const page = [
//     {
//         id: 1,
//         location: '/timeline',
//         name: 'Home',
//         icon: <HomeRoundedIcon fontSize='large' style={iconID === 1 ?{color: '#D5AB82'}:{color: '#6da58a'}}/>

//     },

//     {
//         id: 2,
//         location: '/discover',
//         name: 'Discoveer',
//         icon: <ExploreIcon fontSize='large' style={iconID === 2 ?{color: '#D5AB82'}:{color: '#6da58a'}}/>

//     },

//     {
//         id: 3,
//         location: '/marketplace',
//         name: 'Marketplace',
//         icon: <StorefrontIcon fontSize='large' style={iconID === 3 ?{color: '#D5AB82'}:{color: '#6da58a'}}/>

//     },

//     {
//         id: 4,
//         location: '/messages',
//         name: 'Messages',
//         icon: <EmailRoundedIcon fontSize='large' style={iconID === 4 ?{color: '#D5AB82'}:{color: '#6da58a'}}/>

//     },

//     {
//         id: 5,
//         location: '/notifications',
//         name: 'Notifications ',
//         icon: <NotificationsIcon fontSize='large' style={iconID === 5 ?{color: '#D5AB82'}:{color: '#6da58a'}}/>

//     },

// ];
// //Actual Components
//  const BottomAppBar = ({iconID}) => {

//     // //Variables
//     // const classes = useStyles();

//      return (
//         <AppBar position="fixed" style={{backgroundColor: 'white', color: '#6da58a', }} sx={{ top: 'auto', bottom: 0, display: { xs: 'flex', sm: 'flex', md: 'none' } }}>
//             <Toolbar>
//                 <Box sx={{ flexGrow: 1 }} />
//                     {page.map(({id, location, name, icon}) => (
//                         <React.Fragment key={id} >
//                             <Tooltip title={name} role='link' onClick={()=>{navigate(location)}}>
//                                 <IconButton color="inherit" aria-label="open drawer" size='large' >
//                                     {icon}
//                                 </IconButton>
//                             </Tooltip>
//                             <div style={{width:20}} />
//                         </React.Fragment>
//                     ))}
//                 <Box sx={{ flexGrow: 1 }} />
//             </Toolbar>
//       </AppBar>
//      )
//  }
 
 
// export default BottomAppBar