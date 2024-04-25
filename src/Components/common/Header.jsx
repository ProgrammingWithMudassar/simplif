import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Logo from '../../Assets/png/logo.png';
import { useTheme } from '@emotion/react';

const Header = ({ authenticaiton }) => {
    const theme = useTheme();

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            py: { xs: 2, sm: 2 }, // Adjust padding for different sizes
            px: { xs: 2, sm: 4, md: 6 },  // Same here
        }}>
            <Box sx={{
                width: { xs: '80px', sm: '100px', md: '120px', lg: '160px' },
                height: { xs: '23px', sm: '30px', md: '40px', lg: '45px' },
                position: 'relative'
            }}>
                <img src={Logo} alt="Company Logo" style={{ width: '110%', height: '100%', position: 'absolute' }} />
            </Box>
            {
                !authenticaiton ?
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Typography variant="body1" color={theme.palette.secondary.main} sx={{ fontWeight: 'bold', cursor: 'pointer' }}>
                            Login
                        </Typography>
                        <Button variant="contained" sx={{ fontSize: 'capitalize', fontWeight: 'bold' }}>Join Waitlist</Button>
                    </Box>
                    :
                    <Typography variant="body1" color="initial">My account</Typography>
            }
        </Box>
    );
}

export default Header;
