import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import axios from "axios";

const QRScanner = () => {
  const [data, setData] = useState("");

  const handleScan = async (scannedData) => {
    if (scannedData) {
      setData(scannedData);

      // Mark attendance
      try {
        const response = await axios.post("/api/attendance/mark", { studentId: scannedData });
        alert(response.data.message);
      } catch (error) {
        console.error("Error marking attendance:", error);
      }
    }
  };

  const handleError = (err) => {
    console.error("Error scanning QR code:", err);
  };

  return (
    <div>
      <h1>QR Code Scanner</h1>
      <QrReader
        onResult={(result, error) => {
          if (result) handleScan(result?.text);
          if (error) handleError(error);
        }}
        style={{ width: "100%" }}
      />
      {data && <p>Scanned ID: {data}</p>}
    </div>
  );
};

export default QRScanner;
