import React from 'react';
import './ProgressBar.css'


export default function ProgressBar({ max, current }) {
    const width = (current / max) * 100;
    return (
        <div id="progressBar">
            <div id="progressBarFull" style={{ width: `${width}%` }}></div>
        </div>
    );
}