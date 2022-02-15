import React from 'react';
import { useState, useEffect } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function ResBarChart({ data }) {

    const [getdata, setData] = useState([])

    useEffect(() => {
        setData(Array.isArray(data) ? data : []);
        console.log("Bar chart was updated");
    }, [data]);

    return (
        <>
            {getdata.length ?
                <ResponsiveContainer width="100%" aspect={3}>
                    <BarChart
                        width={500}
                        height={300}
                        data={getdata}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={getdata.price} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey={getdata[0]._id} fill="#8884d8" />
                        <Bar dataKey={getdata[1]._id} fill="#82ca9d" />
                        <Bar dataKey={getdata[2]._id} fill="#8884d8" />
                        <Bar dataKey={getdata[3]._id} fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>

                : <div>I am a spinner, look at me spin, spin, spin</div>
            }

        </>
    );
}