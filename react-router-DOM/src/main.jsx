import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router'
import React from 'react'
import ReactDOM from "react-dom/client"

import './index.css'
import App from './App.jsx'

const root = document.getElementById('root')


createRoot(document.getElementById('root')).render(
  <App/>
);
