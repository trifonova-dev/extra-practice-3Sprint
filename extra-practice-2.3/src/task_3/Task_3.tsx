import {ChangeEvent, useState} from 'react';
import { SlowComponent } from './slowComponent/SlowComponent';

export const Task_3 = () => {
  const [value, setValue] = useState('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);

  return (
    <div>
      <div>Лагает когда изменяется value</div>
      <input type="text" value={value} onChange={onChange} />
      <SlowComponent />
    </div>
  );
};
