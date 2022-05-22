import './TotalCompItem';
import TotalCompItem from './TotalCompItem';

function TotalCompList(props){
    console.log(props.compareArr)
    const list = props.compareArr.map( item => {
        return <TotalCompItem item={item}/>
    })
    console.log(list)
    return (
        <>
       {list}
        </>
    )
}

export default TotalCompList;