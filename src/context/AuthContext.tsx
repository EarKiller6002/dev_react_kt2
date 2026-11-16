import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface User {
  id: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (name: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const STORAGE_KEY = 'app_auth_user';

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem(STORAGE_KEY);
      if (savedUser) {
        const parsedUser: User = JSON.parse(savedUser);
        if (parsedUser && parsedUser.id && parsedUser.name) {
          setUser(parsedUser);
        }
      }
    } catch (error) {
      console.error('Ошибка при чтении данных пользователя из localStorage:', error);
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const login = (name: string) => {
    const trimmedName = name.trim();
    if (!trimmedName) return;

    const newUser: User = {
      id: crypto.randomUUID(),
      name: trimmedName,
    };

    setUser(newUser);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth должен использоваться внутри AuthProvider');
  }
  return context;
}
