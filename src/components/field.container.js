import { connect } from 'react-redux';
import Field from './field';
import { toggleItem } from '../actions';

const mapStateToProps = (state) => ({
  items: state.items.values,
  isClickable: !state.isLabelSet,
});

const FieldContainer = connect(
  mapStateToProps,
  { onItemClick: toggleItem }
)(Field);

export default FieldContainer;
