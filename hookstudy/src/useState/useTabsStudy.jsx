import React, { useState } from "react";

const content = [
  { tab: "Section1", content: "I'm the content of the Section1" },
  { tab: "Section2", content: "I'm the content of the Section2" },
];

const useTabs = (initalTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initalTab);

  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};
export default function useTabsStudy() {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div>
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div> {currentItem.content}</div>
    </div>
  );
}
