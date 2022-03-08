import "./App.css";

import { useDispatch, useSelector } from "react-redux";

import { addCommentThunk } from "./store/modules/user/thunks";

function App() {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.user);

  return (
    <div className="App">
      <header className="App-header">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            dispatch(
              addCommentThunk(event.target.querySelector("input").value)
            );
          }}
        >
          <input placeholder="comment"></input>
          <button type="submit">new comment</button>
        </form>
        <ul>
          {users.comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
