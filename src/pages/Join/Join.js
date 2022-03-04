import { useEffect, useState } from "react";
import JoinImage from "../../assets/imgs/bloco_final_image.svg";
import JoinImageMob from "../../assets/imgs/bloco_final_image_mob.svg";
import Notification from "../../components/layout/Notification";
import { JoinSty } from "./Join.styled";

function Join() {
  const [feedback, setFeedback] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [feedbackStatus, setFeedbackStatus] = useState("");

  const [email, setEmail] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setFeedbackMessage("");
      setFeedbackStatus("");
      setFeedback(false);
    }, 2000);
    return () => clearInterval(interval);
  });

  function addEmailHandler(e) {
    e.preventDefault();

    if (email.trim().length === 0 || !email.includes("@")) {
      return;
    }

    const emailToAdd = {
      email,
    };

    fetch(process.env.REACT_APP_ADDRESS, {
      method: "POST",
      body: JSON.stringify(emailToAdd),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          setFeedbackStatus("success");
          setFeedbackMessage("Success! Your email was added to the list.");
          setFeedback(true);
          setEmail("");
        } else {
          throw new Error("Error! Something went wrong, try again later.");
        }
      })
      .catch((err) => {
        setFeedbackStatus("error");
        setFeedbackMessage(err.message);
        setFeedback(true);
        setEmail("");
      });
  }
  return (
    <JoinSty className="flex" id="join">
      <picture>
        <source media="(max-width:800px)" srcSet={JoinImageMob} />
        <source media="(min-width:800px)" srcSet={JoinImage} />
        <img src={JoinImage} alt="just an ornament" />
      </picture>

      {feedback ? (
        <Notification message={feedbackMessage} status={feedbackStatus} />
      ) : null}

      <div className="join__container">
        <h2>Join our membership to get special offer</h2>

        <form
          className="join__input  mulish__font flex"
          onSubmit={addEmailHandler}
        >
          <input
            type="email"
            name="email"
            id="email"
            required
            value={email}
            placeholder="Enter your email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="flex" type="submit">
            Join
          </button>
        </form>
      </div>
    </JoinSty>
  );
}

export default Join;
