// import React from 'react';
// import { Outlet, useLocation, useNavigate } from 'react-router-dom';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Container,
//   Box,
//   Button,
//   IconButton
// } from '@mui/material';
// import {
//   Home as HomeIcon,
//   Group as GroupIcon
// } from '@mui/icons-material';

// export default function Layout() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   return (
//     <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             onClick={() => navigate('/')}
//             sx={{ mr: 2 }}
//           >
//             <HomeIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             Medical Center
//           </Typography>
//         </Toolbar>
//       </AppBar>

//       <Box component="main" sx={{ flex: 1, py: 4 }}>
//         <Container maxWidth="xl">
//           <Outlet />
//         </Container>
//       </Box>
//     </Box>
//   );
// }