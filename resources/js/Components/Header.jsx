import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from '../../theme.js'

const Header = ({ title, subtitle}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    return (
        <Box className={`mb-1.5`}>
            <Typography variant='h2' fontWeight='bold' className={`mb-1.5 flex justify-between items-center`}>{title}</Typography>
            <Typography variant='h5'>{subtitle}</Typography>
        </Box>
    );
};

export default Header;
