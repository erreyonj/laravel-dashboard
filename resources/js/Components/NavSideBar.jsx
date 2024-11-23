import { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme} from "@mui/material";
// import { Link } from '@mui/material'
// import { Link }  from 'react-router-dom'
import { Link, usePage } from '@inertiajs/react';
import { tokens } from '../../theme.js'
import  HomeOutlinedIcon  from "@mui/icons-material/HomeOutlined";
import  PeopleOutlinedIcon  from "@mui/icons-material/PeopleOutlined";
import  ContactsOutlinedIcon  from "@mui/icons-material/ContactsOutlined";
import  ReceiptOutlinedIcon  from "@mui/icons-material/ReceiptOutlined";
import  PersonOutlinedIcon  from "@mui/icons-material/PersonOutlined";
import  CalendarTodayOutlinedIcon  from "@mui/icons-material/CalendarTodayOutlined";
import  HelpOutlinedIcon  from "@mui/icons-material/HelpOutlined";
import  BarChartOutlinedIcon  from "@mui/icons-material/BarChartOutlined";
import  PieChartOutlineOutlinedIcon  from "@mui/icons-material/PieChartOutlineOutlined";
import  TimelineOutlinedIcon  from "@mui/icons-material/TimelineOutlined";
import  MenuOutlinedIcon  from "@mui/icons-material/MenuOutlined";
import  MapOutlinedIcon  from "@mui/icons-material/MapOutlined";
import  SearchIcon  from "@mui/icons-material/Search";
// import {ReceiptOutlined} from "@mui/icons-material";


const Item = ({ title, to, icon, selected, setSelected}) => {
    const { auth, currentRouteName} = usePage().props
    const theme =  useTheme();
    const colors = tokens(theme.palette.mode)
    let routeTitle = to.slice(1)
    console.log(routeTitle)

    return (
    <Link href={to}>
        <MenuItem active={routeTitle === currentRouteName}
                  className={`text-[${colors.gray[100]}]`}
                  icon={icon}
        >
            <Typography>{title}</Typography>
        </MenuItem>
    </Link>
    );
};

const NavSideBar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false)


    return (
        <Box
            sx={{
                // '& .pro-sidebar-inner': {
                //     background: `${colors.primary[400]} !important`,
                // },
                // '& .pro-icon-wrapper': {
                //     backgroundColor: `transparent !important`,
                // },
                // '& .pro-inner-item': {
                //     padding: `5px 35px 5px 25px !important`,
                // },
                '& .ps-menuitem-root:hover': {
                    color: `#868dfb !important`,
                },
                '& .ps-menu-button:hover': {
                    backgroundColor: `${colors.primary[500]} !important`,
                },
                '& .ps-active': {
                    color: `#6870fa !important`,
                },
            }}
            className={`min-h-screen`}
        >
            <Sidebar
                collapsed={isCollapsed}
                backgroundColor={colors.primary[400]}
                style={{border: "none", height:"100%"}}
            >
                <Menu iconShape={`square`}>
                {/*  LOGO & MENU ICON  */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon/> : undefined}
                        className={`mt-3 mx-0 mb-4`}
                    >
                        {!isCollapsed && (
                            <Box className={`flex justify-between items-center ml-4`} sx={{}}>
                                <Typography variant='h5'>
                                    ADMIN DASH
                                </Typography>
                                <MenuOutlinedIcon onClick={() => setIsCollapsed(!isCollapsed)}/>
                            </Box>
                        )}
                    </MenuItem>

                    {/*  USER  */}
                    {!isCollapsed && (
                        <Box className={`mb-6`}>
                           <Box className={`flex justify-center items-center`}>
                               <img
                                   alt={`profile user`}
                                   width={80}
                                   height={80}
                                   src={`/assets/erre.png`}
                                   className={`cursor-pointer rounded-full`}
                               />
                           </Box>

                            <Box className={`text-center`}>
                                <Typography
                                    variant='h4'
                                    color={`${colors.gray[100]}`}
                                    fontWeight={`bold`}
                                    className={`mt-10px`}
                                >
                                    Erreyon Elders
                                </Typography>
                                <Typography variant='h5' color={`${colors.greenAccent[500]}`}>
                                    app developer
                                </Typography>
                            </Box>
                        </Box>
                    )}

                {/*  MENU ITEMS  */}
                    <Box paddingLeft={isCollapsed ? undefined : `10%`} className={``}>
                        <Item
                            title={`Dashboard`}
                            to={'/dashboard'}
                            icon={<HomeOutlinedIcon />}
                        />
                        <Item
                            title={`Manage Team`}
                            to={'/team'}
                            icon={<PeopleOutlinedIcon />}
                        />
                        <Item
                            title={`Contacts`}
                            to={'/contact'}
                            icon={<ContactsOutlinedIcon />}
                        />
                        <Item
                            title={`Invoices`}
                            to={'/invoice'}
                            icon={<ReceiptOutlinedIcon />}
                        />
                        <Item
                            title={`Profile Form`}
                            to={'/form'}
                            icon={<PersonOutlinedIcon />}
                        />
                        <Item
                            title={`Calendar`}
                            to={'/calendar'}
                            icon={<CalendarTodayOutlinedIcon />}
                        />
                        <Item
                            title={`FAQs`}
                            to={'/faq'}
                            icon={<HelpOutlinedIcon />}
                        />
                        <Item
                            title={`Bar Chart`}
                            to={'/bar'}
                            icon={<BarChartOutlinedIcon />}
                        />
                        <Item
                            title={`Line Chart`}
                            to={'/line'}
                            icon={<TimelineOutlinedIcon />}
                        />
                        <Item
                            title={`Pie Chart`}
                            to={'/pie'}
                            icon={<PieChartOutlineOutlinedIcon />}
                        />
                        <Item
                            title={`Geography Chart`}
                            to={'/geo'}
                            icon={<MapOutlinedIcon />}
                        />
                    </Box>
                </Menu>
            </Sidebar>
        </Box>
    );
};

export default NavSideBar;
