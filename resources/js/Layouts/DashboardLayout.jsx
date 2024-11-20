import NavSideBar from "@/Components/NavSideBar.jsx";
import TopBar from "@/Components/TopBar.jsx";
import AuthLayout from "@/Layouts/AuthLayout.jsx";
import { Routes, Route } from "react-router-dom";
import Welcome from "@/Pages/Welcome.jsx";
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


export default function DashboardLayout({children}) {
    return (
        <AuthLayout>
            <TopBar />

            {/*<Routes>*/}
            {/*    <Route path={`/`} element={<Welcome />}/>*/}
            {/*    <Route path={`/calendar`} element={<Calendar />}/>*/}
            {/*    <Route path={`/team`} element={<Team />}/>*/}
            {/*    <Route path={`/contacts`} element={<Contacts />}/>*/}
            {/*    <Route path={`/invoices`} element={<Invoices />}/>*/}
            {/*    <Route path={`/faq`} element={<FAQ />}/>*/}
            {/*    <Route path={`/form`} element={<Form />}/>*/}
            {/*    <Route path={`/bar`} element={<Bar />}/>*/}
            {/*    <Route path={`/line`} element={<Line />}/>*/}
            {/*    <Route path={`/pie`} element={<Pie />}/>*/}
            {/*    <Route path={`/geo`} element={<Geo />}/>*/}
            {/*</Routes>*/}

            <NavSideBar/>
            {children}
        </AuthLayout>
    );
}
