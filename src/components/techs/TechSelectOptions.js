import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTechs } from '../../actions/techActions';

const TechSelectOptions = ({ getTechs, tech: { techs, loading } }) => {
  return (
    !loading &&
    techs !== null &&
    techs.map((tech) => (
      <option
        value={`${tech.firstName} ${tech.lastName}`}
        key={tech.id}
      >{`${tech.firstName} ${tech.lastName}`}</option>
    ))
  );
};

TechSelectOptions.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(TechSelectOptions);
