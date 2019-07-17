import React from 'react'

interface Props {
	content: any
	deleteItem: Function
	index: number
}

const Item = (props: Props) => {


    const {deleteItem, index, content} = props;

    const handleDelete = () => deleteItem(index);
    
    return (
    	<div onClick={ handleDelete }>
    		{content}
    	</div>
    );
}

export default Item
