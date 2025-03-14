import { useState } from 'react';
interface TabItem {
  tab: string;
  content: React.ReactNode;
}
export const useTabs = (initalTab: number, allTabs: TabItem[]) => {
  // if (!allTabs || !Array.isArray(allTabs)) {
  //   return;
  // }
  // 위와 같이 사용시 undefined 반환 가능성이 있어 항상 실행되도록 보장

  if (!Array.isArray(allTabs) || allTabs.length === 0) {
    throw new Error('Tabs 배열이 필요합니다.');
  }

  const [currentIndex, setCurrentIndex] = useState(initalTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};
