import { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState(""); // State to manage the display
  const [menu, setMenu] = useState(false);
  const [history, setHistory] = useState([]); // History as an array
  const [info, setInfo] = useState(false);

  // Handle button clicks
  const handleButtonClick = (value) => {
    if (value === "AC") {
      setDisplay(""); // Reset display
    } else if (value === "Del") {
      setDisplay(display.slice(0, -1)); // Delete last character
    } else if (value === "=") {
      const result = evaluateExpression(display); // Calculate expression
      setDisplay(Math.floor(result.toString()));

      // Add the current calculation to the history array
      setHistory((prevHistory) => [
        ...prevHistory,
        `${display} = ${Math.floor(result.toString())}`
      ]);
    } else {
      setDisplay(display + value); // Append value to display
    }
  };

  // Function to safely evaluate basic mathematical expressions
  const evaluateExpression = (expression) => {
    try {
      let sanitizedExpression = expression
        .replace(/x/g, "*")
        .replace(/÷/g, "/");

      let result = new Function("return " + sanitizedExpression)();
      return result;
    } catch (error) {
      return "Error";
    }
  };

  // Handle menu toggle
  function showMenu() {
    setMenu((menu) => !menu);
  }

  // Handle info toggle
  function infoToggle() {
    setInfo((info) => !info);
  }

  return (
    <>
      <div className="relative h-screen p-4 lg:p-0 flex justify-center items-center bg-gradient-to-tr from-gray-900 to-black text-white">
        <div className=" relative w-full  lg:w-1/4 bg-gray-800 lg:p-4 p-3 lg:rounded-lg shadow-lg rounded-lg">
          {/* Display */}
          <div className="lg:mb-4  bg-gray-950 text-right w-full flex-wrap overflow-hidden   flex justify-between items-center lg:mt-0 mt-4 text-xl px-4  rounded-lg">
            {display || "0"}
            <div
              className="hover:cursor-pointer text-sm my-1 hover:bg-gray-900 hover:rounded-full p-2"
              onClick={showMenu}
            >
              History
            </div>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-4 lg:gap-1 gap-1 mt-5">
            <button
              onClick={() => handleButtonClick("M+")}
              className="bg-gray-700 p-3 lg:p-3 lg:rounded-2xl rounded-md hover:bg-gray-900"
            >
              M+
            </button>
            <button
              onClick={() => handleButtonClick("AC")}
              className="bg-gray-700 p-3 lg:p-3 lg:rounded-2xl rounded-md hover:bg-gray-900"
            >
              AC
            </button>
            <button
              onClick={() => handleButtonClick("Del")}
              className="bg-gray-700 p-3 lg:rounded-2xl rounded-md hover:bg-gray-900"
            >
              Del
            </button>
            <button
              onClick={() => handleButtonClick("/")}
              className="bg-orange-500 p-3 lg:rounded-2xl rounded-md hover:bg-orange-600"
            >
              /
            </button>

            <button
              onClick={() => handleButtonClick("7")}
              className="bg-gray-700 p-2 lg:p-3 lg:rounded-2xl rounded-md hover:bg-gray-900"
            >
              7
            </button>
            <button
              onClick={() => handleButtonClick("8")}
              className="bg-gray-700 p-2 lg:p-3 lg:rounded-2xl rounded-md hover:bg-gray-900"
            >
              8
            </button>
            <button
              onClick={() => handleButtonClick("9")}
              className="bg-gray-700 p-2 lg:p-3 lg:rounded-2xl rounded-md hover:bg-gray-900"
            >
              9
            </button>
            <button
              onClick={() => handleButtonClick("*")}
              className="bg-orange-500 p-2 lg:p-3 lg:rounded-2xl rounded-md hover:bg-orange-600"
            >
              *
            </button>

            <button
              onClick={() => handleButtonClick("4")}
              className="bg-gray-700 p-2 lg:p-3 lg:rounded-2xl rounded-md hover:bg-gray-900"
            >
              4
            </button>
            <button
              onClick={() => handleButtonClick("5")}
              className="bg-gray-700 p-2 lg:p-3 lg:rounded-2xl rounded-md hover:bg-gray-900"
            >
              5
            </button>
            <button
              onClick={() => handleButtonClick("6")}
              className="bg-gray-700 p-2 lg:p-3 lg:rounded-2xl rounded-md hover:bg-gray-900"
            >
              6
            </button>
            <button
              onClick={() => handleButtonClick("-")}
              className="bg-orange-500 p-2 lg:p-3 lg:rounded-2xl rounded-md hover:bg-orange-600"
            >
              -
            </button>

            <button
              onClick={() => handleButtonClick("1")}
              className="bg-gray-700 p-2 lg:p-3 lg:rounded-2xl rounded-md hover:bg-gray-900"
            >
              1
            </button>
            <button
              onClick={() => handleButtonClick("2")}
              className="bg-gray-700 p-2 lg:p-3 lg:rounded-2xl rounded-md hover:bg-gray-900"
            >
              2
            </button>
            <button
              onClick={() => handleButtonClick("3")}
              className="bg-gray-700 p-2 lg:p-3 lg:rounded-2xl rounded-md hover:bg-gray-900"
            >
              3
            </button>
            <button
              onClick={() => handleButtonClick("+")}
              className="bg-orange-500 p-2 lg:p-3 lg:rounded-2xl rounded-md hover:bg-orange-600"
            >
              +
            </button>

            <button
              onClick={() => handleButtonClick("0")}
              className="col-span-2 bg-gray-700 p-2 lg:p-3 lg:rounded-2xl rounded-md hover:bg-gray-900"
            >
              0
            </button>
            <button
              onClick={() => handleButtonClick(".")}
              className="bg-gray-700 p-2 lg:p-3 lg:rounded-2xl rounded-md hover:bg-gray-900"
            >
              .
            </button>
            <button
              onClick={() => handleButtonClick("=")}
              className="bg-orange-500 p-2 lg:p-3 lg:rounded-2xl rounded-md hover:bg-orange-600"
            >
              =
            </button>
          </div>

          {/* History Section */}
          {menu && (
            <div className="absolute top-0 left-0 overflow-hidden rounded-lg ease-in-out duration-200 bg-gray-800 w-full h-full ">
              <div
                className="bg-red-900 hover:cursor-pointer lg:bg-transparent hover:bg-red-950  absolute top-0 right-0 rounde-xl p-1"
                onClick={() => setMenu((preVal) => !preVal)}
              >
                Close
              </div>

              <div className="flex flex-col justify-between h-full">
                <div className="m-2 mt-6">
                  <h1 className="text-3xl">History</h1>
                  <p className="text-sm border-b">
                    Recent calculations are available here:
                  </p>

                  {/* Display full history */}
                  {
                    history.length > 0 ? (<>
                      {
                        history.map( (history, index)=> <li key={index}>{history} </li> )
                      }
                    </>):(<p>No history available</p>)
                  }
                </div>

                <div className="m-2 mb-6 text-center text-sm font-serif border-t">
                  <p>
                    Designed and developed by{" "}
                    <a href=""> Mubashar Siddique</a> using React and Tailwind.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Info Section */}
          {info && (
            <div className="bg-gray-800 absolute top-0 w-full rounded-lg overflow-hidden h-full left-0">
              <div
                className="absolute top-0 right-0 bg-red-900 lg:bg-transparent p-1 hover:bg-red-950 hover:cursor-pointer"
                onClick={infoToggle}
              >
                Close
              </div>
              <div className="p-4">
                <div className="">
                  <h2 className="text-blue-700">How to Use:</h2>
                  <p className="text-sm">
                    1. Enter numbers and choose an operation.<br />
                    2. Click '=' to get the result.<br />
                    3. Use 'AC' to clear the screen or 'Del' to remove the last
                    input.<br />
                    4. The result will appear in the display above.<br/>
                    5. You can see your calculations by clicking on history button.
                  </p>
                </div>

                <div className="text-center bg-gray-50 text-black p-4 rounded-md text-sm lg:mt-6 mt-7">
                  <p>
                    Designed and developed by Mubashar Siddique using React and
                    Tailwind CSS.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div
          className="hidden lg:block absolute py-[2px] px-4 hover:cursor-pointer lg:bottom-12 right-[25%] bg-blue-700 rounded-full text-3xl font-thin"
          onClick={infoToggle}
        >
          i
        </div>
      </div>
    </>
  );
}
