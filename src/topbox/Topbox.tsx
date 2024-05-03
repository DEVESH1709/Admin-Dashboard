import './Topbox.scss';
import {topDealUsers} from '../data.ts'
const Topbox = () => {
  return (
    <div className='topBox'>
        <h1>Top Deals</h1>

        <div className='list'>

            {topDealUsers.map(user=>(
                <div className='listitem' key={user.id }>
                 <div className='user'>
                    <img src={user.img} alt=''></img>
                    <div className='usertexts'>
                        <span className='username'>{user.username}</span>
                        <span className='email'>{user.email}</span>
                    </div>

                 </div>
                 <div className='amount'>${user.amount}</div>   
                     </div>
            ))}
        </div>
    </div>
  )
}

export default Topbox