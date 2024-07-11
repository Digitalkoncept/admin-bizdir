import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';
export default function BasicTimePicker2({title,formData,setFormData}) {
    const handleOpenTimeChange = (newValue) => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          business_time: {
            ...prevFormData.business_time,
            close_time: newValue ? newValue.format("HH:mm A") : null,
          },
        }));
      };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker']}>
        <TimePicker value={formData.business_time.close_time ? dayjs(formData.business_time.close_time,"HH:mm A"):null}
        onChange={handleOpenTimeChange} label={title} />
      </DemoContainer>
    </LocalizationProvider>
  );
}
