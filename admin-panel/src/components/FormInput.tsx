const FormInput = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  name,
}) => {
  return (
    <div className="flex flex-col gap-2.5">
      <p>{label}</p>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${
          type === "color"
            ? "w-16 h-10 p-1 cursor-pointer"
            : "bg-transparent outline-green-600 border-2 border-gray-400 p-2 w-100"
        }`}
      />
    </div>
  );
};

export default FormInput;