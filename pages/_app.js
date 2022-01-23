import CalendarFrame from "./calendar-frame";
import HijriDate from "../constants/original-hijri-date";
import Header from './header';
import Footer from './footer';

import '../styles/globals.css'

const Index = () => {
    return (
        <div className="container-fluid min-h-screen bg-gray-100 ">
            <Header/>
            <CalendarFrame today={HijriDate.fromGregorian(new Date())} />
            <Footer/>
        </div>

    )
};

export default Index;