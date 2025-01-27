import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import './Stars.css';



const Stars=({totalStars,clickedStar,rating})=>{

    const [stars,setTotalStars]=useState(0);
    const [hover, sethover] = useState(false);
    const [fillHover, setFillHover] = useState(0);

    useEffect(()=>{
        setTotalStars(totalStars);
    },[]);

    const handleStarClick=(i)=>{
        clickedStar(i);
    }
    const fill=(i)=>{
        sethover(true);
        setFillHover(i);

    }
    const outHover=()=>{
        sethover(false);
        setFillHover(0);
    }

    return(
        <div>
            {[...Array(stars)].map((n,i)=>
                <Star key={i} onClick={()=>handleStarClick(i+1)} 
                className={hover ?(i<fillHover ? "fill" : "empty"): (i<rating ? "fill" : "empty")}
                onMouseOver={()=>fill(i+1)}
                onMouseOut={outHover}
                />
            )}
            
        </div>
    )
}

export default Stars;