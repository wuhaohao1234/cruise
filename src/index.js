import React, { useState } from "react";
import { render } from "react-dom";
import Headers from '@components/header/index'
import Main from '@modules/main/index'
import '@styles/css/global.scss'
export default function App() {
    return <>
        <Headers/>
        <Main/>
    </>
}

render(<App />, document.getElementById("root"));