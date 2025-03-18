export interface ButtonProps {
	buttonName: string;
	onClick: () => void;
}

export const Button = ({ buttonName, onClick }: ButtonProps) => {
	return (
		<button className='btn btn-ghost mx-1' onClick={onClick}>
			{buttonName}
		</button>
	);
};
