import { createContext, useContext, useEffect, useReducer } from "react";

const ThemeContext = createContext();

const ThemeProvider = ThemeContext.Provider;

export function useTheme() {
  return useContext(ThemeContext);
}
const reducer = (state, action) => {
  switch (action.type) {
    case "setDarkMode":
      return { theme: "dark" };
      break;
    case "setLightMode":
      return { theme: "light" };
      break;

    default:
      return state;
      break;
  }
};

export const darkAction = () => {
  return { type: "setDarkMode" };
};
export const lightAction = () => {
  return { type: "setLightMode" };
};

function ThemeWrapper({ children }) {
  const intState = {
    theme: "light",
  };
  const [state, dispatch] = useReducer(reducer, intState);
  useEffect(() => {
    console.log("inside effect" ,  state );
    
    if (state?.theme === "light") {
        
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [state]);
  return (
    <ThemeProvider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </ThemeProvider>
  );
}

export default ThemeWrapper;
