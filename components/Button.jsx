const Button = ({ children, variation, ...props }) => (
	<button
		{...props}
		className={`title mr-3 rounded-2xl px-8 py-2 shadow-md border-2 box-border transition duration-300 ease-in-out focus-within:outline-none focus-within:ring-4 focus-within:ring-indigo-300 ${
			variation === "primary"
				? "bg-gray-900 border-gray-900 text-gray-50 hover:bg-indigo-600 hover:border-indigo-600"
				: "bg-transparent border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-gray-50"
		}`}>
		{children}
	</button>
);

export default Button;
