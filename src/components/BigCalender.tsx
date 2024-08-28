"use client"

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";

const localizer = momentLocalizer(moment);

const BigCalender = () => {
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default BigCalender;
