import React, { useRef, useState } from "react";

// let a = <number>333;
class LifeCycle extends React.Component<any, any, any> {
	/**
	 * 如果不初始化 state 或不进行方法绑定，则不需要为 React 组件实现构造函数。
	 * @param props 
	 */
	constructor(props: any) {
		console.log('生命周期开始');
		console.log('constructor');
		super(props);
		this.state = {
			name: 'jack',
		};
	}

	/**
	 * 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。
	 * 它应返回一个对象来更新 state，如果返回 null 则不更新任何内容。
	 * @param props 
	 * @param state 
	 * @returns 
	 */

	static getDerivedStateFromProps(props: any, state: any) {
		console.log('getDerivedStateFromProps', props, state);
		return {
			name: 'pppp'
		};
	}

	componentDidMount() {
		console.log('componentDidMount');
	}

	/**
	 * 根据 shouldComponentUpdate() 的返回值，判断 React 组件的输出是否受当前 state 或 props 更改的影响。
	 * 默认行为是 state 每次发生变化组件都会重新渲染。大部分情况下，你应该遵循默认行为。
	 * 当 props 或 state 发生变化时，shouldComponentUpdate() 会在渲染执行之前被调用。
	 * 返回值默认为 true。首次渲染或使用 forceUpdate() 时不会调用该方法。
	 * @returns 
	 */

	shouldComponentUpdate() {
		console.log('shoundComponentUpdate');
		return true;
	}
	/**
	 * getSnapshotBeforeUpdate() 在最近一次渲染输出（提交到 DOM 节点）之前调用。
	 * 它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。
	 * 此生命周期方法的任何返回值将作为参数传递给 componentDidUpdate()。
	 * 此用法并不常见，但它可能出现在 UI 处理中，如需要以特殊方式处理滚动位置的聊天线程等。
	 * 应返回 snapshot 的值（或 null）。
	 * @param prevProps 
	 * @param prevState 
	 */

	getSnapshotBeforeUpdate(prevProps: any, prevState: any) {
		console.log('getSnapshotBeforeUpdate');
		return '我来自于getSnapshotBeforeUpdate';
	}

	/**
	 * componentDidUpdate() 会在更新后会被立即调用。首次渲染不会执行此方法。
	 * 当组件更新后，可以在此处对 DOM 进行操作。如果你对更新前后的 props 进行了比较，
	 * 也可以选择在此处进行网络请求。（例如，当 props 未发生变化时，则不会执行网络请求）。
	 * @param prevProps 
	 * @param prevState 
	 * @param snapshot 
	 */

	componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
		console.log('componentDidUpdate', snapshot);
	}

	/**
	 * componentWillUnmount() 会在组件卸载及销毁之前直接调用。
	 * 在此方法中执行必要的清理操作，例如，清除 timer，
	 * 取消网络请求或清除在 componentDidMount() 中创建的订阅等。
	 */
	componentWillUnmount() {

	}

	onClickMe() {
		this.setState({ ...this.state, name: 'susan' });
	}

	render() {
		console.log('render');
		return (
			<>
				<div>{this.state.name}</div>
				<button type="button" onClick={ this.onClickMe.bind(this) }>click Me</button>
				<button type="button" onClick={ () => this.forceUpdate() }>Force update</button>
			</>
		);	
	}
}
export default LifeCycle;
