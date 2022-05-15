import appointment from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const CalenderderBaner = ({ date, setDate }) => {
    return (
        <section>
            <div className="hero min-h-screen bg-[url('/src/assets/images/bg.png')] bg-cover">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={appointment} className='w-100 md:w-[500px]' alt="Chair" />

                    <div className='text-center'>
                        <DayPicker

                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />

                        <h3>Selected Date: {format(date, 'PP')}</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CalenderderBaner;