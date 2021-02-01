import './App.css';

function App() {

  const hitBackend = () => {
    const div = document.getElementById('response');
    fetch('/test')
    .then((response) => {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      } else {
        return response.json()
      }
    })
    .then((data) => {
      div.innerHTML = data['navn']
    })
    }
  return (
    <div className="App">
      <button  type="button" class="btn btn-primary" onClick={hitBackend}>Send request</button>

      <div id="response">

      </div>
    </div>
  );
}

export default App;
