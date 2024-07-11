import React, { useState } from 'react';
import DatePicker from 'react-multi-date-picker';
import "react-multi-date-picker/styles/colors/green.css";

const MultiDatePicker = ({formData,setFormData}) => {
  const [dates, setDates] = useState([]);

  const handleMonthOffChange = (value) => {
    const transformedDates = value.map(date => date.toDate()); // Converts to JavaScript Date objects
    setFormData((prevFormData) => ({
      ...prevFormData,
      business_time: {
        ...prevFormData.business_time,
        month_off: transformedDates,
      },
    }));
  };
  return (
    <DatePicker
      multiple
      placeholder='select date'
      value={formData.business_time.month_off}
      onChange={handleMonthOffChange}
      format="YYYY-MM-DD"
    />
  );
};

export default MultiDatePicker;
