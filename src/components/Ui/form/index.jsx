import React, { Fragment } from "react";

const Index = ({ styles, children }) => {
  return (
    <Fragment>
      <from
        className={`flex flex-wrap w-10/12 justify-between ${
          styles ? "flex-col items-center" : ""
        }`}
      >
        {children}
      </from>
    </Fragment>
  );
};

export default Index;
