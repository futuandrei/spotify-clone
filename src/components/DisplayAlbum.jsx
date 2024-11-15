import React from "react"
import Navbar from "./Navbar"
import { useParams } from "react-router-dom"
import { albumsData } from "../assets/assets"

const DisplayAlbum = () => {

    const {id} = useParams();
    const albumData = albumsData[id];
    console.log(albumData);

    return (
    <>
        <Navbar/>
        <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
            <img src={albumData.image} alt="" />
        </div>
    </>
    )
}

export default DisplayAlbum;