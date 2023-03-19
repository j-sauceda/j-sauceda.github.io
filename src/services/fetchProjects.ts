export const fetchProjects = async () => {
  const url =
    'https://sa-east-1.aws.data.mongodb-api.com/app/portfolio_api-shhvc/endpoint/projects';

  try {
    const data = await fetch(url, { method: 'GET' });
    return data.json();
  } catch (error) {
    console.log(error);
  }
};
