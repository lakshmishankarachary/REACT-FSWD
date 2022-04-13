import React, { Component } from 'react'

export class ContactList extends Component {
    selectedcontactHandler=(contact)=>{
             this.props.selectedcontact(contact)
    }
  render() {
    return (
      <div>
          <h1>Contact App</h1>
          <pre>{JSON.stringify(this.props.contacts)}</pre>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <table className="table table-hover">
                                <thead className="bg-primary">
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Gender</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                  this.props.contacts.map((contact) => {
                                            return <tr key={contact.login.uuid} onClick={this.selectedcontactHandler.bind(this,contact)}>
                                                <td>{contact.login.uuid.substring(32, 36)}</td>
                                                <td>{contact.name.first.toUpperCase()}</td>
                                                <td>{contact.email}</td>
                                                <td>{contact.gender}</td>
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
      
export default ContactList