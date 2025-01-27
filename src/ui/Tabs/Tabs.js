import { useState } from "react";
import './Tabs.css';

const Tabs=({tabsData})=>{

    // const [tabsData,setTabsData]=useState(data);
    const [tabIndex,selectedTab]=useState(0);



    return (
        <>
            <div className="tabs">
                <ul className="list">
                    {tabsData.map((tab, index) => (
                        <li key={index} onClick={()=>selectedTab(index)}>
                            <a href="#">{tab.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="content">
                    {tabsData.map((tab, index) => (
                       index==tabIndex?( <div key={index}>
                            {tab.content}
                        </div>):''
                    ))}
                </div>
            </div>
        </>
    )

}

export default Tabs;