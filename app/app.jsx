import React from 'react';
import ReactDOM from 'react-dom';

import {MainPage} from './main';

window.onload=function () {
	ReactDOM.render(<MainPage />,
		document.getElementById('mainpage')
	);
}