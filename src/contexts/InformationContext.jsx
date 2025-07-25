import { createContext } from "react";

// Creates a context, we wrap the components which can access it in a InformationContext.Provider and with props the values we want to share. In the consumer we
// use useContext(InformationContext)
const InformationContext = createContext(null)

export default InformationContext;