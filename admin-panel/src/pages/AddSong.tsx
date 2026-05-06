import { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { toast } from "react-toastify";
import axios from "axios";
import { url } from "../App";
import Spiner from "../components/Spiner";
import FormInput from "../components/FormInput";

const AddSong = () => {
  const [image, setImage] = useState<File | null>(null);
  const [song, setSong] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [album, setAlbum] = useState("none");
  const [loading, setLoading] = useState(false);
  const [albumData, setAlbumData] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("desc", desc);
      formData.append("image", image);
      formData.append("audio", song);
      formData.append("album", album);
      const response = await axios.post(`${url}/api/song/add`, formData);
      if (response.data.success) {
        toast.success("Song Added");
        setName("");
        setAlbum("None");
        setDesc("");
        setImage(null);
        setSong(null);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Error occured");
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    const loadAlbumData = async () => {
      try {
        const response = await axios.get(`${url}/api/album/list`);
        if (response.data.success) {
          setAlbumData(response.data.albums);
        } else {
          toast.error("unable to load albums data");
        }
      } catch (error) {
        toast.error("Error occured");
        console.log(error);
      }
    };
    loadAlbumData();
  }, []);

  return loading ? (
    <Spiner />
  ) : (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-start gap-8 text-gray-600"
    >
      <div className="flex gap-8">
        <div className="flex flex-col gap-4">
          <p>Upload Song</p>
          <input
            onChange={(e) => setSong(e.target.files[0])}
            type="file"
            id="song"
            accept="audio/*"
            hidden
          />
          <label htmlFor="song">
            <img
              className="w-24 cursor-pointer"
              src={song ? assets.upload_added : assets.upload_song}
              alt="us"
            />
          </label>
        </div>

        <div className="flex flex-col gap-4">
          <p>Upload Image</p>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            accept="image/*"
            hidden
          />
          <label htmlFor="image">
            <img
              className="w-24 cursor-pointer"
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="us"
            />
          </label>
        </div>
      </div>
      <FormInput
        label={"Song Name"}
        name="name"
        value={name}
        type="text"
        placeholder="Type here"
        onChange={(e) => setName(e.target.value)}
      />
       <FormInput
        label={"Song Description"}
        name="desc"
        value={desc}
        type="text"
        placeholder="Type here"
        onChange={(e) => setDesc(e.target.value)}
      />
     <div className="flex flex-col gap-2.5">
        <p>Album</p>
        <select
          onChange={(e) => setAlbum(e.target.value)}
          defaultValue={album}
          className="bg-transparent outline-green-600 border-2 border-gray-400 p-2 w-37.5"
        >
          <option value="none">None</option>
          {albumData.map((item, index) => (
            <option key={index} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="text-base mb-5 bg-black text-white py-2.5 px-14 cursor-pointer"
      >
        Add
      </button>
    </form>
  );
};

export default AddSong;
