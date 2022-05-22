function TotalCompItem({item}){
    console.log(item)
    return (
        <div className="item-container">
        <h4 className='list-name'>
            Company: {item.company}
        </h4>
        <h4 className="list-total">
            Total: {item.total}
        </h4>
        <h4>
            Base: {item.base}
        </h4>
        <h4>
            Annual bonus: {item.annualBonus}
        </h4>
        <h4>
            Stock/Option: {item.stock}
        </h4>
        <h4>
            Other: {item.other}
        </h4>
        </div>
    )
}

export default TotalCompItem;