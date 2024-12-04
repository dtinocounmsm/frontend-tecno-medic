import "./styles/loader.css";

export type LoaderProps = {
	isLoading: boolean;
	loadingText: string;
};

export const Loader = ({ isLoading, loadingText }: LoaderProps) => {
	if (!isLoading) {
		return null;
	}

	return (
		<div className="loader-overlay">
			<div className="loader-container">
				<div className="loader-animation">
					<div className="circle"></div>
					<div className="circle"></div>
					<div className="circle"></div>
				</div>
				<p className="loader-text">{loadingText}</p>
			</div>
		</div>
	);
};
