import React from 'react';

const NewWindow = ({ width, height, color, className, ...props }) => (
  <svg className={className} height="512" viewBox="0 0 32 32" width="512" xmlns="http://www.w3.org/2000/svg"><g id="new_window_pop_up" data-name="new window, pop up"><path d="m29 15a1 1 0 0 0 -1 1v9a3 3 0 0 1 -3 3h-18a3 3 0 0 1 -3-3v-18a3 3 0 0 1 3-3h9a1 1 0 0 0 0-2h-9a5 5 0 0 0 -5 5v18a5 5 0 0 0 5 5h18a5 5 0 0 0 5-5v-9a1 1 0 0 0 -1-1z"/><path d="m22 4h4.59l-11.3 11.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l11.29-11.29v4.58a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-7a1 1 0 0 0 -.29-.71 1 1 0 0 0 -.71-.29h-7a1 1 0 0 0 0 2z"/></g></svg>
);

export default NewWindow;
