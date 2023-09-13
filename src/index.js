import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import BookList from './BookList';

//const cloudStor = 'https://cloud-object-storage-cos-standard-8oy.s3.us-east.cloud-object-storage.appdomain.cloud/';

function App() {
    return (
        <>
            <BookList />
        </>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);