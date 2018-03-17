import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchUsers } from "../actions"

class UsersIndex extends Component {
  componentWillMount() {
    this.props.fetchUsers()
  }

  renderUser({ id, name, email }) {
    return (
      <li className="list-group-item" key={id}>
        <span className="label label-defualt label-pill pull-xs-right">
          <a href={email}>{email}</a>
        </span>
        {name}
      </li>
    )
  }

  render() {
    return (
      <div>
        <h4>Email directory</h4>
        <ul className="list-group">{this.props.users.map(this.renderUser)}</ul>
      </div>
    )
  }
}

// export default connect(state => state, fetchUsers)(PostsUsers)

function mapStateToProps({ users }) {
  return { users }
}

export default connect(mapStateToProps, { fetchUsers })(UsersIndex)
