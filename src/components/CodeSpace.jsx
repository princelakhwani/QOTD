import { useState } from "react";
import "/src/Style/CodeSpace.css";

export default function CodeSpace() {
  const [code, setCode] = useState("// write your solution here");

  return (
    <div className="code-space">
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <div className="controls">
        <button className="run">Run Code</button>
        <button className="submit">Submit</button>
      </div>

      <div className="output">Output: [0,1]</div>
    </div>
  );
}
