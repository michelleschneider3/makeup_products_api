import '../Style/MakeupProduct.css'

function MakeupProduct(props) {

    return (
        <div>
            <div className="name" >{props.name}</div>
            <div>{props.date}</div>
            <img className="image" src={props.img} alt={props.name} />
        </div>
    )
}

export default MakeupProduct;