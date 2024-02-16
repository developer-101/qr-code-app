import { useState } from "react";
import QRCode from "react-qr-code";
import './style.scss'

export default function QrCodeGenerator() {

    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');

    function handleGenerate() {
        setQrCode(input);
        setInput('');
    }

    return (
        <>
            <div>
                <h1>QR Code Generator</h1>
                <div className="input-zone">
                    <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Enter your value here" />&nbsp;
                    <button disabled={input && input.trim().length > 0 ? undefined : true} onClick={handleGenerate}>Generate</button>
                </div>
                <div>
                    <QRCode value={qrCode} size={400} bgColor="#fff" />
                </div>
            </div>
        </>
    )
}