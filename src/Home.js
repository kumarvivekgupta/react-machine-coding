import React from 'react'
import Stars from './ui/Stars/Stars';
import { use, useState } from 'react';
import Tabs from './ui/Tabs/Tabs';
import Autocomplete from './ui/Autocomplete/Autocomplete';
import Popup from './ui/Popup/Popup';
import useNotification from './hooks/useNotification';
import Notes from './ui/Drag-Drop/notes';

const Home = () => {

    const [rating, setRating] = useState(0);

    const clickedStar = (i) => {
      setRating(i);
    }
  
    const tabsData = [
      {
        label: 'Tab 1',
        content: 'Tab 1 content'
      },
      {
        label: 'Tab 2',
        content: 'Tab 2 content'
      }
    ];
  
    const options = ['apple', 'orange', 'banana', 'grapes', 'mango', 'oorange', 'mangoes', 'grapevine'];
  
    const [openPopup, setOpenPopup] = useState(false);
  
    const { NotificationComponent, triggerNotification } = useNotification('top-left');

  return (
    <header className="App-header">
        <Stars totalStars={5} clickedStar={clickedStar} rating={rating} />
        <p>{rating} star given</p>

        <Tabs tabsData={tabsData} />

        {/* <Autocomplete options={options}/> */}
        <button onClick={() => setOpenPopup(true)}>Open Popup</button>

        {openPopup && <Popup onClose={() => setOpenPopup(false)}>
          <h1>Helo popup</h1>
        </Popup>}

        <button onClick={() => triggerNotification({
          type: 'success',
          message: 'Hello No',
          duration: 5000
        })}>Fire Success notification</button>
        {NotificationComponent}

        <button onClick={() => triggerNotification({
          type: 'error',
          message: 'Hello Error',
          duration: 5000
        })}>Fire Error notification</button>

        {/* <Link to="/notes">Notes Screen</Link> */}
        {/* <Notes /> */}




      </header>
  )
}

export default Home