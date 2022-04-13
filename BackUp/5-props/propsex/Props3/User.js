import Emp from "./Emp"
let User=()=>{
    let user_id=101;
    let user_name="lak";
    let loc=["bang","delhi"];
    let user_details={name:"laks",sal:50000};
    return <div>
        <h1>User Component</h1>
        <hr/>
        <Emp 
        id={user_id} name={user_name} location={loc} details={user_details}
        />
    </div>
}
export default User