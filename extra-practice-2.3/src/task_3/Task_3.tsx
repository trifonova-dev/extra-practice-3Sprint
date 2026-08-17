import {SlowComponent} from './slowComponent/SlowComponent';
import {Input} from "./input/Input";

export const Task_3 = () => {


  return (
    <div>
      <div>Лагает когда изменяется value</div>
      <Input/>
      <SlowComponent />
    </div>
  );
};
