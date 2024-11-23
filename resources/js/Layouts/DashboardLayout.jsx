import NavSideBar from "@/Components/NavSideBar.jsx";
import TopBar from "@/Components/TopBar.jsx";
import AuthLayout from "@/Layouts/AuthLayout.jsx";
import Header from "@/Components/Header.jsx";
import {Box} from "@mui/material";
// import Team from '@/Pages/Team.jsx'
// import Invoices from '@/Pages/Invoices.jsx'
// import Contacts from '@/Pages/Contact.jsx'
// import Bar from '@/Pages/Bar.jsx'
// import Form from '@/Pages/Form.jsx'
// import Line from '@/Pages/Line.jsx'
// import Pie from '@/Pages/Pie.jsx'
// import Geo from '@/Pages/Geo.jsx'
// import FAQ from '@/Pages/FAQ.jsx'
// import Calendar from '@/Pages/Calendar.jsx'



export default function DashboardLayout({ children }) {

    return (
        <AuthLayout>
            <NavSideBar/>
            <Box className={`flex flex-col w-full`}>
                <TopBar  />
                {children}
            </Box>
        </AuthLayout>
    );
}
