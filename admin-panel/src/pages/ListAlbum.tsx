import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { url } from "../App";
import Spiner from "../components/Spiner";

const ListAlbum = () => {
  const [data, setData] = useState([]);
  // console.log(data);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAlbums = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${url}/api/album/list`);
        if (response.data.success) {
          setData(response.data.albums);
        }
      } catch (error) {
        toast.error("Error occured");
        console.log(error);
      }
      setLoading(false);
    };
    fetchAlbums();
  }, [refresh]);

  const removeAlbum = async (id) => {
    try {
      const response = await axios.post(`${url}/api/album/remove`, { id });
      if (response.data.success) {
        setRefresh(true);
        toast.success(response.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };

  return loading ? (
    <Spiner />
  ) : (
    <div>
      <p>All Albums List</p>
      <br />
      <div>
        <div className="sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 border border-gray-300 text-sm mr-5 bg-gray-100 p-3">
          <b>Image</b>
          <b>Name</b>
          <b>Description</b>
          <b>Album colour</b>
          <b>Action</b>
        </div>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 border border-gray-300 text-sm mr-5 bg-gray-100 p-3"
            >
              <img className="w-12" src={item.image} alt="img" />
              <p>{item.name}</p>
              <p>{item.desc}</p>
              <input type="color" value={item.bgColour} readOnly />
              <p
                className="cursor-pointer"
                onClick={() => removeAlbum(item._id)}
              >
                X
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListAlbum;
