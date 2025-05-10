
type inputProps = {
    name: string;
    labelName: string;
    inputType: string;
    valueInputName: string;
    setValueInputName: (value: string) => void;
    requiredTag: boolean;
    disableTag: boolean;

}


function InputAddProduct({name, labelName, inputType, valueInputName, setValueInputName, requiredTag, disableTag} : inputProps){
    return(
        // Input field
        <div>
            <label htmlFor={name} className="block mb-2 text-sm font-medium">
                <p>{labelName} <span className='text-red-500'>*</span></p>
            </label>
            <input type={inputType}
             id={name}
             name={name}
             className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white
            dark:bg-zinc-700 text-black dark:text-white"
            value={valueInputName}
            onChange={(e) => setValueInputName(e.target.value)}
            required={requiredTag}
            disabled={disableTag}/>
        </div>
    );
}

export default InputAddProduct;
