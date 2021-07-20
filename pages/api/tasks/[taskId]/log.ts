export default async function (req, res) {
	const {taskId} = req.query;

	const log = await new Promise((res) => {
		fetch(`http://localhost:9000/tasks/${taskId}/log`)
		  .then(response => response.json())
		  .then((jsonData) => {
		    res({log: jsonData.taskLog.join()})		
		  })
		  .catch((error) => {
		    // handle your errors here
		    console.error(error)
		  });
	});

	res.status(200).json(log);
}
