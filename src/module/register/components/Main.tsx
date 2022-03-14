import '../components/css/people.css'
import ConfirmationModal from './ConfirmationModal'
import useMain from './hook/useMain'
import usePeople from './hook/usePeople'
import useProduct from './hook/useProduct'
import RegisterPeople from './RegisterPeople'
import RegisterProduct from './RegisterProduct'


const Home = () => {
  const {order, setOrder, handleSubmit, submitInfo}=useMain()
  const {handleChange}=useProduct({order,setOrder})
  const {onChangePeople}=usePeople({order,setOrder})
 
  return (
     <div className={'container-custom'}>
       <div className={'row'}>
        <RegisterProduct handleChange={handleChange}/>
       </div>
       <div className={'row'}>
         <RegisterPeople onChangePeople={onChangePeople} data={order}/>
         <ConfirmationModal submitInfo={submitInfo} handleSubmit={handleSubmit}/>
        </div>
     </div>
    
  )
}

export default Home