import { useAuth } from '../context/AuthContext';

export function Header() {
  const { user, logout } = useAuth();

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <strong>React Context App</strong>
      <div>
        {user ? (
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <span>Привет, <b>{user.name}</b>!</span>
            <button onClick={logout}>Выйти</button>
          </div>
        ) : (
          <span>Вы не авторизованы</span>
        )}
      </div>
    </header>
  );
}
