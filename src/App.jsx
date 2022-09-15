import Header from './components/Header';
import QrForm from './components/QrForm';

function App() {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <QrForm />
      </div>
    </div>
  );
}

export default App;
