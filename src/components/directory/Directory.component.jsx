import React, { useState } from "react";
import SECTIONS from "../../utils/sections";
import "./Directory.styles.scss";
import MenuItem from "../menu-item/MenuItem.component"
function Directory() {
  const [sectionsArray, setSectionsArray] = useState(SECTIONS);

  return (
    <div className="directory-menu">
      {sectionsArray.map(({ title, imageUrl, id, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );
}

export default Directory;
