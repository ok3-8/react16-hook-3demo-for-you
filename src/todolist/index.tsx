import React, { ReactNode, useState }  from 'react';

import './style.less';

type Item = {
	index: number
	value: string
	done: boolean
}

type State = {
	items: Item[]
    todoCount?: number
    submissionStatus?: string
    error?: string
    isLoading?: boolean
}

const items: Item[] = [
	{ "index": 1, "value": "Go grocery shopping", "done": false },
	{ "index": 2, "value": "Wash the car", "done": false },
	{ "index": 3, "value": "Pay all the bills", "done": true },
	{ "index": 4, "value": "Finish React ToDo List App", "done": true },
	{ "index": 5, "value": "Do the laundry", "done": false }
];

const TodoApp: React.FC = () => {

    const inputRef = React.createRef<HTMLInputElement>();

	const [state, setState] = useState<State>({
		items: items,
	    todoCount: activeCount(items),
	    submissionStatus: '',
	    error: '',
	    isLoading: false
	});

	function activeCount(items: Item[]): number {
        let active: number = 0;
        for (let i = 0; i < items.length; i++) {
            if (items[i].done == false) {
                active++;
            }
        }
        return active;
    }

    function addItem(value: Item['value']): void  {
        const todoItems = state.items;

        todoItems.unshift({
            index: todoItems.length + 1, 
            value: value, 
            done: false
        });

        setState({
            items: todoItems,
            todoCount: activeCount(todoItems)
        });
    }

    function removeItem(itemIndex: number): void  {
        const todoItems = state.items;
        todoItems.splice(itemIndex, 1);

        setState({
            items: todoItems,
            todoCount: activeCount(todoItems)
        });
    }

    function markItemDone(itemIndex: number): void {
        const todoItems = state.items,
              todo = todoItems[itemIndex];

        todo.done = !todo.done;

        setState({
            items: todoItems,
            todoCount: activeCount(todoItems)
        });  
    }

    const TodoListItem: React.FC<{ item: Item, index: number}> = ({item, index}) => {

    	const todoClass: string = item.done ? "done" : "undone";
        const todoClassRow: string = item.done ? "completed" : "active";

    	return (
            <li title={todoClassRow} className="list-group-item">
                <div className={todoClass}>
                    <span className="glyphicon glyphicon-ok icon" onClick={ () => markItemDone(index) }>V</span>
                    {item.value}
                    <span className="glyphicon glyphicon-trash close" onClick={ () => removeItem(index) }>X</span>
                </div>
            </li>     
        );
    }

    const TodoList: React.FC = () => {

    	const itemsList: ReactNode = items.map((item: Item, index: number) => (
            <TodoListItem key={index} item={item} index={index} />
         ));

    	return <ul className="list-group">{itemsList}</ul>
    }

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        var newItemValue = inputRef.current!.value;
        if(newItemValue) addItem( newItemValue );

        inputRef.current!.value = ''
    }

    const TodoForm: React.FC = () => ( 
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} className="form-control" placeholder="add a new todo item..."/>
            <button type="submit" className="btn btn-default">Add</button>
        </form>
    );

    return (
        <div>
            <div id="main">
            <h1>My TODO List - {state.todoCount} Items</h1>
            <TodoForm />
            <TodoList />
          </div>
	    </div>
    );
}

export default TodoApp;