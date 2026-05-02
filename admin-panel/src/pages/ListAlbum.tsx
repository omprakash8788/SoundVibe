import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { url } from "../App";

const ListAlbum = () => {
  const [data, setData] = useState([]);
  console.log(data)

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get(`${url}/api/album/list`);
        if (response.data.success) {
          setData(response.data.albums);
        }
      } catch (error) {
        toast.error("Error occured");
        console.log(error);
      }
    };
    fetchAlbums();
  }, []);

  return <div>ListAlbum</div>;
};

export default ListAlbum;
