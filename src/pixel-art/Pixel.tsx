import React from 'react';

type Props = {
	color: string
	size: string
	col: string
	onClick: (col: string) => void
}

const Pixel = (props: Props) => {

	const { onClick, color, size, col } = props;

	function onPixelClick(){
		onClick && onClick(col);
	}

	return (
		<div className="l-pixel" style={{
			'backgroundColor': `rgb(${color})`, // this.color is "color" in "props"
			'width': size,
			'height': size
		}} onClick={onPixelClick}></div>
	);
}

export default Pixel;
