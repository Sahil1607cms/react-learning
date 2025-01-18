import React, { useId } from 'react'

// A functional component for creating a customizable input box with a label, input field, and dropdown.
function InputBox({
    label,                  // Label text for the input field
    amount,                 // Current value of the amount input field
    onAmountChange,         // Callback function triggered when the amount changes
    onCurrencyChange,       // Callback function triggered when the currency selection changes
    currencyOptions = [],   // Array of available currency options for the dropdown
    selectCurrency = "usd", // Default selected currency in the dropdown
    amountDisable = false,  // Flag to disable the amount input field
    currencyDisable = false,// Flag to disable the currency dropdown
    className = "",         // Additional CSS classes for styling the container
}) {
    // Generates a unique ID for the amount input field

    const currencyID=useId();
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={currencyID} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input      
                    id={currencyID}          // Unique ID for the input field
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number" // Input type is 'number'
                    placeholder="Amount"
                    value={amount}
                    disabled={amountDisable}
                    onChange={(e)=>onAmountChange(Number(e.target.value))}
                />
            </div>

            {/* Right section for the currency dropdown */}
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                {/* Label for the dropdown */}
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                {/* Dropdown for selecting the currency */}

                <select
                value={selectCurrency}
                onChange={(e)=>onCurrencyChange(e.target.value)}
                disabled={currencyDisable}
                className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none">
                    
                    {currencyOptions.map((value)=>{
                        <option key={value} value={value}>
                            {value}
                        </option>
                    })}
                    
                </select>
            </div>
        </div>
    );
}

export default InputBox; // Export the component for use in other parts of the application