import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const liststudents = [
  {
    company: 'Alfreds Futterkiste',
    contact: 'Maria Anders',
    country: 'Germany'
  },
  {
    company: 'Centro comercial Moctezuma',
    contact: 'Francisco Chang',
    country: 'Mexico'
  },
  {
    company: 'Ernst Handel',
    contact: 'Roland Mendel',
    country: 'Austria'
  },
  {
    company: 'Island Trading',
    contact: 'Helen Bennett',
    country: 'UK'
  },
  {
    company: 'Laughing Bacchus Winecellars',
    contact: 'Yoshi Tannamuri',
    country: 'Canada'
  },
  {
    company: 'Magazzini Alimentari Riuniti',
    contact: 'Giovanni Rovelli',
    country: 'Italy'
  }
]

const studentinfo = (
  <>
    <h2 style={{fontSize:"25px",textAlign:"center"}}>Students</h2>
    <table style={{textAlign:'left'}}>
      <tbody>
        <tr>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
        </tr>
        {liststudents.map((liststudent,index)=><tr key={index}><td>{liststudent.company}</td><td>{liststudent.contact}</td><td>{liststudent.country}</td></tr>)}
      </tbody>
    </table>
  </>
)
ReactDOM.createRoot(document.getElementById("root")).render(studentinfo)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
