const SongRow = ({ item, onDelete }) => {
  return (
    <div className="sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 border border-gray-300 text-sm mr-5 bg-gray-100 p-3">
      <img className="w-12" src={item.image} alt="img" />
      <p>{item.name}</p>
      <p>{item.album}</p>
      <p>{item.duration}</p>
      <p className="cursor-pointer" onClick={() => onDelete(item._id)}>
        X
      </p>
    </div>
  );
};

export default SongRow;
