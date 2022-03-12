import React from 'react'
import { IOrder } from '../Main';
interface Props {
    setOrder: React.Dispatch<React.SetStateAction<IOrder>>;
    order: IOrder;
  }
const usePeople = ({order,setOrder}:Props) => {
    const onChangePeople=(value:string, name:string) => {
        setOrder({...order,[name]:value});
    }

  return {onChangePeople}
}

export default usePeople