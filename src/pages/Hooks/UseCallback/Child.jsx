import React, { memo } from "react";

export const Child = (props) => {
  console.log("child render");
  return (
    <div className="bg-dark text-white p-3 fs-3">
      child component :{props.uiLike()}
    </div>
  );
};
export default memo(Child);
