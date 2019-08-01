import React from 'react';

type Props = {
	color: string
	size: string
	onClick: (color: string) => void
}

const Pixel = (props: Props) => {

	const { onClick, color, size } = props;

	const pixelStyle = {
        'backgroundColor': `rgb(${color})`, // this.color is "color" in "props"
        'width': size,
        'height': size
	}

	function onPixelClick(){
		onClick && onClick(color);
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
