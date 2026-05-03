import { useEffect } from "react";
import { toast } from "react-toastify";
import { deleteSong, fetchSongs } from "../features/song/songSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";

const ListSong = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.song);
  
  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteSong(id));
    toast.success("Song deleted");
  };

  if (error) {
    return (
      <div className="grid place-items-center min-h-[80vh]">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

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
        {data?.map((item, index) => {
          return (
            <div
              key={index}
              className="sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 border border-gray-300 text-sm mr-5 bg-gray-100 p-3"
            >
              <img className="w-12" src={item.image} alt="img" />
              <p>{item.name}</p>
              <p>{item.album}</p>
              <p>{item.duration}</p>
              <p
                className="cursor-pointer"
                onClick={() => handleDelete(item._id)}
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

export default ListSong;
