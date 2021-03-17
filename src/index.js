import React, { useState } from "react";
import { render } from "react-dom";
import Headers from '@components/Headers'
import '@styles/global.scss'

export default function App() {
    return <>
        <Headers/>
    </>
}

render(<App />, document.getElementById("root"));