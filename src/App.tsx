import './App.css';
import InputFeild from './components/InputFeild';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1 className="heading">Todos</h1>
      <InputFeild />
    </div>
  );
};

export default App;
