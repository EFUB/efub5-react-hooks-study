import { useState } from 'react';

export const useInput = (
  initialValue: string,
  validator: (value: string) => boolean
) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    let willUpdate = true;
    // true 이므로 항상 업데이트 됨
    if (typeof validator === 'function') {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};
