import React, { useState } from "react";
import MarkdownInput from "./components/MarkdownInput";
import MarkdownOutput from "./components/MarkdownOutput";
import Header from "./components/header";
import MarkdownGuide from "./components/MarkdownGuide";

function App() {
    const [count, setCount] = useState(0);
    const [markdown, setMarkdown] = useState(`# Hello World`);
    const [showGuide, setShowGuide] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMarkdown(e.target.value);
    };
    return (
        <>
            <Header onToggleGuide={() => setShowGuide(!showGuide)} />
            {showGuide && <MarkdownGuide />}
            <div style={{ display: "flex" }}>
                <MarkdownInput value={markdown} onChange={handleChange} />
                <MarkdownOutput markdown={markdown} />
            </div>
        </>
    );
}

export default App;
