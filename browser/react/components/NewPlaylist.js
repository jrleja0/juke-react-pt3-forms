import React from 'react';

export default function NewPlaylist (props) {
  return (
    <div className="well">
      {
        props.isEmpty
          ? <div className="alert alert-warning">Please enter a name</div>
          : null
      }
      {
        props.tooLong
          ? <div className="alert alert-warning">Name entered is too long</div>
          : null
      }
      <form className="form-horizontal" onSubmit={props.handleSubmit}>
        <fieldset>
          <legend>New Playlist</legend>
          <div className="form-group">
            <label className="col-xs-2 control-label">Name</label>
            <div className="col-xs-10">
              <input
                className="form-control"
                type="text"
                onChange={props.handleChange}
                value={props.inputValue}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
              <button type="submit" className="btn btn-success" disabled={props.buttonDisabled}>
                Create Playlist
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
    );
}
