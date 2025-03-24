import React from "react";

const useConfirm = (message = "", callback, rejection) => {
  if (typeof callback !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      callback;
    } else {
      rejection;
    }
  };
  return confirmAction;
};

export default function useConfirmStudy() {
  const deleteWord = () => console.log("Deleting the word");
  const abort = () => console.log("aboretedd");

  const confirmDelete = useConfirm("Are you sure?", deleteWord, abort);

  return (
    <div>
      <button onClick={confirmDelete}>delete the word</button>
    </div>
  );
}
