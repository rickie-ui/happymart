import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-t">
      <button
        className="w-full p-4 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold">{title}</span>
          <span
            className={`transform ${
              isOpen ? "rotate-180" : "rotate-0"
            } transition-transform duration-300`}
          >
            <IoIosArrowUp />
          </span>
        </div>
      </button>
      {isOpen && (
        <div
          className={`bg-gray-100 p-4 ${
            isOpen
              ? "max-h-screen overflow-y-auto transition-all duration-300"
              : "max-h-0 overflow-hidden"
          }`}
        >
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
