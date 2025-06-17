import {getStudents} from './services/getStudents';
function App() {
  const data = getStudents();
  console.log(data);
  return (
    <div>
      <main>
        <h1>Bendano, Devin</h1>
        <h2>Section B</h2>
      </main>
    </div>
  );
}

export default App;
