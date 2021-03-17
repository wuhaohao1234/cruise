import React, { useState } from "react";
import { render } from "react-dom";
import Hello from '@components/Hello'
export default function App() {
    return <>
        <Hello/>
    </>
}

render(<App />, document.getElementById("root"));