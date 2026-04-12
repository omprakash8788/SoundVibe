import { useParams } from "react-router-dom"
import Navbar from "./Navbar"
import { albumsData } from "../assets/assets";

const DisplayAlbum = () => {
    const {id} = useParams();
    const AlbumData = albumsData[id]
    console.log(AlbumData)

  return (
    <>
    <Navbar/>

    </>
  )
}

export default DisplayAlbum