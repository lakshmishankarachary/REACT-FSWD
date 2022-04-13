let CompB=(props)=>{
    return <div>
        <h1>Component B</h1>
        <pre>JSON.stringify(props)</pre>
        <h3>Employee Name:{props.name}</h3>
        <h3>Employee Sal:{props.sal}</h3>
    </div>
}
export default CompB