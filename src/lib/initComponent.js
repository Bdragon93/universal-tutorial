import { connect } from 'react-redux';

function mapStateToProps(state, props) {
  const { dataGetter, params } = props;
  if (typeof dataGetter !== 'function') return {};

  const record = dataGetter(state, params);

  if (!record) return {};

  return record.toObject();
};

export default function initComponent(comp, otherWrapper) {
  let newComp = connect(comp.mapStateToProps || mapStateToProps, null, null, { withRef: true })(comp);

  if (typeof otherWrapper === 'function') {
    newComp = otherWrapper(newComp);
  }

  // connect function does not handle defaultProps
  // we need to copy it manually
  newComp.defaultProps = comp.defaultProps;

  let regex = /withRouter\((.*?)\)/;
  let pieces = regex.exec(comp.displayName);
  let displayName = pieces && pieces[1] ? pieces[1] : comp.displayName;
  newComp.displayName = displayName;

  return newComp;
}

