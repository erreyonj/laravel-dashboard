import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { ColorModeContext, useMode} from "../theme.js";
import { CssBaseline, ThemeProvider} from "@mui/material";
import { Routes, Route } from "react-router-dom";
import AdminDash from "@/Pages/AdminDash.jsx";
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


const appName = import.meta.env.VITE_APP_NAME || 'Laravel';


createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);
        function MicrobioApp(){
            const [theme, colorMode] = useMode();
            return (
                <ColorModeContext.Provider value={colorMode}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <App {...props} >
                            {/*<Routes>*/}
                            {/*    <Route path={`/dashboard`} element={<AdminDash />}/>*/}
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
                        </App >
                    </ThemeProvider>
                </ColorModeContext.Provider>
            )
        }


        root.render(<MicrobioApp />);
    },
    progress: {
        color: '#4B5563',
    },
});
