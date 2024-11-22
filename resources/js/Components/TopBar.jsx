import { Box, IconButton, useTheme } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { useContext} from "react";
import { ColorModeContext, tokens} from "../../theme.js";
import  LightModeOutlinedIcon  from "@mui/icons-material/LightModeOutlined";
import  DarkModeOutlinedIcon  from "@mui/icons-material/DarkModeOutlined";
import  NotificationsOutlinedIcon  from "@mui/icons-material/NotificationsOutlined";
import  SettingsOutlinedIcon  from "@mui/icons-material/SettingsOutlined";
import  PersonOutlinedIcon  from "@mui/icons-material/PersonOutlined";
import  SearchIcon  from "@mui/icons-material/Search";


const TopBar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    // these tw classes get top bar in correct position but is this correct?, absolute top-0 z-20 pl-64


    return (
        <div className={`flex justify-between p-1 pl-3 bg-[${colors.primary[400]}] mt-1 w-full h-14`}>
            {/* SEARCH BAR */}
            <div className={`flex bg-gray-400 rounded-sm`}>
                <InputBase className={`ml-2 flex-1`} placeholder={`Search`}/>
                <IconButton type={`button`} className={`p-1`}>
                    <SearchIcon/>
                </IconButton>
            </div>

            {/* ICONS */}
            <div className={`flex`}>
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? (
                        <DarkModeOutlinedIcon/>
                    ) : (<LightModeOutlinedIcon/>
                    )}
                </IconButton>
                <IconButton>
                    <NotificationsOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon/>
                </IconButton>
            </div>

        </div>
    );
};

export default TopBar;
