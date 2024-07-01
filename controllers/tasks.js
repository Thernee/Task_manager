
export const getAllTasks = async (req, res) => {
  res.status(200).json({ 
    status: "success",
    message: "Available tasks",
  });
};