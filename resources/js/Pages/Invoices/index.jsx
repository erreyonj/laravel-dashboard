import DashboardLayout from "@/Layouts/DashboardLayout.jsx";
import Invoices from "/resources/js/Components/Invoices.jsx";

import React from 'react';

const Index = () => {
    return (
        <DashboardLayout>
            <Invoices />
        </DashboardLayout>
    );
};

export default Index;
