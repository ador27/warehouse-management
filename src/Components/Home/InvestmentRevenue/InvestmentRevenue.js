import React from 'react';
// import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const InvestmentRevenue = () => {
    // const data = [
    //     {
    //         "month": "Mar",
    //         "investment": 100000,
    //         "sell": 241,
    //         "revenue": 10401
    //     },
    //     {
    //         "month": "Apr",
    //         "investment": 200000,
    //         "sell": 423,
    //         "revenue": 24500
    //     },
    //     {
    //         "month": "May",
    //         "investment": 500000,
    //         "sell": 726,
    //         "revenue": 67010
    //     },
    //     {
    //         "month": "Jun",
    //         "investment": 500000,
    //         "sell": 529,
    //         "revenue": 40405
    //     },
    //     {
    //         "month": "Jul",
    //         "investment": 600000,
    //         "sell": 601,
    //         "revenue": 50900
    //     },
    //     {
    //         "month": "Aug",
    //         "investment": 700000,
    //         "sell": 670,
    //         "revenue": 61000
    //     }
    // ]
    return (
        <div>
            <h1 className='text-4xl m-10'>Investment Revenue Details</h1>

            {/* <div>
                <BarChart width={720} height={500} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={'month'}></XAxis>
                    <YAxis></YAxis>
                    <Bar dataKey={'investment'} fill="#8884d8"></Bar>
                    <Bar dataKey={"revenue"} fill="#82ca9d"></Bar>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                </BarChart>

                <PieChart width={730} height={250}>
                    <Pie data={data} dataKey="investment" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" ></Pie>
                    <Pie data={data} dataKey="revenue" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                    <Tooltip></Tooltip>
                    <Legend></Legend>

                </PieChart>

                <LineChart width={730} height={200} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={"month"}></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                    <Line type={"monotone"} dataKey={"investment"} stroke="#8884d8"></Line>
                    <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />

                </LineChart>
            </div> */}

        </div>



    );

};

export default InvestmentRevenue;