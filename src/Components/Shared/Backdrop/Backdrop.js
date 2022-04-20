import * as React from 'react';
import ReactDOM from 'react-dom';

import './Backdrop.css';

const Backdrop = ({ onClick }) => {
	const content = (
		<div
			className="backdrop"
			onClick={onClick}
			onKeyDown={onClick}
			aria-label="backdrop"
			role="button"
			tabIndex={0}
		/>
	);

	return ReactDOM.createPortal(content, document.getElementById('backdrop-hook'));
};

export default Backdrop;
