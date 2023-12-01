import React, { createContext, useContext, useReducer } from "react";

// Create your context
const AuthContext = createContext();

// Create your AuthProvider component
const AuthProvider = ({ children }) => {
  // Add your authentication state and logic here
  const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
  };

  const reducer = (state, action) => {
    // Handle authentication actions (login, logout, etc.)
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload.user,
          token: action.payload.token,
        };
      // Add other cases as needed (e.g., LOGOUT)

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // Provide the state and dispatch function to the context
  const contextValue = { state, dispatch };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

// Create a custom hook to use the AuthContext
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
