export const GetData = async (url: string) => {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = response?.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    }