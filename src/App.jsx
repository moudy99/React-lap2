import "./App.css";
import UserList from "./components/UserList/UserList";
import ToDoApp from "./components/ToDoApp/ToDoApp";
const App = () => {
  return (
    <>
      {/*Assignment--1 */}
      <h1>Assignment---[1]</h1>
      <UserList />
      {/* ---------------------------------------------------------------------- */}
      <hr />
      <hr />
      <hr />
      {/*Assignment--2 */}
      <h1>Assignment---[2] (To DO APP)</h1>
      <hr />
      <hr />
      <hr />
      <div className="container">
        <ToDoApp />
      </div>
    </>
  );
};

// Lets create a react element

export default App;
