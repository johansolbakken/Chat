import { useState } from "react"

export const Tester = () => {
    const [url, setUrl] = useState("");
    const [message, setMessage] = useState("");
    return <div>
        <input onChange={(e) => setUrl(e.target.value)} value={url} />
        <button onClick={() => {
            fetch(url).then(data => data.json()).then(json => setMessage(json));
        }}/>
        <p>Message: {message}</p>
    </div>
}