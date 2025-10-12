import { useState } from "react";
// Je retire l'import de Box, car on va intégrer son style directement pour plus de clarté.
// import Box from "../components/Box";

import type { Task } from "../type/taskType";
import { mockTasks } from "../shared/mockTasks";
import { Link } from "react-router-dom";
import TaskItems from "../components/tasks/TaskItems";

const AddTask = () => {
  // --- State Management ---
  // On garde les états pour les champs du formulaire. C'est parfait.
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<"Basse" | "Moyenne" | "Haute">(
    "Moyenne"
  ); // Ajout d'un état pour la priorité
  //  recuper les drnier tache

  const getLastedTask = (): Task[] => {
    const reversed = mockTasks.slice(0).reverse();
    const lastedTask = reversed.slice(0, 3);
    console.log("slice", lastedTask);
    return lastedTask;
  };
  const lastedTask = getLastedTask();
  // --- Form Submission Logic ---
  const handleForm = (e: React.FormEvent) => {
    e.preventDefault(); // Empêche la page de se recharger, comportement par défaut des formulaires.

    // Logique d'ID améliorée :
    // On génère un ID unique basé sur le timestamp actuel.
    // C'est plus fiable que de se baser sur la longueur du tableau.
    const newTaskId = `task-${Date.now()}`;

    const newTask: Task = {
      id: newTaskId,
      title: title,
      description: description,
      priority: "low",
      isCompleted: false,
      createdAt: new Date(),
    };

    // Ajoute la nouvelle tâche à la liste (dans une application réelle, ce serait un appel API)
    mockTasks.push(newTask);
    console.log("Tâche ajoutée :", newTask);
    console.log("Liste mise à jour :", mockTasks);

    // Réinitialise les champs du formulaire après l'ajout
    setTitle("");
    setDescription("");
    setPriority("Moyenne");
  };

  return (
    // Conteneur principal qui centre le formulaire sur la page.
    // 'flex' et 'justify-center' : Centre horizontalement.
    // 'p-8' : Ajoute un large padding autour.
    // 'bg-gray-100' : Un fond gris clair pour la page, pour que la carte blanche ressorte.
    <div className="flex justify-center gap-10 p-8 bg-gray-100">
      {/* La carte du formulaire. Similaire à la carte de tâche pour un style cohérent. */}
      {/* 'w-full max-w-lg' : Prend toute la largeur, mais pas plus de 512px. */}
      {/* 'bg-white' : Fond blanc. */}
      {/* 'p-8' : Large padding interne pour donner de l'espace au contenu. */}
      {/* 'rounded-xl' : Coins plus arrondis pour un look moderne. */}
      {/* 'shadow-lg' : Ombre plus prononcée pour le faire ressortir. */}
      <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-lg">
        {/* Titre du formulaire */}
        {/* 'text-3xl font-bold' : Grand et gras pour une hiérarchie claire. */}
        {/* 'text-gray-800' : Couleur de texte foncée. */}
        {/* 'mb-6' : Marge en bas pour espacer le titre du formulaire. */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Ajouter une nouvelle tâche
        </h2>

        {/* Le formulaire lui-même */}
        {/* 'space-y-6' : Ajoute un espacement vertical de 1.5rem (24px) entre chaque enfant direct (les divs des champs). */}
        <form onSubmit={handleForm} className="space-y-6">
          {/* Champ : Titre */}
          <div>
            {/* 'block' : Le label prend toute la largeur. */}
            {/* 'mb-2' : Petite marge en bas pour l'espacer de l'input. */}
            {/* 'text-sm font-medium text-gray-700' : Style standard pour les labels. */}
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Titre
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ex: Apprendre Next.js"
              required // Rend le champ obligatoire
              // Style de l'input :
              // 'w-full' : Prend toute la largeur.
              // 'p-3' : Padding interne confortable.
              // 'border border-gray-300' : Bordure grise subtile.
              // 'rounded-lg' : Coins arrondis.
              // 'focus:ring-blue-500 focus:border-blue-500' : Change la couleur de la bordure et ajoute un "anneau" bleu quand on clique sur le champ. C'est excellent pour l'accessibilité.
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Champ : Description */}
          <div>
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Description (Optionnel)
            </label>
            {/* On utilise un 'textarea' pour la description, c'est plus adapté pour du texte potentiellement long. */}
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Ajouter plus de détails sur la tâche..."
              rows={4} // Définit une hauteur initiale de 4 lignes.
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Champ : Priorité (avec un select) */}
          <div>
            <label
              htmlFor="priority"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Priorité
            </label>
            <select
              id="priority"
              value={priority}
              // TypeScript a besoin d'une assertion de type ici pour le `onChange`
              onChange={(e) =>
                setPriority(e.target.value as "Basse" | "Moyenne" | "Haute")
              }
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="Basse">Basse</option>
              <option value="Moyenne">Moyenne</option>
              <option value="Haute">Haute</option>
            </select>
          </div>

          {/* Bouton de soumission */}
          <div>
            <button
              type="submit"
              // Style du bouton :
              // 'w-full' : Prend toute la largeur.
              // 'bg-blue-600 text-white' : Fond bleu, texte blanc.
              // 'font-bold py-3 px-4' : Texte en gras, padding vertical et horizontal.
              // 'rounded-lg' : Coins arrondis.
              // 'hover:bg-blue-700' : Change la couleur au survol pour un feedback visuel.
              // 'transition-colors' : Ajoute une transition douce au changement de couleur.
              className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Ajouter la tâche
            </button>
          </div>
        </form>
      </div>

      <div className="w-11/12">
        {" "}
        <div className="flex items-center justify-center">
          <h1 className="font-bold p-4 font-sans"> Lasted added </h1>
        </div>
        {!lastedTask
          ? "<p>No Task found </p>"
          : lastedTask.map((task) => <TaskItems key={task.id} task={task} />)}
        <div className="flex items-center justify-center">
          <Link
            to="/tasks"
            className="bg-blue-600 font-bold text-white  text-center mt-5 w-1/2 p-3 rounded-lg  hover:bg-white  hover:text-blue-600 hover:font-medium "
          >
            {" "}
            See all task{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
