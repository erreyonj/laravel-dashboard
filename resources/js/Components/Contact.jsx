import React from 'react';
import Header from "@/Components/Header.jsx";
import {Box, Typography, useTheme } from "@mui/material";
import { DataGrid} from "@mui/x-data-grid";
import { tokens } from '../../theme.js'
import { AdminPanelSettingsOutlinedIcon } from "@mui/icons-material/AdminPanelSettingsOutlined";
import { LockOpenOutlinedIcon } from "@mui/icons-material/LockOpenOutlined";
import { SecurityOutlined } from "@mui/icons-material/SecurityOutlined";
const Contact = () => {
    return (
        <Box className={``}>
            <Header title={`CONTACT`} subtitle={`Here are you contacts`} />
               <Box>
                   <DataGrid columns={ columns } />
               </Box>
        </Box>
    );
};

export default Contact;
