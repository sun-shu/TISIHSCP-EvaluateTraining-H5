import classNames from 'classnames';

const ProgressBar = ({ processRate = 100, barClassNames }) => {
	return (
		<>
			<div className="w-full h-4 relative">
				<div className="flex justify-start items-center h-full">
					<div
						className={classNames('h-1.5 bg-lime-500', barClassNames)}
						style={{
							width: `${processRate}%`,
						}}
					/>
				</div>
			</div>
		</>
	);
};

export default ProgressBar;
