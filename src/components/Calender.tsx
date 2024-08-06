import { useState } from 'react';
import Calendar from 'react-calendar';
function MyApp() {
  type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece]; 
    const [value, onChange] = useState<Value>(new Date());
  
    return (
      <div style={{width:'80%'}} className='course-calender'>
        <Calendar  onChange={onChange} value={value} />
      </div>
    );
  }
export default MyApp;