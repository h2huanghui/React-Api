# React-Api

reactjs.org study demo

# UncontrolledComponents

# LottieDemo

# LiftingStateUp

# React 哲学

一个组件原则上只能负责一个功能。如果他需要负责更多的功能，这个时候就应该考虑拆分成更小的组件

自上而下构建应用：首选编写层级较高的组件 - 应用比较简单时
自下而上构建应用：从最基本的组件开始编写 - 大型项目

# 二、高阶指引

1. React Fragments
   不需要在 fragment 标签中添加任何 prop，可以使用短语法

```
<>
</>
```

2. 高阶组件(HOC)

   高阶组件是参数为组件,返回值为新组建的函数，高阶组件是将组件转换为另一个组件。

   HOC 在第三方库中的例子： Redux: connet, Relay: createFragmentContainer

   需要一个抽象，在一个地方定义这个逻辑，并在许多组件之间共享-高阶组件优点

   CommentList 和 BlogPost,在 DataSource 上调用不同的方法，且渲染不同的结果，但是大部分实现是一样的，可以编写一个创建组件函数。(该函数接受一个子组件作为它的其中一个参数)
