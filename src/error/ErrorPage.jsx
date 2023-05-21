import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div id="error-page" className="w-1/2 h-40  mx-auto text-center mt-12 ">
      <iframe
        src="https://giphy.com/embed/TUQ6hOPCUifdH1KWiz"
        width="480"
        height="480"
        className="giphy-embed mx-auto"
        allowFullScreen
      ></iframe>
      <p className="mt-2 text-2xl font-bold text-red-600">
        <i>{error.statusText || error.message}</i>
      </p>
      <p className="mt-4 text-xl font-bold">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="font-semibold text-lg">
        You can go home by clicking below button.
      </p>
      <button className="mt-2 bg-red-500 hover:bg-red-600   text-lg text-white font-bold py-2 px-4 rounded focus:outline-none">
        <Link className="flex items-center" to="/">
          <FaArrowLeft className="me-2"></FaArrowLeft> Back to Home
        </Link>
      </button>
    </div>
  );
};

export default ErrorPage;
