import {type ChangeEvent, useState, type ReactNode} from "react";

type InputWrapperProps = {
    children: ReactNode;
};

export const InputWrapper = ({children}: InputWrapperProps) => {
    const [value, setValue] = useState('');

    const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);

    return (
        <div>
            <input type="text" value={value} onChange={onChange}/>
            {children}
        </div>
    );
};
