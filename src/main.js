console.log('yup i work');
import React from 'react';
import ReactDOM from 'react-dom';
import TestComponent from './TestComponent';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(TestComponent),
    document.getElementById('mount')
  );
});
