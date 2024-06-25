"use client";

import React from "react";

type ErrorProps = {
  message: string;
};

const Error: React.FC<ErrorProps> = ({ message }) => {
  return (
    <div>
      <h1>Oops! Something went wrong. :(</h1>
      <p>{message}</p>
    </div>
  );
};

export default Error;
