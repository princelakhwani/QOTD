import CodeSpace from "../components/CodeSpace";
import HintBox from "../components/HintBox";
import Leaderboard from "../components/Leaderboard";
import QuestionBox from "../components/QuestionBox";
import Stats from "../components/Stats";
import SubscribeBox from "../components/SubscribeBox";
import "/src/page/QOTD.css";
import { useState } from "react";

export default function QOTD() {
  const [activeTab, setActiveTab] = useState(null);

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
        <div className="left-panel">
          <QuestionBox />
        </div>

        <div className="right-panel">
          <CodeSpace />
        </div>
      </div>

      {/* Bottom Toggle Bar */}
      <div className="bottom-tabs">
        <button onClick={() => setActiveTab(activeTab === "hint" ? null : "hint")}>
          💡 Hint
        </button>
        <button onClick={() => setActiveTab(activeTab === "leaderboard" ? null : "leaderboard")}>
          🏆 Leaderboard
        </button>
      </div>

      {/* Expandable Content */}
      {activeTab && (
        <div className="bottom-content">
          {activeTab === "hint" && <HintBox />}
          {activeTab === "leaderboard" && <Leaderboard />}
        </div>
      )}

    </div>
  );
}
