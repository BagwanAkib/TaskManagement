export interface Task{
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
}

/**While fixed values we can use Enum */
export enum TaskStatus{
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
}