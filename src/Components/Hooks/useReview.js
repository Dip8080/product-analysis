import React, { useEffect, useState } from 'react';

const useReview = () => {
    const [reviews,setReview] = useState([]);
     useEffect(()=>{
        fetch('review.json')
        .then(rex=>rex.json())
        .then(data=>setReview(data))
    },[])
    return [reviews,setReview]
}
      

export default useReview;