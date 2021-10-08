import axios from 'axios'
import React ,{ useEffect, useState } from 'react'
import Navbar from './Navbar'
import {Link, useParams} from 'react-router-dom'
 
export default function RegisteredUser() {
    let {   alldata} = useParams(); 
    return (
        <>
         <Navbar />
             {alldata}
        </>
    )
}
