import { useEffect, useState } from 'react';
import './App.css'
import products from './ProductData';

function App() {

  const[data , setData]= useState(products)

  const handelButton = (carcat)=>{

    const filterData = products.filter((typeData)=>{
    
      return typeData.type == carcat
  
    })
    setData(filterData)
  }

  useEffect(()=>{
    let singel_car_card = document.querySelectorAll('.singel_car_card')
    
    singel_car_card.forEach((item)=>{
      item.classList.remove('animation');
      void item.offsetWidth;
      item.classList.add('animation');
    });
    

  } , [data])
  

  return (
    <>
        <nav className="nav">
          <div className="container">
            <div className="py-6 px-10 bg-[#1f2431] flex justify-center gap-5 mb-10 mt-10">

              <button onClick={()=>setData(products)} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    All
                </span>
                  </button>
                  <button onClick={()=>handelButton('SUV')} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                SUV
                </span>
                  </button>
                  <button onClick={()=>handelButton('Sedan')} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Sedan
                </span>
                  </button>
                  <button onClick={()=>handelButton('Truck')} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Truck
                </span>
                  </button>
                  <button onClick={()=>handelButton('Sports Car')} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Sports Car
                </span>
                  </button>

            </div>
            <div className="allCards flex gap-10 flex-wrap justify-center">
              {
                data.map((item ,i )=>(
                  <div className="singel_car_card ">
                <div className=" relative product_image w-[300px]  px-[35px] py-[50px] bg-[#E7F0DC] mb-5">
                 {
                  item.discount_price&& 
                  <div className=' absolute top-3 left-3 w-[35px] h-[25px]  text-md font-semibold bg-[#FFA823] flex justify-center items-center '>Sale</div>
                 }
                  <img className='w-[230px] h-[150px]' src={item.image} alt="Food Image" />

                  <div className="card_text">
                    <div className='card_text flex flex-col items-center mt-5'>
                        <h2 className='text-[23px] font-playwrite  mb-5 bg-slate-200 '>{item.name}</h2>
                        <p className='text-lg font-bold  text-[#FFB539]'>{item.discount_price?item.discount_price:item.price} <span className='text-[#5C6574] ml-5 line-through'>{item.discount_price&&item.price}</span></p>
                    </div>
                </div>
                </div>
                
              </div>

                ))
              }
            </div>
          </div>
        </nav>
    </>
  )
}

export default App
