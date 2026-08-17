import {SlowComponent} from './slowComponent/SlowComponent';
import {InputWrapper} from "./inputWrapper/InputWrapper";

export const Task_3 = () => {

    return (
        <div>
            <div>Лагает когда изменяется value</div>
            <InputWrapper>
                <SlowComponent/>
            </InputWrapper>

        </div>
    );

};
