import React, { Component } from 'react';
import Spinner from 'components/statics/spinner';
import { getString } from 'utils/i18n';

function setLoadingComponent(comp) {
  this.loadingComponent = comp || <Spinner/>;
}

function injectRender() {
  const _render = this.render;
  this.render = () => {
    const { status, renderEmpty } = this.props;

    if (!(renderEmpty || status)) return false;

    if (status === 'ERROR') return <span/>;

    if (status === 'PENDING') return this.loadingComponent;

    return _render && _render.call(this);
  }
}

function injectDidMount() {
  const _didMount = this.componentDidMount;
  this.componentDidMount = () => {
    this.fetchMissing();
    return _didMount && _didMount.call(this);
  }
}

function injectDidUpdate() {
  const _didUpdate = this.componentDidUpdate;
  this.componentDidUpdate = (prevProps, prevState) => {
    this.fetchMissing();
    return _didUpdate && _didUpdate.call(this, prevProps, prevState);
  }
}

export default class BaseComponent extends React.Component {
  // static propTypes = {
  //   actionCreator : React.PropTypes.func,
  //   dataGetter    : React.PropTypes.func
  // };

  constructor(props, options = {}) {
    super(props);

    this.state = {};

    if (typeof props.dataGetter === 'function') {
      // Avoid injectRender with customRenderOption
      if (!props.customRender) injectRender.call(this);
      setLoadingComponent.call(this, options.loadingComponent);
    }

    if (!!props.actionCreator)
      if (typeof props.actionCreator === 'function') {
        injectDidMount.call(this);
        // injectDidUpdate.call(this);
      }
      else
        console.error(this.constructor.name, 'actionCreator is required as a function');
  }

  fetchMissing = () => {
    if (!!this.props.status) return;

    const { dispatch, actionCreator, params } = this.props;

    dispatch(actionCreator(params));
  }

  getString = (field, context, values) => {
    return getString(field, context, values);
  }

  // callAction = (fn, props) => {
  //   const { dispatch } = props || this.props;
  //   return dispatch && dispatch(fn);
  // }
}