import { RecoilRoot } from 'recoil';
import Router from './Router';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Router />
      </div>
    </RecoilRoot>
  );
}

export default App;
