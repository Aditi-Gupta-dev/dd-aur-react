import {createContext,useContext} from "react";

//this way is preffered in production everything done in one file=>
export const ThemeContext=createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{},
})

export const ThemeProvider= ThemeContext.Provider;

//creating custom hook to use this context
export  default function useTheme(){
    return useContext(ThemeContext)
}