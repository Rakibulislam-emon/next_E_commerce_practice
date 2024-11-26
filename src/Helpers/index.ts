export const GetData = async (url: string) => {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Check if the response is OK
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json(); // Await the JSON parsing
        return data; // Return the parsed data
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Return null if there's an error
    }
};
