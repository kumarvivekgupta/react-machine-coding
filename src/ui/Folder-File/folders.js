import React from 'react'
import Folder from './Folder';
import File from './File';
import { useState } from 'react';
import FileData from '../../Data/FileData';
import './folders.css';

const Folders = () => {


    const [explorerData, setExplorerData] = useState(FileData);
    const [open, setOpen]=useState(false);
    return (

        <div>
            <p className='folder' onClick={()=>setOpen((prev)=>!prev)}>📁  {explorerData.name}</p>
            {open && explorerData.items.map((item, i) => {
            if (item.type === 'folder') {
                return (
                    <Folder item={item} key={item.name} />
                )
            } else {
                return (
                    <File item={item} key={item.name} />
                )
            }
            })
            }
        </div>
    )
}

export default Folders;

// https://my.interview.epam.com/public/candidate/welcome?ticket=6fae7e5d-8622-42e9-a60c-98338ff9935f
// https://my.interview.epam.com/public/candidate/welcome?ticket=6fae7e5d-8622-42e9-a60c-98338ff9935f