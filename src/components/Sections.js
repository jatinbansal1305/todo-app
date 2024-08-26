import Section from "./Section";

const Sections = ({ tasks, setTasks }) => {
  const onMoveItem = ({ taskId, currentSection, value }) => {
    const taskCopy = { ...tasks };

    const index = taskCopy[currentSection].findIndex(
      (task) => task.id === taskId
    );
    if (index === -1) return;

    const [task] = taskCopy[currentSection].splice(index, 1);

    let targetSection;
    if (value === "prev") {
      targetSection = getPreviousSection(currentSection);
    } else if (value === "next") {
      targetSection = getNextSection(currentSection);
    }

    if (targetSection) {
      taskCopy[targetSection].push(task);
      setTasks(taskCopy);
    }
  };

  const getPreviousSection = (currentSection) => {
    switch (currentSection) {
      case "inProgress":
        return "todos";
      case "done":
        return "inProgress";
      default:
        return null;
    }
  };

  const getNextSection = (currentSection) => {
    switch (currentSection) {
      case "todos":
        return "inProgress";
      case "inProgress":
        return "done";
      default:
        return null;
    }
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <Section
        tasks={tasks}
        setTasks={setTasks}
        onMoveItem={onMoveItem}
        disabledBack={true}
        disabledNext={false}
        currentSection={"todos"}
      />
      <Section
        tasks={tasks}
        setTasks={setTasks}
        onMoveItem={onMoveItem}
        disabledBack={false}
        disabledNext={false}
        currentSection={"inProgress"}
      />
      <Section
        tasks={tasks}
        setTasks={setTasks}
        onMoveItem={onMoveItem}
        disabledBack={false}
        disabledNext={true}
        currentSection={"done"}
      />
    </div>
  );
};
export default Sections;
