import React, { createContext, useContext, useState } from "react";

type Role = "client" | "practitioner";

interface UserRoleContextType {
  role: Role;
  setRole: (role: Role) => void;
}

const UserRoleContext = createContext<UserRoleContextType | undefined>(undefined);

export function UserRoleProvider({ children }: { children: React.ReactNode }) {
  const [role, setRole] = useState<Role>("client"); // default

  return (
    <UserRoleContext.Provider value={{ role, setRole }}>
      {children}
    </UserRoleContext.Provider>
  );
}

export function useUserRole() {
  const context = useContext(UserRoleContext);
  if (!context) {
    throw new Error("useUserRole must be used within UserRoleProvider");
  }
  return context;
}
