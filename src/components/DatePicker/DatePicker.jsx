import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const DatePicker = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);
  return (
    <>
      <DateRangePicker
        onChange={(item) => setState([item.selection])}
        showSelectionPreview
        moveRangeOnFirstSelection={false}
        months={1}
        ranges={state}
        direction="horizontal"
        preventSnapRefocus
        calendarFocus="backwards"
      />
      ;
    </>
  );
};

export default DatePicker;
