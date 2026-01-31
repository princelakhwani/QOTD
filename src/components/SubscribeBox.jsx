import { useState } from "react";
import "/src/Style/SubscribeBox.css";

export default function SubscribeBox() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    setSubscribed(true);
    alert("🎉 Subscription successful! You will now receive daily QOTD reminders.");
  };

  return (
    <button
      className={`subscribe ${subscribed ? "subscribed" : ""}`}
      onClick={handleSubscribe}
      disabled={subscribed}
    >
      {subscribed ? "Subscribed" : "🔔 Subscribe"}
    </button>
  );
}
