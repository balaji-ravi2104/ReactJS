import React from "react";
import ComponentE from "./ComponentE";

const UserContext = React.createContext()
// This is Example for Default Value 
// const UserContext = React.createContext('Computer And Communication')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}
export default UserContext