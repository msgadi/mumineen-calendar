import CalendarFrame from "./calendar-frame";
import HijriDate from "../constants/hijri-date1";

import '../styles/globals.css'

const Index = () => {
    return (<CalendarFrame today={new HijriDate().fromGregorian(new Date())} />);
}

export default Index;