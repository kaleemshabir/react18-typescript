import { ReactElement } from 'react';

type PropsType = {
	name: string;
	children?: any;
};
import { CardWrapper, CardBody } from './Card';

const Task = ({ name, children }: PropsType): ReactElement => {
	const content = (
		<CardWrapper>
			<CardBody>
				<p>{name}</p>
				{children}
			</CardBody>
		</CardWrapper>
	);

	return content;
};

export default Task;
