function MakeupProduct(props) {

    return (
        <div>
            <div>{props.name}</div>
            <div>{props.date}</div>
            <img src={props.img} alt={props.name} />
        </div>
    )
}

export default MakeupProduct;