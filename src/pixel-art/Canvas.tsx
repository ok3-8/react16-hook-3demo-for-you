import React from 'react';

import Pixel from './Pixel';

type Props = {
	pixelData: any[]
    colors: any
    pixelSize:  string
	background:  string
	colorChange: (color: string, newColor: string) => void
}

const Canvas = (props: Props) => {

	const { pixelData, colors, pixelSize, background } = props;

	console.log(colors);

	function onPixelClick(color: any) {
		let newColor = getRandomColor();
		props.colorChange && props.colorChange(color, newColor);
    }

    function getRandomColor() {
        return getRandom() + ', ' + getRandom() + ', ' + getRandom();
    }

    function getRandom() {
        return Math.floor(Math.random() * 256);
    }

	return (
		<div className="l-canvas-container" style={{background: background}}>
        	{
        		pixelData.map((row: string[], rowIndex: number) => (
					<div key={rowIndex} style={{height: pixelSize}}>
					   {
					   		row.map((col: string, colIndex: number) => (
					   			<Pixel key={colIndex} color={colors[col]} size={pixelSize} onClick={onPixelClick} />
					   		))
					   }
		        	</div>
        		))
        	}
        </div>
	);
}

Canvas.defaultProps = {
	pixelSize: '20px',
	background: 'white'
}

export default Canvas;
