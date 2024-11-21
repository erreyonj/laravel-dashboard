import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { ColorModeContext, tokens} from "../../theme.js";
import { Box, IconButton, useTheme } from "@mui/material";


export default function AuthLayout({ header, children }) {
    const user = usePage().props.auth.user;
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
            <main className={`grid grid-cols-3 grid-rows-2 min-h-screen bg-[${colors.primary[400]}]`}>{children}</main>
    );
}
