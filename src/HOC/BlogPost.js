import React, { Component } from 'react';

class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      //假设'DataSource'是全局范围内的数据源变量
       blogPost: DataSource.getBlogPost(props.id)
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
      blogPost: DataSource.getBlogPost(this.props.id)
    })
  }

  render() {
    return <TextBlock text={this.state.blogPost} />
  }
}
export default BlogPost