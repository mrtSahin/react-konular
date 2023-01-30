import './App.css';
import Home from './components/Home';
import {  AuthProvider ,SiteProvider} from './context'

function App() {
  return (
    <SiteProvider>
      <AuthProvider>
        <Home />
      </AuthProvider>
    </SiteProvider>
  );
}

export default App;
