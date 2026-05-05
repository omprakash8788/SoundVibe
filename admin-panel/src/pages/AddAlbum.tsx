import { useState } from "react";
import { assets } from "../assets/assets";
import Spiner from "../components/Spiner";
import { toast } from "react-toastify";
import axios from "axios";
import { url } from "../App";
import FormInput from "../components/FormInput";

const AddAlbum = () => {
  const [image, setImage] = useState<File | null>(null);
  const [colour, setColour] = useState("#121212");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("desc", desc);
      formData.append("image", image);
      formData.append("bgColour", colour);

      const response = await axios.post(`${url}/api/album/add`, formData);
      if (response.data.success) {
        toast.success("Album added");
        setName("");
        setDesc("");
        setImage(null);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Error occured");
      console.log(error);
    }
    setLoading(false);
  };

  return loading ? (
    <Spiner />
  ) : (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-start gap-8 text-gray-600"
    >
      <div className="flex gap-8">
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
              alt="image"
            />
          </label>
        </div>
      </div>
      <FormInput
        label={"Album Name"}
        name="name"
        value={name}
        type="text"
        placeholder="Type here"
        onChange={(e) => setName(e.target.value)}
      />
      <FormInput
        label={"Album Description"}
        name="desc"
        value={desc}
        type="text"
        placeholder="Type here"
        onChange={(e) => setDesc(e.target.value)}
      />
      <FormInput
        label={"Background Colour"}
        name="color"
        value={colour}
        type="color"
        placeholder={""}
        onChange={(e) => setColour(e.target.value)}
      />
      <button
        type="submit"
        className="text-base mb-5 bg-black text-white py-2.5 px-14 cursor-pointer"
      >
        Add
      </button>
    </form>
  );
};

export default AddAlbum;
