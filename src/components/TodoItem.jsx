function TodoItem(props){
    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr

    function handleDelete(deleteid)
    {
        var temparr = activityArr.filter(function(item){
            if(item.id === deleteid)
            {
                return false
            }else{
                return true
            }
        }
    ) 
    setActivityArr(temparr)
    }
    return (
        <div className="flex justify-between m-1">
        <p>{props.index + 1}. {props.activity}</p>
        <button className="bg-red-400 rounded-md p-1" onClick={()=>handleDelete(props.id)}>Delete</button>
        </div>
    )
}
export default TodoItem;