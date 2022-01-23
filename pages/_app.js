import CalendarFrame from "./calendar-frame";
import HijriDate from "../constants/original-hijri-date";

import '../styles/globals.css'

const Index = () =>  (<CalendarFrame today={ HijriDate.fromGregorian(new Date())} />); 

export default Index;