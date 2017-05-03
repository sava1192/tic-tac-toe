import { connect } from 'react-redux';
import { getLabelFromItems } from '../reducers/items';
import { clear } from '../actions';
import Label from './label';

const mapStateToProps = (state) => ({
  text: getLabelFromItems(state.items),
});

const LabelContainer = connect(
  mapStateToProps,
  {
    onButtonClick: clear,
  }
)(Label);

export default LabelContainer;
