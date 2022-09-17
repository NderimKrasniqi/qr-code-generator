import QRCode from 'qrcode';

async function getQrCode(url) {
  try {
    const result = await QRCode.toDataURL(url, {
      errorCorrectionLevel: 'high',
      width: 208,
      margin: 3,
      color: {
        dark: '#ef4444',
        light: '#0000',
      },
    });
    return result;
  } catch (error) {
    return error;
  }
}

export default getQrCode;
