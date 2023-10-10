export const fetchProfile = async () => {
  const base_url = import.meta.env.PUBLIC_BASE_URL;
  const url = base_url + 'profile';

  try {
    const data = await fetch(url, { method: 'GET' });
    return data.json();
  } catch (error) {
    console.log(error);
  }
};
