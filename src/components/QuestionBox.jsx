import "/src/Style/QuestionBox.css";

export default function QuestionBox() {
  return (
    <div className="question-box">
      <div className="q-header">
        <h1>Two Sum</h1>
        <span className="difficulty">Medium</span>
      </div>

      <p>
        Given an array of integers nums and an integer target, return indices of
        the two numbers such that they add up to target.
      </p>

      <h4>Example</h4>
      <pre>
        nums = [2,7,11,15]
        target = 9
        Output = [0,1]
      </pre>
    </div>
  );
}