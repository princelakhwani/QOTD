import { useState } from "react";
import "/src/Style/CodeSpace.css";

const templates = {
  javascript: `function twoSum(nums, target) {
  // Write your code here
}`,
  python: `def two_sum(nums, target):
    # Write your code here`,
  cpp: `#include <bits/stdc++.h>
using namespace std;

int main() {
    // Write your code here
    return 0;
}`
};

export default function CodeSpace() {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState(templates.javascript);
  const [output, setOutput] = useState("Output will appear here");

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    setLanguage(lang);
    setCode(templates[lang]);
    setOutput("Output will appear here");
  };

  const validateCode = () => {
    if (language === "javascript" && !code.includes("function")) {
      return "❌ JavaScript error: function keyword missing";
    }
    if (language === "python" && !code.includes("def")) {
      return "❌ Python error: function definition missing";
    }
    if (language === "cpp" && !code.includes("int main")) {
      return "❌ C++ error: main() function missing";
    }
    return "✅ Code looks correct (mock run)";
  };

  const runCode = () => {
    setOutput(validateCode());
  };

  return (
    <div className="code-space">

      <div className="editor-top">
        <select value={language} onChange={handleLanguageChange}>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="cpp">C++</option>
        </select>
      </div>

      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <div className="controls">
        <button className="run" onClick={runCode}>Run Code</button>
        <button className="submit">Submit</button>
      </div>

      <div className="output">{output}</div>
    </div>
  );
}
