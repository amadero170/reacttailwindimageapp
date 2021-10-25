import React from 'react'
import {useState} from 'react'

function SearchBar( {searchText} ) {
const [text,setText] = useState("")
const onSubmit = (e) =>{
e.preventDefault();
searchText(text)}
    return (
        <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
            <form onSubmit = {onSubmit} className="bg-white rounded px-8 pt-6 pb-8 mb-4">
                <div className="flex items-center justify-center border-teal-500 py-2">
                <input onChange = {e=>setText(e.target.value)} className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline" type="text" />
                <button type="submit" className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Send
                </button>
            </div>
            </form>
        </div>
    )
}

export default SearchBar;