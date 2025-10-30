import { createContext, useState } from "react";

export const RecpieContext = createContext(null);

const  RecpieContextWarper = (props) => {
 const [recpie, setRecpie] = useState([]);
 
  
  return (
    <>
      <RecpieContext.Provider value={[recpie, setRecpie]}>
        {props.children}
      </RecpieContext.Provider>
    </>
  );
};

export default RecpieContextWarper;
