import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (<>
     <ToastContainer/>
    <Todo/>
    </>
  );
}

export default App;
