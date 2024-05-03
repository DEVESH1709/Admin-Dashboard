import Single from '../../components/single/Single'
import { singleProduct } from '../../data'
import './Product1.scss'

const Product1 = () => {
  return (
     // fetch data and send to single component
    <div className="product1">
        <Single {...singleProduct}></Single>
    </div>
  )
}

export default Product1