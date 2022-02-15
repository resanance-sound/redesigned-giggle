import React, { useState } from 'react';

export default function ClickMe(){

    const [numberOfClicks, setNumberOfClicks] = useState(0);

    return <button onClick={() => setNumberOfClicks(numberOfClicks + 1)}> clicked me {numberOfClicks} </button>
}