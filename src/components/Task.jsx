import { useState } from "react";

const Task = (props) => {
  const [done, setDone] = useState(false);

  return (
    <div>
      <p className={done ? "task-text task-done" : "task-text"} onClick={() => setDone(!done)}>• {props.text}</p>
    </div>
  );
}

export default Task;
