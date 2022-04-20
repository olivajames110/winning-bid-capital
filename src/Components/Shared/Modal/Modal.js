import * as React from 'react';

import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import Backdrop from '../Backdrop/Backdrop';

import './Modal.css';

const ModalOverlay = (props) => {
	const { className, style, onCancel, contentClass, footer, footerClass } = props;

	const timesIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			focusable="false"
			data-prefix="fas"
			data-icon="times"
			className="svg-inline--fa fa-times fa-w-11"
			role="img"
			viewBox="0 0 352 512"
		>
			<path
				fill="currentColor"
				d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
			/>
		</svg>
	);
	const content = (
		<div className={`modal ${className}`} style={style}>
			<div className="modal__header">
				{' '}
				<button onClick={onCancel} className="cancel">
					{timesIcon}
				</button>
			</div>

			<div className={`modal__content ${contentClass}`}>{props.children}</div>
			{footer && <footer className={`modal__footer ${footerClass}`}>{footer}</footer>}
		</div>
	);

	return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const Modal = (props) => {
	const { show, onCancel } = props;
	return (
		<React.Fragment>
			{show && <Backdrop onClick={onCancel} />}
			<CSSTransition in={show} timeout={200} classNames="fade-in" mountOnEnter unmountOnExit>
				<ModalOverlay {...props} />
			</CSSTransition>
		</React.Fragment>
	);
};

export default Modal;
