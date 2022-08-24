                            // this mean that the function is going to receive a Type and a url(string) as params, and it'll return a promise with Type T
export const getData = async <T>(url: string): Promise<T> => {
    const response = await fetch(url);
    return await response.json();
}