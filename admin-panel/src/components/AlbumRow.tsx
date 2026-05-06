const AlbumRow = ({ item, onDelete }) => {
  return (
    <div className="sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 border border-gray-300 text-sm mr-5 bg-gray-100 p-3">
      <img className="w-12" src={item.image} alt={item.name} />
      <p>{item.name}</p>
      <p>{item.desc}</p>
      <input
        type="color"
        value={item.bgColour}
        readOnly
        className="w-12 h-8 cursor-default"
      />

      <p
        className="cursor-pointer text-red-500 font-bold"
        onClick={() => onDelete(item._id)}
      >
        ✕
      </p>
    </div>
  );
};

export default AlbumRow;