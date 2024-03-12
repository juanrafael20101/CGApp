import React, { useState } from 'react';
import './Popup.css'; // Import your popup styles

const Popup = ({ isOpen, onClose, onFormSubmit }) => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [patientName, setPatientName] = useState('');
  const [date, setDate] = useState('');

  const handleInputChange = (field, value) => {
    switch (field) {
      case 'startTime':
        setStartTime(value);
        break;
      case 'endTime':
        setEndTime(value);
        break;
      case 'patientName':
        setPatientName(value);
        break;
      case 'date':
        setDate(value);
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = () => {
    const formData = {
      startTime,
      endTime,
      patientName,
      date,
    };

    console.log('Submitted form data:', formData);
    // Perform any action with the submitted data
    onFormSubmit(formData);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <label>
              Start Time:
              <input
                type="text"
                placeholder="Enter start time..."
                value={startTime}
                onChange={(e) => handleInputChange('startTime', e.target.value)}
              />
            </label>

            <label>
              End Time:
              <input
                type="text"
                placeholder="Enter end time..."
                value={endTime}
                onChange={(e) => handleInputChange('endTime', e.target.value)}
              />
            </label>

            <label>
              Patient Name:
              <input
                type="text"
                placeholder="Enter patient name..."
                value={patientName}
                onChange={(e) => handleInputChange('patientName', e.target.value)}
              />
            </label>

            <label>
              Date:
              <input
                type="text"
                placeholder="Enter date..."
                value={date}
                onChange={(e) => handleInputChange('date', e.target.value)}
              />
            </label>

            <button onClick={handleFormSubmit}>Submit</button>
            <button className="cancel" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
