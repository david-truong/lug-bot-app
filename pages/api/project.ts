export default async function (_req, res) {
	const tasks = await new Promise((res) => {
		fetch('http://localhost:9000/tasks')
		  .then(response => response.json())
		  .then((jsonData) => {
		    res(jsonData)		
		  })
		  .catch((error) => {
		    // handle your errors here
		    console.error(error)
		  });
	});

	const project = await new Promise((res) => {
		fetch('http://localhost:9000/status')
		  .then(response => response.json())
		  .then((jsonData) => {
		    res(jsonData.project)		
		  })
		  .catch((error) => {
		    // handle your errors here
		    console.error(error)
		  });
	});

	res.status(200).json({...tasks, ...project});
};
