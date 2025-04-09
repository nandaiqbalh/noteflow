import { useState } from "react";
import { frequentlyAskedQuestions } from "../../../utils/content.js";
import FAQList from "./FAQList.jsx";

const FaQs = () => {
  const [category, setCategory] = useState("General");
  const [activeQuestion, setActiveQuestion] = useState(null);

  const categoryObj = frequentlyAskedQuestions
    .filter((obj) => obj.category === category)
    .at(0);

  const questionsArr = categoryObj.questions;

  const handleQuestionClick = (id) =>
    id === activeQuestion ? setActiveQuestion(null) : setActiveQuestion(id);

  const handleCategoryClick = (category) => {
    setActiveQuestion(null);
    setCategory(category);
  };

  return (
    <section className="bg-gradient-to-bottom justify-items-center">
      <div className="w-full max-w-[90rem] py-32 max-xl:px-16 max-xl:py-24 max-lg:px-8">
        <h2 className="text-primary-50 mb-8 text-center text-6xl/18 font-semibold tracking-tighter max-xl:mb-6 max-xl:text-5xl/16 max-lg:text-4xl/10 max-lg:tracking-tight">
          Frequently Asked Questions
        </h2>
        <div className="mb-8 text-xl/loose font-light max-lg:text-lg/8">
          <p className="text-primary-100 text-center">
            The most commonly asked questions about NoteFlow.
            <br />
            Have any other questions?{" "}
            <a className="underline decoration-2 underline-offset-3" href="#">
              Chat with our expert tech team
            </a>
          </p>
        </div>
      </div>

      <ul className="mb-16 flex flex-wrap justify-center gap-x-3 gap-y-4 max-lg:mb-18">
        {frequentlyAskedQuestions.map((obj) => (
          <li key={obj.id}>
            <button
              className={`border-primary-50 text-primary-50 transition-properties cursor-pointer rounded-full border-2 px-8 py-3.5 text-lg/8 ${obj.category === category && "bg-primary-500 text-primary-1300 border-primary-500 primary-glow"} ${obj.category !== category && "hover:bg-primary-50 hover:text-primary-1300"} max-xl:text-base/loose max-xl:px-6`}
              onClick={() => handleCategoryClick(obj.category)}
            >
              {obj.category}
            </button>
          </li>
        ))}
      </ul>

      <FAQList
        category={category}
        questions={questionsArr}
        activeQuestion={activeQuestion}
        handleQuestionClick={handleQuestionClick}
      />
    </section>
  );
};
export default FaQs;
