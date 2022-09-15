/* eslint-disable no-unneeded-ternary */
import QRCode from 'qrcode';
import { useState } from 'react';

import qrImg from '../assets/qrcode.png';

function QrForm() {
  const [url, setUrl] = useState('');
  const [qrcode, setQrcode] = useState('');

  function GenerateQr() {
    if (url.length > 0) {
      QRCode.toDataURL(
        url,
        {
          errorCorrectionLevel: 'high',
          width: 208,
          margin: 3,
          color: {
            dark: '#ef4444',
            light: '#0000',
          },
        },
        (error, text) => {
          if (error) return console.log(error);
          return setQrcode(text);
        }
      );
    }
  }

  return (
    <div className="bg-gray-900 flex flex-col max-w-sm rounded-lg p-10">
      <div className="flex justify-center max-w-sm my-2 p-6">
        <img className="w-52 rounded" src={qrcode ? qrcode : qrImg} alt="" />
      </div>
      <div className="flex flex-col items-center justify-center mx-4">
        <input
          placeholder="Enter a URL"
          className="w-full p-2 mx-4 rounded-lg text-gray-dark text-center focus:outline-none"
          type="text"
          id="first-name"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          className="w-full p-2 my-5 rounded-lg text-white bg-red-500 hover:bg-red-400"
          type="submit"
          onClick={GenerateQr}
        >
          Generate
        </button>
      </div>
    </div>
  );
}

export default QrForm;
