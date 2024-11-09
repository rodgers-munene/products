import './App.css';
import AppRouter from './Routes';
import { SidebarProvider } from './containers/SidebarContext';


function App() {


  return (
    <SidebarProvider>
      <div className="App">
        <AppRouter />
      </div>
    </SidebarProvider>
  );
}

export default App;
