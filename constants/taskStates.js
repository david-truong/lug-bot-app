const STATES = {
	completedFailure: {
		displayType: 'failure',
		label: 'Completed',
		state: 'COMPLETED_FAILURE',
	},
	completedSuccess: {
      	displayType: 'success',
      	label: 'Completed successfully',
      	state: 'COMPLETED_SUCCESS'
   },
	running: {
		displayType: 'warning',
		label: 'Running',
		state: 'RUNNING',
	},
	pending: {
		displayType: 'info',
		label: 'Waiting to Start',
		state: 'PENDING',
	},
};

module.exports = {
	byId: Object.values(STATES).reduce((acc, state) => {
		acc[state.state] = state;

		return acc;
	}, {}),
	byName: STATES,
	completedFailureState: STATES.completedFailure,
	completedSuccessState: STATES.completedSuccess,
	pendingState: STATES.pending,
	runningState: STATES.running,
};
