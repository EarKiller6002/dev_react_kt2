import { useState, FormEvent } from 'react';
import { useAuth } from '../context/AuthContext';

export function LoginForm() {
  const [name, setName] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.trim()) {
      login(name);
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
      <input
        type="text"
        placeholder="Введите ваше имя..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type="submit">Войти</button>
    </form>
  );
}
