import CompB from "./CompB"
let CompA=()=>{
    let emp_Name="lak"
    let emp_sal=50000
    return(
    <div>
        <h1>Component A</h1>
        <hr/>
        <CompB name={emp_Name} sal={emp_sal}/>

    </div>
    )
}
export default CompA