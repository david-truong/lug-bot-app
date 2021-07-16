export default async function (_req, res) {
	// REPLACE WITH LUGBOT API
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

	res.status(200).json(tasks);
}
