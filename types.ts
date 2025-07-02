export type Text = string;

export type Task = {
  id: string;
  text: Text;
  done: boolean;
};

export type Tasks = Task[];

export type TaskItem = {
  task: Task;
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
};
