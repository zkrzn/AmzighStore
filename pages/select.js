import { useState } from 'react';

const DropdownMenu = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label htmlFor="menu">Menu</label>
      <select
        id="menu"
        value={selectedOption}
        onChange={handleChange}
      >
        <option value="">Select an option</option>
        <option value="option-1">Option 1</option>
        <option value="option-2">Option 2</option>
        <option value="option-3">Option 3</option>
      </select>
      {selectedOption && <p>You selected: {selectedOption}</p>}
    </div>
  );
};

export default DropdownMenu;
