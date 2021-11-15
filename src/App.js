import { useState } from 'react';
import QrReader from 'react-qr-reader';

import './App.css';

function App() {
  const [scannerVisible, setScannerVisible] = useState(false);
  const [qrCodes, setQRcodes] = useState([]);

  const showScanner = () => setScannerVisible(true);

  const handleScan = data => {
    if (data) {
      const newQRcodes = [...qrCodes, data];

      setQRcodes(newQRcodes);
      setScannerVisible(false);
    }
  };

  const handleError = error => console.log(error);

  return (
    <div>
      <button onClick={showScanner}>Scan QR code</button>
      {qrCodes.map((qrCode, i) => (
        <p key={i}>{qrCode}</p>
      ))}
      {scannerVisible && (
        <QrReader
          onScan={handleScan}
          onError={handleError}
        />
      )}
    </div>
  );
}

export default App;
