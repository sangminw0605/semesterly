/*
Copyright (C) 2017 Semester.ly Technologies, LLC
Semester.ly is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
Semester.ly is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
*/

import PropTypes from 'prop-types';
import React from 'react';
import { WaveModal } from 'boron-15';

class CompareModal extends React.Component {
  componentDidUpdate() {
    if (this.props.isVisible) {
      this.modal.show();
    }
  }

  render() {
    const modalHeader =
      (<div className="modal-content">
        <div className="modal-header">
          <h1>Compare Schedule</h1>
        </div>
      </div>);
    const modalStyle = {
      width: '100%',
    };
    return (
      <WaveModal
        ref={(c) => { this.modal = c; }}
        className="pref-modal max-modal"
        modalStyle={modalStyle}
        onHide={this.props.toggleCompareModal}
      >
        <div id="perf-modal-wrapper">
          {modalHeader}
          <hr style={{ marginTop: 0, width: '80%' }} />
          <label>
            <textarea>
            Paste schedule link here
            </textarea>
          </label>

          <div className="preference-footer">
            <button
              className="btn btn-primary"
              style={{ marginLeft: 'auto', marginRight: '10%' }}
              onClick={() => this.modal.hide()}
            >
              Save and Close
            </button>
          </div>
        </div>
      </WaveModal>
    );
  }
}

CompareModal.propTypes = {
  toggleCompareModal: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default CompareModal;
