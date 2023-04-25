export const generalTranslations = (par) => {
    if (par.language === "en") {
      return {
       title: "My task organizer",
       placeholder: "Write your homework here",
       subtitle:  "Task list",
       editTask:  "Edit task",
       task: "Tasks",
       cancel:"Cancelar",
       save:  "Save changes"


      };
    }
    if (par.language === "es") {
      return {
        title: "Mi organizador de Tareas",
        placeholder:"Escriba su tarea aquí",
        subtitle: "Lista de tareas",
        editTask: "Editar tarea",
        task: "Tareas",
        cancel:"Cancelar",
        save:"Guardar cambios"
      };
    }
  
    if (par.language === "pt") {
      return {
        title: "Meu organizador de tarefas",
        placeholder: "Escreva sua tarefa aqui",
        subtitle:"Lista de tarefas",
        editTask:  "Editar tarefa",
        task:"Tarefa",
        cancel:"Cancelar",
        save: "Salvar alterações"
      };
    }
  
    if (par.language === "fr") {
      return {
        title: "Mon organisateur de tâches",
        placeholder:"Écrivez votre devoir ici",
        subtitle: "Liste des tâches",
        editTask:"Modifier la tâche",
        task:"Tâche",
        cancel:"Annuler",
        save: "Enregistrer les modifications"
      };
    }
  
    if (par.language === "it") {
      return {
        title: "Il mio organizzatore di attività",
        placeholder: "Scrivi qui il tuo compito",
        subtitle: "Lista dei compiti",
        editTask:"Modificare il compito",
        task:"Compito",
        cancel:"Annullare",
        save:"Salva modifiche"
      };
    }
    if (par.language === "ru") {
      return {
        title: "Мой органайзер задач",
        placeholder:  "Напишите ваше задание здесь",
        subtitle: "Список дел",
        editTask: "Редактировать задачу",
        task:"Задание",
        cancel:"Отменить",
        save:"Сохранить изменения"
      };
    }
    if (par.language === "zh") {
      return {
        title: "我的任务组织者",
        placeholeder: "在这里写下你的作业",
        subtitle: "任务清单",
        editTask:"编辑任务",
        task:"任务",
        cancel:"取消",
        save: "保存更改"
      };
    }
  };
  