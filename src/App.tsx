import { AuthProvider } from './context/AuthContext';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';

export function App() {
  return (
    <AuthProvider>
      <div style={{ maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
        <Header />
        <MainContent />
      </div>
    </AuthProvider>
  );
}

export default App;
