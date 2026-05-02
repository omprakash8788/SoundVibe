import { assets } from "../assets/assets";

const AddAlbum = () => {
  return (
    <form
      // onSubmit={onSubmitHandler}
      className="flex flex-col items-start gap-8 text-gray-600"
    >
      <div className="flex gap-8">
        <div className="flex flex-col gap-4">
          <p>Upload Image</p>
          <input type="file" id="image" accept="image/*" hidden />
          <label htmlFor="image">
            <img
              className="w-24 cursor-pointer"
              src={assets.upload_area}
              alt="us"
            />
          </label>
        </div>
      </div>
      {/*  */}
      <div className="flex flex-col gap-2.5">
        <p>Album Name</p>
        <input
          className="bg-transparent outline-green-600 border-2 border-gray-400 p-2 w-100"
          type="text"
          placeholder="Type here"
          required
        />
      </div>

      <div className="flex flex-col gap-2.5">
        <p>Album Description</p>
        <input
          className="bg-transparent outline-green-600 border-2 border-gray-400 p-2 w-100"
          type="text"
          placeholder="Type here"
          required
        />
      </div>

      <div className="flex flex-col gap-2.5">
        <p>Background Colour</p>
        <input type="color" />
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

export default AddAlbum;
