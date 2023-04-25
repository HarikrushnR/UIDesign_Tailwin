import Image from 'next/image'

export default function Home() {
  return (
    <section className=' bg-[#6438d7] w-full min-h-screen py-4'>
      <div className='w-11/12 mx-auto container'>
        <div className='w-full'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#fff" className="w-6 pt-5 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </div>

        <div className='bg-[#fff] w-full h-fit mx-auto  mt-10 py-10 rounded-[25px] relative'>
          <div className='flex items-center w-full flex-col  mx-auto -mt-[96px]'>
            <img
              className='rounded-full w-[100px] border-8'
              src="https://www.faceapp.com/static/img/content/compare/old-example-before@3x.jpg"
              alt="image"
            />
            <p className='font-bold text-xl'>Boris McCranie</p>
          </div>

          <div className='bg-[#faf8ff] w-11/12 mx-auto rounded-lg  my-5 flex items-center justify-around px-2  md:px-6 lg:px-10 py-4'>
            <div className='flex flex-col items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f8a418" className="w-6 h-6">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
              </svg>
              <p className='font-bold text-base'>230</p>
              <p className='font-light text-sm'>Score</p>
            </div>

            <span className='border-r-2 h-12'></span>

            <div className='flex flex-col items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#96dee4" className="w-6 h-6">
                <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
              </svg>
              <p className='font-bold text-base'>#20</p>
              <p className='font-light text-sm'>Ranking</p>
            </div>

            <span className='border-r-2 h-12'></span>

            <div className='flex flex-col items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ec594d" className="w-6 h-6">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
              </svg>
              <p className='font-bold text-base'>03 Mins</p>
              <p className='font-light text-sm'>Completed</p>
            </div>
          </div>


          <div className='w-full px-5 mt-8 lg:px-20'>
            <hr />
            <div className='flex items-center gap-2 my-6'>
              <span className='border-r-4 border-yellow-500  h-4'></span>
              <p className='font-bold text-[#605d64] text-lg'>Top Ranking</p>
            </div>

            <hr />

            <div className='mt-5 flex flex-col space-y-3'>
              <div className='flex items-center justify-start gap-4'>
                <p className='text-base font-bold text-[#523b90]'>#1</p>
                <div className='text-base flex items-center gap-4'>
                  <img
                    className='rounded-full w-[50px] '
                    src="https://www.faceapp.com/static/img/content/compare/old-example-before@3x.jpg"
                    alt="image"
                  />
                  <div>
                    <p className='font-bold'>Ronald Welch</p>
                    <p className='font-bold text-[#605d64]'>Score: <span className='text-sm text-[#523b90]'>1203</span></p>
                  </div>
                </div>
              </div>
              <hr />

              <div className='flex items-center justify-start gap-4 my-2'>
                <p className='text-base font-bold text-[#523b90]'>#2</p>
                <div className='text-base flex items-center gap-4'>
                  <img
                    className='rounded-full w-[50px] '
                    src="https://www.faceapp.com/static/img/content/compare/old-example-before@3x.jpg"
                    alt="image"
                  />
                  <div>
                    <p className='font-bold'>John Peter</p>
                    <p className='font-bold text-[#605d64]'>Score: <span className='text-sm text-[#523b90]'>1000</span></p>
                  </div>
                </div>
              </div>
              <hr />

              <div className='flex items-center justify-start gap-4 my-2'>
                <p className='text-base font-bold text-[#523b90]'>#3</p>
                <div className='text-base flex items-center gap-4'>
                  <img
                    className='rounded-full w-[50px] '
                    src="https://www.faceapp.com/static/img/content/compare/old-example-before@3x.jpg"
                    alt="image"
                  />
                  <div>
                    <p className='font-bold'>Ronald Welch</p>
                    <p className='font-bold text-[#605d64]'>Score: <span className='text-sm text-[#523b90]'>1203</span></p>
                  </div>
                </div>
              </div>
              <hr />

              <div className='flex items-center justify-start gap-4 my-2'>
                <p className='text-base font-bold text-[#523b90]'>#4</p>
                <div className='text-base flex items-center gap-4'>
                  <img
                    className='rounded-full w-[50px] '
                    src="https://www.faceapp.com/static/img/content/compare/old-example-before@3x.jpg"
                    alt="image"
                  />
                  <div>
                    <p className='font-bold'>John Peter</p>
                    <p className='font-bold text-[#605d64]'>Score: <span className='text-sm text-[#523b90]'>1000</span></p>
                  </div>
                </div>
              </div>
              <hr />

              <div className='flex items-center justify-start gap-4 my-2'>
                <p className='text-base font-bold text-[#523b90]'>#5</p>
                <div className='text-base flex items-center gap-4'>
                  <img
                    className='rounded-full w-[50px] '
                    src="https://www.faceapp.com/static/img/content/compare/old-example-before@3x.jpg"
                    alt="image"
                  />
                  <div>
                    <p className='font-bold'>Ronald Welch</p>
                    <p className='font-bold text-[#605d64]'>Score: <span className='text-sm text-[#523b90]'>1203</span></p>
                  </div>
                </div>
              </div>
              <hr />

              <div className='flex items-center justify-start gap-4 my-2'>
                <p className='text-base font-bold text-[#523b90]'>#6</p>
                <div className='text-base flex items-center gap-4'>
                  <img
                    className='rounded-full w-[50px] '
                    src="https://www.faceapp.com/static/img/content/compare/old-example-before@3x.jpg"
                    alt="image"
                  />
                  <div>
                    <p className='font-bold'>John Peter</p>
                    <p className='font-bold text-[#605d64]'>Score: <span className='text-sm text-[#523b90]'>1000</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
