import Header from './components/Header';

import QrForm from './components/QrForm';

function App() {
  return (
    <div>
      <Header />
      <div className="bg-red-500 flex justify-center mt-20">
        <QrForm />
      </div>
    </div>
  );
}

export default App;
