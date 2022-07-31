/*
    This component is usefull. When you broswe in a new page of this website scrollbar 
    does not change but stay in the same position.
    With this component scrollbar will broswe users in top of website. 
*/

import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
    //get Path from current route
    const { pathname } = useLocation();

    //whenever path change scroll to top
    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [pathname])

  return null;
}
