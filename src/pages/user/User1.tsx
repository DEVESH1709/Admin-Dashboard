import Single from '../../components/single/Single'
import { singleUser } from '../../data'
import './User1.scss'
// import { singleUser } from '../../data'
const User1 = () => {

    // fetch data and send to single component
  return (
    <div className='user1'>
       <Single {...singleUser}></Single>
    
    </div>
  )
}

export default User1