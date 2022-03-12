import { useState } from 'react'
import '../components/css/people.css'
import { Iproduct } from '../types/product'
import usePeople from './hook/usePeople'
import useProduct from './hook/useProduct'
import RegisterPeople from './RegisterPeople'
import RegisterProduct from './RegisterProduct'

export interface IOrder{
  name: string;
  phone: number;
  namePizza: string;
  price: number;
  date: string;
  ingredients:Iproduct[]
}
const Home = () => {
  const [order, setOrder]=useState<IOrder>({
    name: '',
    phone: 0,
    namePizza: '',
    price: 0,
    date:'',
    ingredients:[]
  })
  const {handleChange}=useProduct({order,setOrder})
  const {onChangePeople}=usePeople({order,setOrder})
  return (
     <div className={'container-custom'}>
       <div className={'row'}>
        <RegisterProduct handleChange={handleChange}/>
       </div>
       <div className={'row'}>
         <RegisterPeople onChangePeople={onChangePeople} data={order}/>
        </div>
     </div>
    
  )
}

export default Home