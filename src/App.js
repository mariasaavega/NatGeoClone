import './App.scss';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import SubHeader from './components/SubHeader';

function App() {
  return (
    <div className="App">
      <Header />
      <SubHeader />
      <MainContainer />
    </div>
  );
}

export default App;
