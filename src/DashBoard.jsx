import React, { useState, useEffect } from 'react';
// import Dropdown from '../components/DropDown';
// import Planets from './Planets';
import VectorImage from './assets/vecteezy_illustration.png'
import Calender from './assets/Calendar.png'
import Separator from './components/Seperator';
import Dropdown from './components/DropDown';

const Dashboard = () => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [endDay, setEndDay] = useState('');
  const [endMonth, setEndMonth] = useState('');
  const [endYear, setEndYear] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [endHours, setEndHours] = useState('');
  const [endMinutes, setEndMinutes] = useState('');
  const [zodiacSystem, setZodiacSystem] = useState('');
  const [timezone, setTimezone] = useState('');
  const [calculationMethod, setCalculationMethod] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [altitude, setAltitude] = useState('');

  useEffect(() => {
    // fetch('http://127.0.0.1:5000/ephemeris', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     startDate: "2024-01-01",
    //     endDate: "2024-01-07",
    //     zodiacSystem: "Tropical",
    //     timezone: "Etc/UTC",
    //     calculationMethod: "Geocentric",
    //     latitude: 34.0522,
    //     longitude: -118.2437,
    //     altitude: 10
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data); // Process the JSON response
    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //   });
  }, []);

  const handleFormSubmit = () => {
    // Add your form submission logic here
  };

  return (
    <div style={{ backgroundColor:'#FEE7D7', display: 'flex',flex:1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' ,height:'100%'}}>
      <div style={{ marginBottom: '1rem' }}>
        <h1>Moontime Diary</h1>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', marginBottom: '1rem' }}>
        <button style={{ backgroundColor: 'black', color: 'white', padding: '0.5rem 1rem', borderRadius: '8px', border: 'none' }}>Ephemerides</button>
        <button style={{ backgroundColor: '#E7E8EA', padding: '0.5rem 1rem', borderRadius: '8px', border: 'none' }}>Moon Chart</button>
        <button style={{ backgroundColor: '#E7E8EA', padding: '0.5rem 1rem', borderRadius: '8px', border: 'none' }}>Weekly Spread</button>
      </div>
      <img src={VectorImage} alt="illustration" style={{ width: '300px', height: '300px', objectFit: 'contain', position: 'absolute', top: '123px', left: '-45px' }} />
      <img src={VectorImage} alt="illustration" style={{ width: '300px', height: '300px', objectFit: 'contain', position: 'absolute', bottom: '0', right: '20px' }} />
      <Separator height={50} />
      <div style={{zIndex:1, backgroundColor:'white', borderRadius:'20px', width:'900px', padding:'20px' }}>
        <h2 style={{ fontSize:'22px', marginBottom:'1rem' }}>Input Form</h2>
        <div>
  <h3>Date Range</h3>
  <Separator height={30}/>
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <div>
      <p>Set <span style={{ color:'red' }}> Initial</span> date & time:</p>
      <Separator height={10}/>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img src={Calender} alt="calendar" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
        <input
          type="text"
          value={day}
          onChange={e => setDay(e.target.value)}
          placeholder="DD"
          maxLength={2}
          style={{ height: '20px', width: '30px', color: '#000', borderBottom: '2px solid #000' }}
        />
        <input
          type="text"
          value={month}
          onChange={e => setMonth(e.target.value)}
          placeholder="MM"
          maxLength={2}
          style={{ height: '20px', width: '30px', color: '#000', borderBottom: '2px solid #000' }}
        />
        <input
          type="text"
          value={year}
          onChange={e => setYear(e.target.value)}
          placeholder="YYY"
          maxLength={4}
          style={{ height: '20px', width: '40px', color: '#000', borderBottom: '2px solid #000' }}
        />
        <img src={Calender} alt="clock" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
        <input
          type="text"
          value={hours}
          onChange={e => setHours(e.target.value)}
          placeholder="Hrs"
          maxLength={2}
          style={{ height: '20px', width: '30px', color: '#000', borderBottom: '2px solid #000' }}
        />
        <span>:</span>
        <input
          type="text"
          value={minutes}
          onChange={e => setMinutes(e.target.value)}
          placeholder="Mins"
          maxLength={2}
          style={{ height: '20px', width: '35px', color: '#000', borderBottom: '2px solid #000' }}
        />
      </div>
    </div>
    <Separator width={480} />
    <div>
      <p>Set <span style={{ color:'red' }}> Final</span> date & time:</p>
      <Separator height={10}/>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img src={Calender} alt="calendar" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
        <input
          type="text"
          value={endDay}
          onChange={e => setEndDay(e.target.value)}
          placeholder="DD"
          maxLength={2}
          style={{ height: '20px', width: '30px', color: '#000', borderBottom: '2px solid #000' }}
        />
        <input
          type="text"
          value={endMonth}
          onChange={e => setEndMonth(e.target.value)}
          placeholder="MM"
          maxLength={2}
          style={{ height: '20px', width: '30px', color: '#000', borderBottom: '2px solid #000' }}
        />
        <input
          type="text"
          value={endYear}
          onChange={e => setEndYear(e.target.value)}
          placeholder="YYY"
          maxLength={4}
          style={{ height: '20px', width: '40px', color: '#000', borderBottom: '2px solid #000' }}
        />
        <img src={Calender} alt="clock" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
        <input
          type="text"
          value={endHours}
          onChange={e => setEndHours(e.target.value)}
          placeholder="Hrs"
          maxLength={2}
          style={{ height: '20px', width: '30px', color: '#000', borderBottom: '2px solid #000' }}
        />
        <span>:</span>
        <input
          type="text"
          value={endMinutes}
          onChange={e => setEndMinutes(e.target.value)}
          placeholder="Mins"
          maxLength={2}
          style={{ height: '20px', width: '35px', color: '#000', borderBottom: '2px solid #000' }}
        />
      </div>
    </div>
  </div>
</div>
<Separator height={30}/>
<div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '40px' }}>
  <div style={{ gap: '10px' }}>
    <p>Zodiac System</p>
    {/* <Dropdown
      options={['Tropical', 'Sidereal', 'Equatorial']}
      defaultOption={'Sidereal'}
      onValueChange={selectedValue => setZodiacSystem(selectedValue)}
    /> */}
  </div>
  <div style={{ gap: '10px' }}>
    <p>Observer Location</p>
  
  </div>
  <div style={{ gap: '10px' }}>
    <p>Time Zone</p>
    
  </div>
</div>
<Separator height={130}/>
<button
  style={{
    backgroundColor: 'black',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    border: 'none',
    alignSelf: 'center'
  }}
  onClick={handleFormSubmit}
>
  Submit
</button>

      </div>
      <Separator height={150}/>
    </div>
  );
};

export default Dashboard;
