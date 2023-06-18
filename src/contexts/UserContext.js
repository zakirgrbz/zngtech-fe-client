import { useAuth0 } from "@auth0/auth0-react";
import { createContext } from "react";
import { initializeHttpService } from "../services/httpService";
import useCheckUser from "../hooks/useCheckUser";

export const UserContext = createContext();
export const UserContextProvider = ({children}) => {
    const { getAccessTokenSilently } = useAuth0();
    initializeHttpService(getAccessTokenSilently, "http://localhost:8000/api/v1/");
    let user = useCheckUser();

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

// import { createContext, useState, useEffect } from "react";
// export const DataContext = createContext();
// const DataContextProvider = (props) => {
//   //get users
//   const getUserSub = async (pSub) => {
//     const response = await fetch(`http://localhost:8000/api/v1/users/profile/${pSub}`);
//     const getUser = await response.json();
//     console.log(getUser);
//     return getUser;
//   };
//   return (
//     <DataContext.Provider value={{ getUserSub }}>
//       {props.children}
//     </DataContext.Provider>
//   );
// };
// export default DataContextProvider;