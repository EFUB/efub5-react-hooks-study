import '@/App.css';
import { useTabs } from '@/hooks';

const content = [
  {
    tab: 'Section 1',
    content: "I'm the content of the Section 1",
  },
  {
    tab: 'Section 2',
    content: "I'm the content of the Section 2",
  },
];

const UseTabs = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className='App'>
      {content.map((section, index) => (
        <button key={index} onClick={() => changeItem(index)}>
          {/* key = {index} 추가 -> 고유 키 필요 */}
          {section.tab}
        </button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default UseTabs;
