import React, { useEffect } from "react";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};

export default function useNotificationStudy() {
  const triggerNotif = useNotification("Can I steal yours", {
    body: "I love it don't you",
  });
  return (
    <div>
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
}
