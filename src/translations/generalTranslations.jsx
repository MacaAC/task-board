export const generalTranslations = (par) => {
    if (par.language === "en") {
      return {
       title: "My task organizer",
       placeholder: "Write your homework here",
       subtitle:  "Task list"


      };
    }
    if (par.language === "es") {
      return {
        title: "Mi organizador de Tareas",
        placeholder:"Escriba su tarea aquí",
        subtitle: "Lista de tareas"
      };
    }
  
    if (par.language === "pt") {
      return {
        title: "Meu organizador de tarefas",
        placeholder: "Escreva sua tarefa aqui",
        subtitle:"Lista de tarefas"
      };
    }
  
    if (par.language === "fr") {
      return {
        title: "Mon organisateur de tâches",
        placeholder:"Écrivez votre devoir ici",
        subtitle: "Liste des tâches"
      };
    }
  
    if (par.language === "it") {
      return {
        title: "Il mio organizzatore di attività",
        placeholder: "Scrivi qui il tuo compito",
        subtitle: "Lista dei compiti"
      };
    }
    if (par.language === "ru") {
      return {
        title: "Мой органайзер задач",
        placeholder:  "Напишите ваше задание здесь",
        subtitle: "Список дел"
      };
    }
    if (par.language === "zh") {
      return {
        title: "我的任务组织者",
        placeholeder: "在这里写下你的作业",
        subtitle: "任务清单"
      };
    }
  };
  