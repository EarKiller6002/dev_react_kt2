import { useAuth } from '../context/AuthContext';
import { LoginForm } from './LoginForm';
import { UserProfile } from './UserProfile';

export function MainContent() {
  const { user } = useAuth();

  return (
    <main style={{ padding: '1rem' }}>
      {user ? (
        <section>
          <h2>Личный кабинет</h2>
          <p>Доступ к закрытому разделу разрешён.</p>
          <UserProfile />
        </section>
      ) : (
        <section>
          <h2>Добро пожаловать!</h2>
          <p>Пожалуйста, представьтесь, чтобы получить доступ к профилю.</p>
          <LoginForm />
        </section>
      )}
    </main>
  );
}
