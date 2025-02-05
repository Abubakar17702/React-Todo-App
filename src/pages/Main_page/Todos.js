import React, { useState, useEffect } from 'react';
import '../../scss/todos.scss'; // Make sure this file contains the CSS from above

const Todos = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [showTasks, setShowTasks] = useState(true); // State to manage visibility of tasks
  const [editIndex, setEditIndex] = useState(null); // State to manage the index of the task being edited

  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (title && location && description) {
      if (editIndex !== null) {
        // Update the task at the specified index
        const updatedTasks = tasks.map((task, index) => 
          index === editIndex ? { title, location, description } : task
        );
        setTasks(updatedTasks);
        setEditIndex(null);
      } else {
        // Add a new task
        const newTask = { title, location, description };
        setTasks([...tasks, newTask]);
      }
      setTitle('');
      setLocation('');
      setDescription('');
    } else {
      alert('All fields are required!');
    }
  };

  const editTask = (index) => {
    const task = tasks[index];
    setTitle(task.title);
    setLocation(task.location);
    setDescription(task.description);
    setEditIndex(index);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  const clearOutput = () => {
    setTasks([]);
    localStorage.removeItem('tasks'); // Clear tasks from localStorage
  };

  const toggleShowTasks = () => {
    setShowTasks(!showTasks);
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div id="todos" className="col-12 col-md-8 col-lg-6 p-2">
        <h1 className="text-center mt-5 mb-3">Add Your Task</h1>
        <div className="container border border-2 rounded p-4" style={{ minHeight: '200px' }}>
          <form onSubmit={addTask}>
            <div className="row g-3">
              <div className="col-6">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="location"
                    name="location"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center">
                <button className="btn btn-success px-5" type="submit">
                  {editIndex !== null ? 'Update Task' : 'Add Task'}
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="container mb-5 mt-2">
          <div className="row d-flex justify-content-center">
            <div className="col-12 text-center mt-sm-3 mt-md-5 mt-lg-2">
              <button className="btn btn-success px-5 mb-4 mt-4 col-12" onClick={toggleShowTasks}>
                {showTasks ? 'Hide Tasks' : 'Show Tasks'}
              </button>
              <div className="border border-2 rounded p-3" style={{ minHeight: '200px' }}>
                {showTasks && (tasks.length > 0 ? (
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Title</th>
                          <th>Location</th>
                          <th>Description</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tasks.map((task, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{task.title}</td>
                            <td>{task.location}</td>
                            <td>{task.description}</td>
                            <td className="d-flex justify-content-center align-items-center">
                              <button className="btn btn-info btn-sm me-2" onClick={() => editTask(index)}>
                                Edit
                              </button>
                              <button className="btn btn-danger btn-sm" onClick={() => deleteTask(index)}>
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p>No tasks added yet.</p>
                ))}
              </div>
              <button className="btn btn-danger mt-3" onClick={clearOutput}>
                Clear Tasks
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todos;