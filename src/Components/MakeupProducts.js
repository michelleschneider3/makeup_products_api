import MakeupProduct from "./MakeupProduct";
import '../Style/MakeupProducts.css'

function MakeupProducts(props) {

    return (
        <div className="products">
            {
               props.items.map((item, index) => (
                   <MakeupProduct
                       name={item.name}
                       date={item.date}
                       img={item.img}
                       index = {index}
                   />
               ))
            }
        </div>
    )
}

export default MakeupProducts;