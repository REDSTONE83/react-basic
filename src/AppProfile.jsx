import React from 'react';
import Profile from './components/Profile';

export default function AppProfile() {
  const handleClick = (event) => {
    console.log(event);
    alert('버튼 클릭!!');
  };
  return (
    <div>
      <button onClick={handleClick}>버튼</button>
      <Profile
        src='https://images.unsplash.com/photo-1670968982569-81f78c8e841d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8RnpvM3p1T0hONnd8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60'
        name='Kim Lee'
        isNew={true}
      />
      <Profile
        src='https://images.unsplash.com/photo-1669870426368-3c411842be64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8RnpvM3p1T0hONnd8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60'
        name='Park Sang'
      />
      <Profile
        src='https://images.unsplash.com/photo-1670821911191-3cd9d83c5d88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
        name='So You'
      />
    </div>
  );
}
