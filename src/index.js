import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './fonts/fonts.sass'
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {createRoot} from "react-dom/client";

const root = createRoot(document.getElementById("root"))

root.render(
        <DndProvider backend={HTML5Backend}>
            <App />
        </DndProvider>,
   )
