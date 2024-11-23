import React from 'react';
import Header from "@/Components/Header.jsx";
import {Box, Typography, useTheme } from "@mui/material";
import { DataGrid} from "@mui/x-data-grid";
import { tokens } from '../../theme.js'
import { AdminPanelSettingsOutlined } from "@mui/icons-material";
import { LockOpenOutlined } from "@mui/icons-material";
import { SecurityOutlined } from "@mui/icons-material";
const Contact = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const columns = [
        {field: 'id', headerName: 'ID'},
        {field: 'name', headerName: 'Name', flex: 1, cellClassName: 'name-column--cell'},
        {field: 'age', headerName: 'Age', type: 'number', headerAlign: 'left', align: 'left'},
        {field: 'phone', headerName: 'Phone Number', flex: 1},
        {field: 'email', headerName: 'Email', flex: 1},
        {field: 'access', headerName: 'Access Level', flex: 1,
            renderCell: ({row: {access}}) => {
                return (
                    <Box
                        className={`w-[60%] mt-0 mx-auto p-1.5 flex justify-center rounded-sm`}
                        backgroundColor={
                        access === 'admin'
                            ? colors.greenAccent[600]
                            : colors.greenAccent[700]
                        }
                    >
                        {access === 'admin' && <AdminPanelSettingsOutlined />}
                        {access === 'manager' && <SecurityOutlined />}
                        {access === 'user' && <LockOpenOutlined />}
                        <Typography color={colors.gray[100]} className={`ml-1.5`}>
                            {access}
                        </Typography>
                    </Box>
                )
            }
        },

    ]

    return (
        <Box className={`mt-5 p-3 w-full`}>
            <Header title={`CONTACT`} subtitle={`Here are you contacts`} />
               <Box className={`mt-3 h-[77vh]`}>
                   <DataGrid columns={ columns } />
               </Box>
        </Box>
    );
};

export default Contact;
