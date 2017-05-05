import { connect } from 'react-redux';
import { clear } from '../actions';
import Label from './label';

const mapStateToProps = (state) => ({
  text: state.items.label,
});

const LabelContainer = connect(
  mapStateToProps,
  {
    onButtonClick: clear,
  }
)(Label);

export default LabelContainer;
