import React from 'react';

const SubmitButton = ({ children }) => (
	 <button className="btn waves-effect waves-light" type="submit" name="action">
	 	{children}
	 </button>
);

export default SubmitButton;