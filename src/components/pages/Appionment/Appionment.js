import React, { useState } from 'react';
import Footer from '../../shared/Footer/Footer';
import AvailableAppionments from './AvailableAppionments';
import CalenderderBaner from './CalenderderBaner';

const Appionment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <CalenderderBaner date={date} setDate={setDate}></CalenderderBaner>
            <AvailableAppionments date={date}></AvailableAppionments>
            <Footer></Footer>
        </div>
    );
};

export default Appionment;