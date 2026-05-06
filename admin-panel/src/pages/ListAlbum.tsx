import { useEffect } from "react";
import { toast } from "react-toastify";
import Spiner from "../components/Spiner";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { deleteAlbum, fetchAlbum } from "../features/album/albumSlice";
import AlbumRow from "../components/AlbumRow";

const ListAlbum = () => {
  const dispatch = useAppDispatch();
  const { data, error, loading } = useAppSelector((state) => state.album);

  useEffect(() => {
    dispatch(fetchAlbum())
  },[dispatch]);
  
  const handleDelete = async (id) => {
  const result = await dispatch(deleteAlbum(id));

  if (deleteAlbum.fulfilled.match(result)) {
    toast.success("Album deleted");
  } else {
    toast.error("Too many requests");
  }
};
  useEffect(() => {
  if (error) {
    toast.error(error);
  }
}, [error]);

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
        {data?.map((item) => {
          return (
           <AlbumRow item={item} onDelete={handleDelete} key={item._id}/>
          );
        })}
      </div>
    </div>
  );
};

export default ListAlbum;
