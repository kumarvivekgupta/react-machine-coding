import File from './File';
import {useState} from 'react'
import './folders.css';

const Folder = ({item}) => {

    const [open, setOpen]=useState(false);
  return (
    <div>
        <p className='folder' onClick={()=>setOpen((prev)=>!prev)}>📁  {item.name}</p>
        {open && item.items.map((it, i) => {
            if (it.type === 'folder') {
                return (
                    <Folder item={it} key={i} />
                )
            } else {
                return (
                    <File item={it} key={i} />
                )
            }
        })
        }

    </div>
  )
}

export default Folder