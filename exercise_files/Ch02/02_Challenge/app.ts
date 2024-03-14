enum ToDoStatus {
  done = "done",
  inProgress = "in-progress",
  toDo = "todo",
}

interface toDoItem {
  id: number;
  title: string;
  status: ToDoStatus;
  completedOn?: Date;
}

const todoItems: toDoItem[] = [
  {
    id: 1,
    title: "Learn HTML",
    status: ToDoStatus.done,
    completedOn: new Date("2021-09-11"),
  },
  { id: 2, title: "Learn TypeScript", status: ToDoStatus.inProgress },
  { id: 3, title: "Write the best app in the world", status: ToDoStatus.toDo },
];

function addTodoItem(todo: string): toDoItem {
  const id = getNextId(todoItems);

  const newTodo: toDoItem = {
    id,
    title: todo,
    status: ToDoStatus.toDo,
  };

  todoItems.push(newTodo);

  return newTodo;
}

function getNextId<T extends { id: number }>(items: T[]): number {
  return items.reduce((max, x) => (x.id > max ? x.id : max), 0) + 1;
}

const newTodo = addTodoItem(
  "Buy lots of stuff with all the money we make from the app"
);

console.log(JSON.stringify(newTodo));
