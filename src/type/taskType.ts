// src/type/taskType.ts

export type Priority = "low" | "medium" | "high";

export type Task = {
  id?: string;
  title: string;
  description?: string; // Corrigé : description
  isCompleted: boolean;
  createdAt: Date; // Corrigé : createdAt (camelCase)
  priority: Priority;
  dueDate?: Date;
};
