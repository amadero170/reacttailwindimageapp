import React from "react"
function Tag({tagName}) {
    return (
    <div className="inline-block px-3 py-1 text-xs text-gray-700 bg-gray-200 rounded-full mr-2">
       #{tagName}
    </div>
    )
}

export default Tag