import React from 'react';

interface ComponentDataProps {
  value: string;
  onChange: (value: string) => void;
}

const ComponentData: React.FC<ComponentDataProps> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default ComponentData;