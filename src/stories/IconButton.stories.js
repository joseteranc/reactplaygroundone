import React from "react";
import IconButton from "../componnets/IconButton";
import Walk from "../icons/Walk";
import Euro from "../icons/Euro";
import Category from "../icons/Category";

export default {
  title: "Icon Button"
};

export const Inactive = () => (
  <IconButton>
    <Walk />
  </IconButton>
);
export const EuroIcon = () => (
  <IconButton>
    <Euro />
  </IconButton>
);
export const CategoryIcon = () => (
  <IconButton>
    <Category />
  </IconButton>
);
