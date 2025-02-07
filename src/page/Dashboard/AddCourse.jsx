
const AddCourse = () => {
  return (
    <section>

      <form>

        {/* course name and image */}
        <div className="flex flex-col gap-6 lg:gap-0 sm:flex-row items-center justify-between">

          {/* course name */}
          <div className="lg:w-[48%] w-full">
            <h1 className="font-bold mb-2">Course Name</h1>

            <input 
              type="text" 
              className="w-full p-3 bg-inherit border border-blue-500 outline-0 focus:border-2 rounded-lg"
              placeholder="Enter Course Name" 
              />
          </div>

          {/* upload Image */}
          <div className='lg:w-[48%] w-full'>
            <h1 className="font-bold mb-2">Course Thumbnail</h1>

            <div className='file_upload p-2 relative border-2 border-dotted border-blue-500 rounded-lg w-full'>
              <div className='flex flex-col w-max mx-auto text-center'>
                <label>
                  <input
                    className='text-sm cursor-pointer w-full hidden'
                    type='file'
                    name='image'
                    id='image'
                    accept='image/*'
                    hidden
                  />
                  <div className='bg-blue-500 text-white border border-blue-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-blue-600 transition'>
                    Upload
                  </div>
                </label>
              </div>
            </div>
          </div>
          
        </div>

        {/* course price and discount */}
        <div className="flex flex-col gap-6 lg:gap-0 sm:flex-row items-center justify-between mt-5">

          {/* course price */}
          <div className="lg:w-[48%] w-full">
            <h1 className="font-bold mb-2">Course Price</h1>

            <input 
              type="number" 
              className="w-full p-3 bg-inherit border border-blue-500 outline-0 focus:border-2 rounded-lg"
              placeholder="Enter Course Price" 
              />
          </div>

          {/* discount */}
          <div className="lg:w-[48%] w-full">
            <h1 className="font-bold mb-2">Discount</h1>

            <input 
              type="number" 
              className="w-full p-3 bg-inherit border border-blue-500 outline-0 focus:border-2 rounded-lg"
              placeholder="Enter Discount" 
              />
          </div>
          
        </div>

        {/* course details */}
        {/* course price */}
        <div className="w-full mt-6">
            <h1 className="font-bold mb-2">Course Details</h1>

            <textarea
            className="w-full p-3 border border-blue-500 outline-0 focus:border-2 rounded-lg h-40 bg-[#0000ff13]"
            placeholder="Write Details About The Course..."
            ></textarea>
        </div>

        <button 
        // disabled={loading}
        className='bg-gradient-to-r from-blue-700 to-blue-400 hover:from-blue-400 hover:to-blue-700 py-3 w-full mt-6 rounded-lg font-bold transition-[0.5s] disabled:cursor-not-allowed disabled:bg-blue-300 text-lg'
        >
            {/* {
                loading ? 
                <ImSpinner9 className='animate-spin mx-auto text-2xl text-white' /> 
                : 
                "Add Course"
            } */}
            Add Course
        </button>

      </form>

    </section>
  )
}

export default AddCourse
