import React from 'react'

function LocalMove() {
  return (
   
    <div className='w-full bg-white rounded-xl shadow-lg p-8  mb-2'>
      <form method='post'>
        <h2 className='text-gray-600 font-medium uppercase text-xl'>Local Move</h2>
        <div className='flex flex-row space-x-4  pb-3'>
          <div className='bg-gray-200 px-2 rounded-full space-x-1'>
            <input type='radio' name='moveType' id='rdVilla' />
            <label for='rdVilla'>Villa</label>
          </div>
          <div className='bg-gray-200 px-2 rounded-full space-x-1 '>
            <input type='radio' name='moveType' id='rdStudio' />
            <label for='rdStudio'>Studio</label>
          </div>

          <div className='bg-gray-200 px-2 rounded-full space-x-1 '>
            <input type='radio' name='moveType' id='rd1Bhk' />
            <label for='rd1Bhk'>1 BHK</label>
          </div>

          <div className='bg-gray-200 px-2 rounded-full space-x-1 '>
            <input type='radio' name='moveType' id='rd2Bhk' />
            <label for='rd2Bhk'>2 BHK</label>
          </div>

          <div className='bg-gray-200 px-2 rounded-full space-x-1  '>
            <input type='radio' name='moveType' id='rd3Bhk' />
            <label for='rd3Bhk'>3 BHK</label>
          </div>
        </div>
        <div className='flex flex-row  space-x-6 py-4 border-y border-gray-300'>

          <div className='w-full '>
            <p className='text-sm text-gray-600'>Moving from</p>
            <input className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' type='text' />
          </div>

          <div className='w-full '>
            <p className='text-sm text-gray-600'>Moving to</p>
            <input className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' type='text' />
          </div>

          <div class="datepicker relative form-floating ">
            <p for="floatingInput" class="text-sm text-gray-600">Select a date</p>
            <input type="date"  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Select a date" />

          </div>
        </div>
        <div className='flex w-full mt-5  justify-center'>

        <button className='bg-blue-800 p-3 hover:bg-orange-400 rounded w-28 text-white'>next</button>
        </div>

      </form>
    </div>
  )
}

export default LocalMove