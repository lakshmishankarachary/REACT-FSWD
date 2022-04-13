import React from "react"
import { Albumdata } from "./Albumdata"
class Album extends React.Component{
    render(){
        return(
            <div>
                <pre>{JSON.stringify(Albumdata)}</pre>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <table className="table table-hover">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <th>AlbumId</th>
                                        <th>Id</th>
                                        <th>Title</th>
                                        <th>Image</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                Albumdata.map((data) => {
                                    return <tr key={data.Id}>
                                    <td>{data.albumId}</td>
                                    <td>{data.id}</td>
                                    <td>{data.title}</td>
                                    <td><img src={data.thumbnailUrl} alt=""/></td>
                                    </tr>
                                })
                            }
        
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    
    }

}
export default Album
