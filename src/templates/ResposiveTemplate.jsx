import React, { useEffect, useState } from "react";

/*
    <RespomsiveTemplate component={component} mobileComponent={MobileComponent}/>
    props:
    component
    mobileComponent
*/
export default function ResposiveTemplate(props) {
  // props.component
  const [screenWith, setScreenWith] = useState(window.innerWidth);
  let Component = props.component;
  if (screenWith <= 768 && props.mobileComponent) {
    Component = props.mobileComponent;
  }
  useEffect(() => {
    window.onload = () => {
      setScreenWith(window.innerWidth);
    };
    window.onresize = () => {
      setScreenWith(window.innerWidth);
    };
    return () => {
      window.removeEventListener("load", window.onload);
      window.removeEventListener("resize", window.onload);
    };
  }, []);
  return <Component />;
}
