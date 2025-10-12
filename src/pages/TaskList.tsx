import { mockTasks } from "../shared/mockTasks";
import type { Task } from "../type/taskType";
import TaskItems from "../components/tasks/TaskItems";

export const TaskList = () => {
  const tasks: Task[] = mockTasks;
  console.log(" bonjour ", tasks);

  return (
    <>
      <div className="p-6">
        {/* Colonnes responsives : C'est la partie la plus importante ! */}
        {/* 'grid-cols-1' : Par défaut (sur les très petits écrans), il y a 1 seule colonne. */}
        {/* 'sm:grid-cols-2' : À partir du breakpoint 'sm' (small, 640px), on passe à 2 colonnes. */}
        {/* 'lg:grid-cols-3' : À partir du breakpoint 'lg' (large, 1024px), on passe à 3 colonnes. */}
        {/* 'xl:grid-cols-4' : À partir du breakpoint 'xl' (extra-large, 1280px), on passe à 4 colonnes. */}
        {/* Le navigateur choisira automatiquement le bon nombre de colonnes en fonction de la largeur de l'écran. */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-4  sm:grid-cols-2 ">
          {tasks.map((value) => {
            return <TaskItems key={value.id} task={value} />;
          })}
        </div>
      </div>
    </>
  );
};
