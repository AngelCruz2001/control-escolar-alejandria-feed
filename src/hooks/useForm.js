import { useState } from "react";

export const useForm = (initialState = {}) => {

    const [value, setValue] = useState(initialState);
    const reset = (newFormState = initialState) => {
        setValue(initialState);
    }

    const handleInputChange = ({ target }) => {
        console.log(target);
        console.log(target.value);
        setValue({
            ...value,
            [target.name]: target.value
        })
    }
    return [value, handleInputChange, reset, setValue];

}