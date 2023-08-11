 import React from 'react';

interface PrimaryButtonProps {
  title: string;
  onClick: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ title, onClick }) => {
  return (
    <button onClick={onClick} style={{ marginRight: '8px' }}>
      {title}
    </button>
  );
};

export default PrimaryButton;
