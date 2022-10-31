import Welcome from "./components/Welcome";

const names =['Brad','Gabby','Art']

function App() {
  return (
    <>
    <h1> Passing Props</h1>
    
    {name.map(name => (
      <Welcome name={name} />
    ))}
    <Welcome name={names[0]} greeting="welcome"/>
    <Welcome name={names[1]} greeting="welcome"/>
    <Welcome name={names[2]} greeting="welcome"/>
    <Welcome name="Gerly" greeting="welcome"/>
    </>
  );
  }
  export default App;