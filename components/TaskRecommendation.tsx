import ClayButton from '@clayui/button';
import ClayIcon from '@clayui/icon';
import ClayLayout from '@clayui/layout';
import ClayPanel from '@clayui/panel';
import React from 'react';
import ReactHtmlParser from 'react-html-parser'; 

import DiffBlock from './DiffBlock';

const TaskRecommendation = ({
	action,
	baseBranchName,
    body,
    branchName,
    commitComments,
    diffContent,
    id,
    mergeAdvice,
    name,
    title,
}) => {
	return (
		<>
			<ClayPanel.Header>
				<ClayLayout.ContentRow containerElement="h3" float>
					<ClayLayout.ContentCol>
						{`${title}`}
					</ClayLayout.ContentCol>
					<ClayLayout.ContentCol expand>
						{/*<ClayButton
							// @ts-ignore
							displayType={isStaged ? 'success' : 'secondary'}
							onClick={() => {
								postStaged(!isStaged, comment.id);

								const newArray = [...stagedChanges];

								if (isStaged) {
									newArray.splice(
										newArray.indexOf(comment.id),
										1
									);
								} else {
									newArray.push(comment.id);
								}

								handleStagedChanges(newArray);
							}}
							small
							style={{
								marginLeft: 'auto',
							}}
						>
							{isStaged ? 'Staged' : 'Stage Change'}

							{isStaged && (
								<ClayIcon className="ml-1" symbol="check" />
							)}
						</ClayButton>*/}
					</ClayLayout.ContentCol>
				</ClayLayout.ContentRow>
			</ClayPanel.Header>

			<ClayPanel.Body>
				{body && (
					<div>{ ReactHtmlParser(body) }</div>
				)}

				<DiffBlock
					diffText={diffContent}
				/>

				{/*{index !== comments.length - 1 && <hr />}*/}
			</ClayPanel.Body>
		</>
	);
};

export default TaskRecommendation;
