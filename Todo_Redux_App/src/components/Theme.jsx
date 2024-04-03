import React, { useState } from "react";
import { useSelector } from "react-redux";

function Theme() {
  const [theme, setTheme] = useState(useSelector((state) => state));
  
  return <div>
    
  </div>;
}

export default Theme;
