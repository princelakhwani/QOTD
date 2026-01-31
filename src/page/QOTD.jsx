import CodeSpace from "../components/CodeSpace";
import HintBox from "../components/HintBox";
import Leaderboard from "../components/Leaderboard";
import QuestionBox from "../components/QuestionBox";
import Stats from "../components/Stats";
import SubscribeBox from "../components/SubscribeBox";
import "/src/page/QOTD.css";

export default function QOTD() {
  return (
    <div className="qotd-page">

      {/* Top Bar */}
      <div className="top-bar">
        <h2>QOTD • TechLearn</h2>
        <div className="top-right">
          <Stats />
          <SubscribeBox />
        </div>
      </div>

      {/* Main Area */}
      <div className="main-area">
        <div className="problem-panel">
          <QuestionBox />
          <HintBox />
        </div>

        <div className="editor-panel">
          <CodeSpace />
        </div>
      </div>

      {/* Bottom Area */}
      <div className="bottom-area">
        <Leaderboard />
      </div>

    </div>
  );
}
