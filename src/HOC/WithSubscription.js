//此函数接收一个组件
function withSubscription(WrappedComponent, selectData) {
//返回另一个组件
  return class extends Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        data: selectData(DataSource,props)
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
      //并使用新数据渲染被包装的组件，可能还会传递其他属性
      return <WrappedComponent data={this.state.data} {...this.props} />
    }
  }
}

const CommentListWithSubscription = withSubscription(
  CommmenttList,
  (DataSource) => DataSource.getComments()
)

const BlogPostWithSubscription = withSubscription(
  BlogPost,
  (DataSource,props) => DataSource.getComments(props.id)
)