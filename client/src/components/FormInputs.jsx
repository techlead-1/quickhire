import React from "react";

export const InputBox = ({ type, placeholder, name, value, handleInputChange, disabled = false }) => {
    return (
        <div className="mb-6">
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={(e) => handleInputChange(e.target.value)}
                className="w-full rounded-md border-1 border-primary border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none disabled:bg-gray-300"
                disabled={disabled}
            />
        </div>
    );
};

export const SingleSelect = ({options, handleSelectChange, value}) => {
    return (
        <>
            <div className='relative z-20 mb-5'>
                <select
                    className='relative z-20 w-full appearance-none rounded-md border border-stroke bg-transparent py-3 px-5 text-base outline-none text-body-color transition border-primary focus:border-primary active:border-primary focus-visible:shadow-none disabled:cursor-default disabled:bg-gray-2'
                    value={value}
                    onChange={(e) => handleSelectChange(e.target.value)}
                >
                    {options && options.map(option => (
                        <option key={option.id} value={option.id}>{option.name}</option>
                    ))}
                </select>
                <span className='absolute right-4 top-1/2 z-10 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2 border-body-color'></span>
            </div>
        </>
    )
}

export const DefaultTextarea = ({placeholder, value, handleInputChange, disabled = false}) => {
    return (
        <>
            <textarea
                rows='5'
                placeholder={placeholder}
                className='w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 p-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2'
                value={value}
                onChange={(e) => handleInputChange(e.target.value)}
                disabled={disabled}
            />
        </>
    )
}

const DefaultFileInput = () => {
    return (
        <>
            <input
                type='file'
                className='w-full cursor-pointer rounded-md border border-stroke dark:border-dark-3 text-dark-6 outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke dark:file:border-dark-3 file:bg-gray-2 dark:file:bg-dark-2 file:py-3 file:px-5 file:text-body-color dark:file:text-dark-6 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2'
            />
        </>
    )
}