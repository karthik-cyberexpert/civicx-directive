import { createContext, useState, useContext, ReactNode } from "react";

type User = {
  name: string;
  email: string;
  gender: "Male" | "Female" | "Other";
  state: string;
  country: string;
  avatarUrl: string;
};

// Mock initial user data
const initialUser: User = {
  name: "John Doe",
  email: "john.doe@example.com",
  gender: "Male",
  state: "California",
  country: "USA",
  avatarUrl: "",
};

interface UserContextType {
  user: User;
  updateUser: (newUserData: Partial<User>) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(initialUser);

  const updateUser = (newUserData: Partial<User>) => {
    setUser((prevUser) => ({ ...prevUser, ...newUserData }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
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