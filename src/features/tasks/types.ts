import { Models } from "node-appwrite";

export enum TaskStatus {
  TODO = "TODO",
  DONE = "DONE",
  BACKLOG = "BACKLOG",
  IN_REVIEW = "IN_REVIEW",
  IN_PROGRESS = "IN_PROGRESS",
}

export type Task = Models.Document & {
  name: string;
  dueDate: string;
  position: number;
  projectId: string;
  assigneeId: string;
  status: TaskStatus;
  workspaceId: string;
  description?: string;
};
