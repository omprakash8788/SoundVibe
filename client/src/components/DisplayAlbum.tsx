import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { assets } from "../assets/assets";
import { useContext, useEffect, useState } from "react";
import { PlayerContext } from "../context/PlayerContext";

type Album = {
  _id: string;
  name: string;
  desc: string;
  image: string;
  bgColour: string;
};

type DisplayAlbumProps = {
  album: Album | undefined;
};

const DisplayAlbum: React.FC<DisplayAlbumProps> = () => {
  const { id } = useParams();
  const [albumData, setAlbumData] = useState<Album | null>(null);
  const { playWithId, albumsData, songsData } = useContext(PlayerContext);

  useEffect(() => {
    albumsData.map((item) => {
      if (item._id === id) {
        setAlbumData(item);
      }
    });
  }, []);

  return albumData ? (
    <>
      <Navbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img className="w-48 rounded" src={albumData.image} alt="" />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {albumData.name}
          </h2>
          <h4>{albumData.desc}</h4>
          <p className="mt-1 flex gap-1.5">
            <img
              className="inline-block w-5"
              src={assets.spotify_logo}
              alt=""
            />
            <b>Spotify</b>* 6,65, 655 likes* <b>50 songs,</b> about 2 hr 45 min
          </p>
        </div>
      </div>
      {/*  */}
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b>#</b>
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className="m-auto w-4" src={assets.clock_icon} alt="icon" />
      </div>
      <hr />
      {songsData.map((item, index) => (
        <div
          key={index}
          onClick={() => playWithId(item._id)}
          className="grid grid-cols-3 sm:grid-cols-4 gap-2 items-center p-2 text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
        >
          <p className="text-white">
            <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
            <img className="inline w-10 mr-5" src={item.image} alt="img" />
          </p>
          <p className="text-sm">{albumData.name}</p>
          <p className="text-sm hidden sm:block">2 days ago</p>
          <p className="text-sm text-center">{item.duration}</p>
        </div>
      ))}
    </>
  ) : null;
};

export default DisplayAlbum;
