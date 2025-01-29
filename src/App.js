
import './App.css';
import Stars from './ui/Stars/Stars';
import { use, useState } from 'react';
import Tabs from './ui/Tabs/Tabs';
import Autocomplete from './ui/Autocomplete/Autocomplete';
import Popup from './ui/Popup/Popup';
import useNotification from './hooks/useNotification';
import Notes from './ui/Drag-Drop/notes';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './Home';
import Folders from './ui/Folder-File/folders';

function App() {





  return (
    <div className="App">
      {/* <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/notes">Notes</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/notes" element={<Notes />} />
          </Routes>
        </div>
      </BrowserRouter> */}

      <Folders />




    </div>
  );
}

export default App;
