
type inputProps = {
    htmlName: string;
    labelName: string;
    inputType: string;
    valueInputName: string | number;
    setValueInputName: (value: string) => void;
    requiredTag: boolean;
    disableTag: boolean;
    placeHolderText?: string;
}

function InputAddProduct({htmlName, labelName, inputType, valueInputName, setValueInputName, requiredTag, disableTag, placeHolderText} : inputProps){
    
    //Handle input change based on input type
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        //For number inputs, ensure we're passing a valid value
        if (inputType === 'number') {

            //Only update if the field is empty (to allow clearing) or contains a valid number
            if (e.target.value === '' || !isNaN(Number(e.target.value))) {
                setValueInputName(e.target.value);
            }
        } else {
            //For non-number inputs, pass the value directly
            setValueInputName(e.target.value);
        }
    };

    return(
        //Input field
        <div>
            <label htmlFor={htmlName} className="block mb-2 text-sm font-medium">
                <p>{labelName} {requiredTag && <span className='text-red-500'>*</span>}</p>
            </label>
            <input type={inputType}
             id={htmlName}
             name={htmlName}
             className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white
            dark:bg-zinc-700 text-black dark:text-white"
            value={valueInputName}
            onChange={handleInputChange}
            required={requiredTag}
            disabled={disableTag}
            placeholder={placeHolderText}/>
            
        </div>
    );
}

export default InputAddProduct;
