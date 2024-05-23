import React from 'react'

const Message = ({ variant, children}) => {
    const getVariantClass = () => {
        if(variant === 'success'){
            return 'bg-green-100 border-green-400 text-green-700'
        }else if(variant === 'error'){
            return 'bg-red-100 border-red-400 text-red-700'
        }else if(variant === 'warning'){
            return 'bg-yellow-100 border-yellow-400 text-yellow-700'
        }
    }
  return (
    <div className={`p-4 rounded ${getVariantClass()}`}>
      {children}       
    </div>
  )
}

export default Message
