import { useState, useEffect } from "react";
import ResBarChart from "../../../components/charts/barChart/BarChart";

export default function Dashboard() {

    const [getdata, setData] = useState([]);
    let newData;

    useEffect(() => {
        console.log("use effect was called")

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                "mode": "getall",
                "geo": "*",
                "partner": 1
            })
        };

        const fetchData = async () => {
            console.log("Fetch was called")
            fetch(`https://analytics.resanance.com/node/reporting/`, requestOptions)
                .then(response => {
                    console.log("From first then")
                    console.log(response)
                    return response.json()
                }
                ).then(rData => {
                    console.log("From 2nd then")
                    console.log(rData)
                    setData(rData)
                });
        }
        fetchData();
    }, []);

    return (
        <>
            <div>
                some sort of news or stats section section abc
            </div>
            <div>
                some sort of news or stats section section abc
            </div>

            <div>
                <h1>My daily data overview</h1>
                <ResBarChart data={getdata} />
            </div>

        </>
    )
}