import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const Component1 = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const columns = [
        { field: 'id', headerName: 'ID', flex: 0 },
        { field: 'title', headerName: 'Title', flex: 1 },
        { field: 'body', headerName: 'Body', flex: 1 },
    ];

    return (
        <>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={posts} columns={columns} />
            </div>
        </>
    );
};

export default Component1;
