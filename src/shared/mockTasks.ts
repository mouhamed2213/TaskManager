import type { Task } from "../type/taskType";

export const mockTasks: Task[] = [
  {
    id: 1,
    title: "Configurer le projet React avec TypeScript",
    description:
      "Initialiser le projet avec Vite, nettoyer les fichiers et installer les dépendances.",
    isCompleted: true,
    priority: "high",
    createdAt: new Date("2025-10-01T09:00:00"),
    dueDate: new Date("2025-10-02T18:00:00"),
  },
  {
    id: 2,
    title: "Créer les composants de base",
    description: "Développer TaskItem et TaskList pour afficher les données.",
    isCompleted: true,
    priority: "high",
    createdAt: new Date("2025-10-02T10:00:00"),
  },
  {
    id: 3,
    title: "Implémenter la gestion de l'état",
    description:
      "Utiliser useState pour gérer le tableau de tâches dans App.tsx.",
    isCompleted: false,
    priority: "medium",
    createdAt: new Date("2025-10-02T11:00:00"),
    dueDate: new Date("2025-10-04T23:59:00"),
  },
  {
    id: 4,
    title: "Développer le formulaire d'ajout",
    description:
      "Créer un formulaire pour ajouter de nouvelles tâches à la liste.",
    isCompleted: false,
    priority: "medium",
    createdAt: new Date("2025-10-02T12:00:00"),
  },
  {
    id: 5,
    title: "Styliser l'application avec CSS",
    description:
      "Ajouter du style pour rendre l'application présentable pour le portfolio.",
    isCompleted: false,
    priority: "low",
    createdAt: new Date(), // Prend la date et l'heure actuelles
  },
];
