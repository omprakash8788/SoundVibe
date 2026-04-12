const AlbumItem = ({image, name, desc, id}) => {
  // id - add id 
  return (
    <div className="min-w-45 p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
        <img className="rounded" src={image} alt="img" />
        <p className="font-bold mt-2 mb-1">{name}</p>
        <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  )
}

export default AlbumItem