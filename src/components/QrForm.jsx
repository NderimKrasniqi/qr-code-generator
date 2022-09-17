/* eslint-disable no-unneeded-ternary */
import { useState } from 'react';
import getQrCode from '../utils/utils';

import qrImg from '../assets/qrcode.png';

function QrForm() {
  const [url, setUrl] = useState('');
  const [qrcode, setQrcode] = useState('');

  const handleButton = async () => {
    if (url.length > 0) {
      const data = await getQrCode(url);
      setQrcode(data);
    }
    setUrl('');
  };

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
          className="w-full p-2 my-5 rounded-lg text-white bg-red-500 active:bg-red-400"
          type="submit"
          onClick={handleButton}
        >
          Generate
        </button>
      </div>
    </div>
  );
}

export default QrForm;
