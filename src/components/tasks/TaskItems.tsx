// src/components/TaskItems.tsx

import type { Task } from "../../type/taskType";
import TaskCard from "../../components/tasks/TaskCard";
interface TaskModel {
  task: Task;
}

const TaskItems = ({ task }: TaskModel) => {
  return (
    // La carte de tâche elle-même.
    // 'w-full' : Prend toute la largeur de la colonne de la grille.
    // 'bg-white', 'rounded-lg', 'shadow-md', 'p-6' : Style de base de la carte.

    <TaskCard>
      {/* En-tête de la carte */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold text-gray-800">{task.title}</h3>
        <span className="px-3 py-1 text-sm font-semibold text-white bg-blue-500 rounded-full">
          {task.priority}
        </span>
      </div>

      {/* Détails de la tâche */}
      <div className="space-y-2">
        <div className="flex items-center text-gray-600">
          <p className="font-semibold w-24">Statut :</p>
          <p
            className={task.isCompleted ? "text-green-600" : "text-orange-600"}
          >
            {task.isCompleted ? "Terminé" : "En cours"}
          </p>
        </div>
        <div className="flex items-center text-gray-600">
          <p className="font-semibold w-24">Ajouté le :</p>
          <p className="text-gray-800">{task.createdAt.toLocaleDateString()}</p>
        </div>
      </div>
    </TaskCard>
  );
};

export default TaskItems;
