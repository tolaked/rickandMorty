import React from 'react'

const Paginate = ({handleNext, handlePrevious,isDisabled,pageNumber}) => {
  return (
    <div className='pagination-buttons'>
        <button className='previous' onClick={handlePrevious} disabled={pageNumber === 1}>Prev</button>
        <button className='next' onClick={handleNext} disabled={isDisabled}>Next</button>
    </div>
  )
}

export default Paginate