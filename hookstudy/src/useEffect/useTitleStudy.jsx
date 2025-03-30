import React, { useEffect, useState } from "react";

export default function useTitleStudy() {
  const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
      const htmlTitle = document.querySelector("title");
      htmlTitle.innerText = title;
    };
    useEffect(updateTitle, [title]);
    return setTitle;
  };

  const titleUpdator = useTitle("Loading....");
  setTimeout(() => titleUpdator("Home"), 5000);

  return (
    <div>
      <div>Hi</div>
    </div>
  );
}
