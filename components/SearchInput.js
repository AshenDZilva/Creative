const SearchInput = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search post"
    />
  );
};

export default SearchInput;
