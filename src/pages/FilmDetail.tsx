import React from "react";
import { useParams } from "react-router-dom";

const FilmDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return <h1>Film Detail Page: {id}</h1>;
};

export default FilmDetail;
