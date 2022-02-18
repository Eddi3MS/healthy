import { NotificationSty } from "./Notification.styled";

function Notification({ message, status }) {
  return (
    <NotificationSty className={status}>
      <p>{message}</p>
    </NotificationSty>
  );
}

export default Notification;
