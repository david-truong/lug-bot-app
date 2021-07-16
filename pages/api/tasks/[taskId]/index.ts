import PROJECT from '../../../../dummy-data';

export default async function (req, res) {
	const {taskId} = req.query;

	if (req.method === 'POST') {
		const task = PROJECT.runningTasks.find((task) => task.id === taskId);

		PROJECT.runningTasks.splice(PROJECT.runningTasks.indexOf(task), 1);
		PROJECT.pendingTasks.push(req.body);

		res.status(200).json(req.body);
	} else {
		const task = await new Promise((res) => {
			fetch('http://localhost:9000/tasks/' + taskId)
			  .then(response => response.json())
			  .then((jsonData) => {
			    res.status(200).json(jsonData);
			  })
			  .catch((error) => {
			    // handle your errors here
			    console.error(error)
			  });
		});
	}
};
