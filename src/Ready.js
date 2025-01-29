import React from 'react'
import "../node_modules/font-awesome/css/font-awesome.min.css"

const Ready = () => {

    return (

        <div >

            <header className='flex flex-row text-xs items-center justify-between font-medium pl-0 h-16 pr-0  bg-gray-200 sm: sm:flex-row sm:text-base sm:pl-6 sm:pr-0 '>

                <div className=' gap-2  flex sm: flex-row   items-center sm:gap-4  '>

                    <span>Canvas</span>
                    <span>Docs</span>
                    <div className="w-0.8 w-1/4 text-bold"  >l</div>
                    <i className="fa fa-minus"></i>
                    <i className="fa fa-plus">   </i>
                    <i className="fa fa-refresh"></i>
                    <i className="fa fa-file"></i>
                </div>

                <div className='flex ml-12 gap-2 w-1/2 sm: flex-row items-center sm:gap-4 sm:ml-0 w- '>

                    <select className=' w-1/2  sm: sm:border font-semibold outline-none sm:w-3/4 ' name={"select"}     >

                        <option selected className='bg-gray-400 text-white' disabled   >Select Resoluution</option>
                        <optgroup label="Mobile Resolutions" >
                            <option value={"Iphone-4"}  >320 X 480 - Iphone 4</option>
                            <option value={"iphone 5/SE"}  >320 X 568 -iPhone 5/SE </option>
                            <option value={"small android phones"} >360 X 640 - Small Android Phones </option>
                            <option value={"iPhone 6/7/8"}   >375 X 667 - iPhone 6/7/8</option>
                            <option value={"iPhone x/11/12/13"}    >375 X 812 - iPhone X/11/12/13</option>
                            <option value={"samsung galaxy s8"}  >360 X 740 - Samsung Galaxy S8</option>
                            <option value={"google pixel2"}  >411 X 731 - Google Pixel 2</option>
                            <option value={"google pixel4"}>412 X 869 - Google Pixel 4</option>
                            <option value={"samsung galaxy s20 ultra"} >Samsung Galaxy S20 Ultra</option>
                            <option value={"iPhone 8 Plus"}>414 X 736 - iPhone 8 Plus</option>
                            <option value={"iPhone xr"} >414 X 896 - iPhone XR</option>
                        </optgroup>

                        <optgroup label="Tablet Resolutions  ">

                            <option value={"small tablets generic"}  >600 X 960 - Small Tablets (Generic)</option>
                            <option value={"ipad mini/ipod"}  >768 X 1024 - iPad Mini / iPod (9.7)</option>
                            <option value={"samsung galaxy tab"}  >800 X 1280 - Samsung Galaxy Tab</option>
                            <option value={"iPad pro11"}  >834 X 1194 - iPad Pro 11</option>

                        </optgroup>
                    </select>
                    <i className='fa fa-image'></i>
                    <i className='fa fa-archive'  ></i>
                    <i className='fa fa-list'   ></i>

                </div>



            </header>









        </div>



    )
}

export default Ready



