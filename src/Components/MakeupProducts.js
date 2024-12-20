import MakeupProduct from "./MakeupProduct";
import '../Style/MakeupProducts.css'

function MakeupProducts(props) {

    if (!props.items || props.items.length === 0) {
        return <p>Loading products...</p>;
    }

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