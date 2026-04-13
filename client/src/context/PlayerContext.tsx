import { createContext } from "react";  

const PlayerContext = createContext(null); 

const PlayerContextProvider = (props) => {  

  const contextValue = {};

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
