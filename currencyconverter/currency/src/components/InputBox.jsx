import React, { useId } from 'react' // Import React and useId hook for generating unique IDs

function InputBox({
    label, // Label for the input box
    amount, // The amount value to be displayed in the input
    onAmountChange, // Function to handle changes in the amount input
    onCurrencyChange, // Function to handle changes in the selected currency
    currencyOptions = [], // List of available currency options for the dropdown
    selectedCurrency = "USD", // Default selected currency
    amountDisabled = false, // Boolean to disable the amount input field
    currrencyDisabled = false, // Boolean to disable the currency dropdown
    className = "", // Additional custom class names for styling
}) {

    const id = useId() // Generate a unique ID for the input field

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            {/* Left side: Input field for entering the amount */}
            <div className='w-1/2'>
                {/* Label for the input field */}
                <label htmlFor={id} className='text-black/40 mb-2 inline-block'>{label}</label>
                <input 
                    id={id}
                    type="number" // Number input type
                    className='outline-none w-full bg-transparent py-1.5'
                    placeholder='Amount' // Placeholder text
                    disabled={amountDisabled} // Disable input if needed
                    value={amount} // Controlled component value
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} // Call function when value changes
                />
            </div>

            {/* Right side: Dropdown for selecting currency */}
            <div className='w-1/2 flex flex-wrap justify-end text-right'>
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select 
                    className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
                    value={selectedCurrency} // Controlled component value
                    onChange={(e) => { onCurrencyChange && onCurrencyChange(e.target.value) }} // Call function when value changes
                    disabled={currrencyDisabled} // Disable dropdown if needed
                >
                    {/* Mapping through currency options to generate dropdown items */}
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default InputBox // Export the component
  