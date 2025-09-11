import { createContext, useState, useContext, ReactNode, useEffect } from "react";

type User = {
  name: string;
  email: string;
  gender: "Male" | "Female" | "Other";
  state: string;
  country: string;
  avatarUrl: string;
};

// Function to get initial user data from local storage or use a mock
const getInitialUser = (): User => {
  const storedUser = localStorage.getItem("currentUser");
  if (storedUser) {
    return JSON.parse(storedUser);
  }
  return {
    name: "John Doe",
    email: "john.doe@example.com",
    gender: "Male",
    state: "California",
    country: "USA",
    avatarUrl: "",
  };
};

interface UserContextType {
  user: User;
  updateUser: (newUserData: Partial<User>) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(getInitialUser);

  // Update local storage whenever user state changes
  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(user));
  }, [user]);

  const updateUser = (newUserData: Partial<User>) => {
    setUser((prevUser) => ({ ...prevUser, ...newUserData }));
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setUser({
      name: "",
      email: "",
      gender: "Other", // Default or empty values after logout
      state: "",
      country: "",
      avatarUrl: "",
    });
  };

  return (
    <UserContext.Provider value={{ user, updateUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};