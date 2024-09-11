const API_URL = 'http://127.0.0.1:8000/api/memories/'; 

export const fetchRecuerdos = async () => {
    try {
        const response = await fetch(`${API_URL}/memories/`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching recuerdos:', error);
        return [];
    }
};

export const createRecuerdo = async (data) => {
    try {
        const response = await fetch(`${API_URL}/memories/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: data,
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error creating recuerdo:', error);
    }
};

export const deleteRecuerdo = async (id) => {
    try {
        const response = await fetch(`${API_URL}/memories/${id}/`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
    } catch (error) {
        console.error('Error deleting recuerdo:', error);
    }
};
