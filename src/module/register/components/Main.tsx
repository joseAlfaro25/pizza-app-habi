import '../../../common/components/css/main.css'
import useProduct from './hook/useProduct'
import RegisterPeople from './RegisterPeople'
import RegisterProduct from './RegisterProduct'
const Home = () => {
  const {onChange}=useProduct()
  return (
   
     <div className={'container'}>
       <div className={'two'}>
        <RegisterProduct onChange={onChange}/>
       </div>
       <div className={'two'}>
         <RegisterPeople/>
        </div>
     </div>
    
  )
}

export default Home