import React from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { deleteLogs } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const LogItem = ({ log, deleteLogs }) => {
  const { id, tech, date, attention, message } = log;

  const onDelete = () => {
    deleteLogs(id);
    M.toast({
      html: 'Log deleted',
    });
  };

  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-log-modal'
          className={`modal-trigger ${attention ? 'red-text' : 'blue-text'}`}
        >
          {message}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID #{id}</span> last updated by
          <span className='black-text'> {tech}</span> on{' '}
          <Moment format='MMMM Do YYYY, h:mm:ss a'>{date}</Moment>
        </span>
        <a href='#!' className='secondary-content' onClick={onDelete}>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLogs: PropTypes.func.isRequired,
};

export default connect(null, { deleteLogs })(LogItem);
