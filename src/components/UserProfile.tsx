import { useAuth } from '../context/AuthContext';

export function UserProfile() {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <div style={{ padding: '1rem', border: '1px solid #4caf50', borderRadius: '8px', marginTop: '1rem' }}>
      <h3>Карточка профиля (3-й уровень вложенности)</h3>
      <p><strong>ID пользователя:</strong> {user.id}</p>
      <p><strong>Имя пользователя:</strong> {user.name}</p>
    </div>
  );
}
