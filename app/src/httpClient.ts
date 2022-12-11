import RequestParameters from "./model/requestParameters";

const request = async (path: string, params?: RequestParameters) => {
  const url = new URL(`${process.env.REACT_APP_BASE_URL}${path}`);
  params && Object.entries(params).forEach(
    ([key, value]) => value && url.searchParams.append(key, value)
  );
  const response = await fetch(url);
  return await response.json();
};

const get = async (path: string, params?: RequestParameters) => {
  try {
    return await request(path, params);
  } catch (error) {
    console.error(`Get request failed: ${error}`)
  }
};

export default { get };
