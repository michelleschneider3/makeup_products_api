import MakeupProduct from "./MakeupProduct";

function MakeupProducts(props) {

    if (!props.items || props.items.length === 0) {
        return <p>Loading products...</p>;  // או כל הודעת טעינה אחרת
    }

    return (
        <div>
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