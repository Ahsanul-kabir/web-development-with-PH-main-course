import React from 'react';
import chair from '../../assets/images/chair.png';
import bgImg from '../../assets/images/bg.png'

// React Day Picker used
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                    <p>You have selected: {format(date, 'PP')}</p>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;