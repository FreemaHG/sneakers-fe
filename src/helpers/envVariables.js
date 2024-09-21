// переменные окружения
const getEnvVariables = () => {
	return {
		BASE_URL: import.meta.env.VITE_BASE_URL,
	};
};

export default getEnvVariables;