import DashboardLayout from "@/Layouts/DashboardLayout.jsx";
import LineChart from '/resources/js/Components/LineChart.jsx'

import React from 'react';

const Index = () => {
    return (
        <DashboardLayout>
            <LineChart />
        </DashboardLayout>
    );
};

export default Index;
