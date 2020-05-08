import React, { Component } from 'react';
import { Field } from 'redux-form';



const mainView = () => {
  return (
    <React.Fragment>
      <div>
        <form>
          <Field label="Text" name="text" type="text" component="input" />
        </form>
      </div>
    </React.Fragment>
  )
}

export default mainView
