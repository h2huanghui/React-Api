import React, { Component } from 'react';

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      //假设'DataSource'是全局范围内的数据源变量
       comments: DataSource.getComments()
    }
  }

  componentDidMount() {
    //订阅更改
    DataSource.addChangeListener(this.handleChange);

  }

  componentWillUnmount() {
    //清除订阅
    DataSource.removeChangeListener(this.handleChange);
  }

  handleChange() {
    //当数据源更新时，更新组件状态
    this.state({
      comments: DataSource.getComments()
    })
  }

  render() {
    return (
      <div>
        {
          this.state.comments.map(comment => (
            <Comment comment={comment} key={comment.id} />
          ))
        }
      </div>
    )
  }
}
export default CommentList