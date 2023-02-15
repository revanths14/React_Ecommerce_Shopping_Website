import React, { useContext } from "react";
// import link
import { Link } from "react-router-dom";
// import icons
import { IoMdAdd, IoMdClose, IoMdRemove } from'react-icons/io';
// import cart context
import { CartContext } from "../context/CartContext";

const CartItem =({item}) => {
    const {removeFromCart,increaseAmount,decreaseAmount} = useContext(CartContext)
// destructure items
const {id,image,title,price,amount}=item
    
    return( <div className='flex gay-x-4 py-2 lg:px-6 border-b
            border-gray-200 w-full font-light text-gray-500 '>
            <div className='w-full min-h-[150px] flex items-center gap-x-4  '>
                {/* {image} */}
                <Link to={`/product/${id}`}>
                 <img className='max-w-[60px]' src={image} alt=''/>   
                </Link>
                <div className="w-full flex flex-col ">
                    {/* {tittle & remove icon} */}
                    <div className="flex justify-between mb-2">
                        {/* {tittle} */}
                        <Link to={`/product/${id}`} className='text-sm
                        uppercase  text-primary hover:underline'>
                            {title}</Link>
                            
                           <div onClick={()=>removeFromCart(id)} className='text-xl cursor-pointer'>
                                <IoMdClose className='text-gray-500
                                 hover:text-red-500 transition '/> 
                            </div> 
                        </div>
                        <div className="
                         flex gap-x-2 h-[36px] text-sm ">
                          {/* {qty} */}
                          <div className='flex flex-1 max-w-[100px]
                          items-center h-full border text-primary font-medium'>
                            {/* {minus icone} */}
                            <div onClick={()=> decreaseAmount(id)} className="flex-1 h-full flex justify-center
                            items-center cursor-pointer">
                            <IoMdRemove />
                            </div>
                            {/* {amount} */}
                            <div className="h-full flex justify-center 
                            items-center px-2">
                                {amount}
                                </div>
                            {/* {plus} */}
                            <div onClick={()=> increaseAmount(id)} className="flex-1 h-full flex justify-center
                            items-center cursor-pointer">
                                <IoMdAdd/>
                            </div>
                          </div>
                          {/* {item price} */}
                          <div className="flex-1 flex items-center 
                          justify-around">$ {price}</div>
                          {/* {final price} */}
                          {/* {make the price at 2 deicimal} */}
                          <div className="flex-1 flex justify-end
                          items-center text-primary font-medium">{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
                        </div>
                </div>
            </div>
        </div>
            
)    
};
export default CartItem;
