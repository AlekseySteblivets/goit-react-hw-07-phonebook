import React from 'react';
import { connect } from 'react-redux';
// import styles from './Filter.module.css';
import PropTypes from 'prop-types';
import * as phonebooksActions from '../../redux/phonebooks/phonebooks-actions';
import * as phonebookSelectors from '../../redux/phonebooks/phonebooks-selectors';

const Filter = ({ value, оnChange }) => (
    <label>
        FInd contacts by name
        <input
            type="text"
            value={value}
            onChange={оnChange}
        />
    </label>
);

Filter.propTypes = {
    value: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
    value: phonebookSelectors.getFilter(state),

});

const mapDispatchToProps = dispatch => ({
    оnChange: e => dispatch(phonebooksActions.changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);