import ClayLayout from '@clayui/layout';
import ClayList from '@clayui/list';
import React from 'react';
import useSWR from 'swr';

import STATES from '../constants/taskStates';
import TaskListItem from './TaskListItem';

const fetcher = (args) => fetch(args).then((res) => res.json());

const TaskList = ({project, taskStateFilter}) => {
	const {data: projectData} = useSWR(`/api/project`, fetcher, {
		initialData: project,
		refreshInterval: 5000,
	});

	const isCompletedFailureStateRoute = taskStateFilter === STATES.completedFailureState.id;
	const isCompletedSuccessStateRoute = taskStateFilter === STATES.completedSuccessState.id;
	const isPendingStateRoute = taskStateFilter === STATES.pendingState.id;
	const isRunningStateRoute = taskStateFilter === STATES.runningState.id;

	return (
		<ClayLayout.ContentRow>
			<ClayLayout.ContentCol expand>
				{projectData.runningTasks.length !== 0 &&
					!isCompletedFailureStateRoute &&
					!isCompletedSuccessStateRoute &&
					!isPendingStateRoute && (
						<ClayList className="shadow-sm">
							<ClayList.Header className="bg-warning">
								{'Running Tasks'}
							</ClayList.Header>

							{projectData.runningTasks.map((task) => (
								<TaskListItem
									key={task.id}
									task={task}
									taskState={STATES.runningState}
								/>
							))}
						</ClayList>
					)}

				{!isCompletedFailureStateRoute && !isCompletedSuccessStateRoute && !isRunningStateRoute && (
					<ClayList className="shadow-sm">
						<ClayList.Header className="bg-info">
							{'Pending Tasks'}
						</ClayList.Header>

						{projectData.pendingTasks.map((task) => (
							<TaskListItem
								key={task.id}
								task={task}
								taskState={STATES.pendingState}
							/>
						))}
					</ClayList>
				)}

				{!isPendingStateRoute && !isRunningStateRoute && (
					<ClayList className="shadow-sm">
						<ClayList.Header className="bg-success">
							{'Completed Tasks'}
						</ClayList.Header>

						{projectData.completedTasks.map((task) => (
							<TaskListItem
								key={task.id}
								task={task}
								taskState={STATES.completedState}
							/>
						))}
					</ClayList>
				)}
			</ClayLayout.ContentCol>
		</ClayLayout.ContentRow>
	);
};

export default TaskList;
