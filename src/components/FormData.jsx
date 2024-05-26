import React from 'react';
import { useActionState } from 'react-dom/client';  // Ensure this is the correct import based on the documentation you are following

function FormDataComponent() {
    const [result, submitAction, isPending] = useActionState(async (previousState, formData) => {
        const firstNumber = Number(formData.get('firstNumber'));
        const secondNumber = Number(formData.get('secondNumber'));

        if (isNaN(firstNumber) || isNaN(secondNumber)) {
            throw new Error('Invalid input');
        }

        const sum = firstNumber + secondNumber;

        return sum;
    });

    return (
        <form action={submitAction}>
            <input type="text" name="firstNumber" placeholder="First Number" />
            <input type="text" name="secondNumber" placeholder="Second Number" />
            <input type="text" name="result" value={result} readOnly placeholder="Result" />
            <button type="submit" disabled={isPending}>Sum</button>
        </form>
    );
}

export default FormDataComponent;