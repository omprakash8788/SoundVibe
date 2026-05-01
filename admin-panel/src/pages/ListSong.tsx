import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { url } from "../App";

const ListSong = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSong = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${url}/api/song/list`);
        // console.log(response.data)
        if (response.data.success) {
          setData(response.data.songs);
        }
      } catch (error) {
        toast.error("Error occured");
        console.log(error);
      }
      setLoading(false);
    };

    fetchSong();
  }, []);

  return loading ? (
    <div className="grid place-items-center min-h-[80vh]">
      <div className="w-10 h-10 place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin"></div>
    </div>
  ) : (
    <div>
      <p>All Songs List</p>
      <br />
      <div>
        <div className="sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 border border-gray-300 text-sm mr-5 bg-gray-100 p-3">
          <b>Image</b>
          <b>Name</b>
          <b>Album</b>
          <b>Duration</b>
          <b>Action</b>
        </div>
        {
            data.map((item, index)=>{
                return(
                    <div key={index} className="sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 border border-gray-300 text-sm mr-5 bg-gray-100 p-3">
                     <img className="w-12" src={item.image} alt="img" />
                     <p>{item.name}</p>
                     <p>{item.album}</p>
                     <p>{item.duration}</p>
                     <p>X</p>
                    </div>
                )
            })
        }
      </div>
    </div>
  );
};

export default ListSong;
