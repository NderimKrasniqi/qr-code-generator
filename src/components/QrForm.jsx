import qrImg from '../assets/qr.png';

function Form() {
  return (
    <div className="flex flex-col max-w-sm">
      <div className="flex justify-center max-w-sm my-2 p-6">
        <img className="" src={qrImg} alt="" />
      </div>
      <div className="flex flex-col items-center justify-center mx-4">
        <input
          placeholder="Enter a URL"
          className="w-full p-2 mx-4 border border-gray-200 rounded-lg text-gray-dark focus:outline-none"
          type="text"
          id="first-name"
        />
        <button
          className="w-full p-2 my-5 rounded-lg text-white bg-gray-900 hover:bg-gray-800"
          type="submit"
        >
          Generate
        </button>
      </div>
    </div>
  );
}

export default Form;
