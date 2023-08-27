import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const footer = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center', 
  padding:' 1rem',
}
root.render(
  <React.StrictMode>
    <App />
   
    <footer style={footer}>
      <p>&copy; { new Date().getFullYear()} Nitin. All rights reserved.</p>
    </footer>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
