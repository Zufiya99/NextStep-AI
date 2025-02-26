import React from "react";

const CoverLetter = async ({ params }) => {
  const id = await params.id;

  return <div className="py-60">Coverletter : {id}</div>;
};

export default CoverLetter;
