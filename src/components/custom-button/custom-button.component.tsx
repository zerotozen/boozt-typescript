import React from "react";

import "./custom-button.styles.scss";

interface CustomButtomProps {
  children: string;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtomProps> = ({ children, onClick }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomButton;
