import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import MyGlobleSetting from './MyGlobleSetting';

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let uri = MyGlobleSetting.url + `/api/products/${this.props.obj.id}`;
    axios.delete(uri)
      .then((response) => {
        /*
          1. History Push The user can go forward and backward in the browser and the url will change.
            It works like a programmatic link with no affect on current url.

          2. Location Replace The link of the page is set to the new one, but the user can't go between the replaced.
        */
        browserHistory.push('/empty');
        // browserHistory.push('/display-item');//!
        browserHistory.replace('/display-item');
      });
  }

  render() {
    return (
      <tr>
        <td>
          {this.props.obj.id}
        </td>
        <td>
          {this.props.obj.title}
        </td>
        <td>
          {this.props.obj.body}
        </td>
        <td>
        <form onSubmit={this.handleSubmit}>
          <Link to={"edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
          <input type="submit" value="Delete" className="btn btn-danger"/>
        </form>
        </td>
      </tr>
    );
  }
}

export default TableRow;