import styled from "styled-components";
import JoinImage from "../../assets/imgs/bloco_final_image.svg";
import JoinImageMob from "../../assets/imgs/bloco_final_image_mob.svg";

import Notification from "../../components/layout/Notification";

import { useEffect, useState } from "react";

const JoinSty = styled.section`
  margin-inline: 1rem;

  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-around;

  .join__container {
    h2 {
      font-size: 2rem;
      line-height: 2.25rem;
      max-width: 17ch;
      @media (max-width: 680px) {
        font-size: 1.8rem;
        line-height: 2.1rem;
      }
    }
    .join__input {
      gap: 1.5rem;
      margin-top: 2rem;

      @media (max-width: 420px) {
        gap: 0.5rem;
      }

      input {
        height: 52px;
        min-width: 350px;
        border-radius: var(--radius);
        border: 1px solid var(--color-text);
        padding-left: 1rem;

        ::placeholder {
          font-size: 1rem;

          color: var(--color-text);
        }

        @media (max-width: 800px) {
          min-width: 260px;
        }
      }
      input:focus {
        border: 2px solid var(--focus-color);
        outline: none;
      }
      button {
        padding: 10px 20px;
        border-radius: var(--radius);
        background-color: var(--focus-color);
        color: white;

        border: 0;

        cursor: pointer;
        align-items: center;
        justify-content: center;
        transtion: background-color 0.2s ease-in;

        &:hover {
          transtion: background-color 0.2s ease-in;
          background-color: var(--focus-color-hover);
        }
      }
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;

    picture {
      max-width: 100%;
      height: 250px;
      overflow: hidden;
    }
    .join__container {
      margin-block: 2rem;
    }
  }
`;

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

    const enteredEmail = email;
    const emailToAdd = {
      email: enteredEmail,
    };

    fetch(process.env.REACT_APP_ADDRES, {
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
