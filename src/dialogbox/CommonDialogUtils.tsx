
import React from 'react';

export const handleCommonClose = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  onClose: () => void
) => {
  if (event.target === event.currentTarget) {
    onClose();
  }
};
