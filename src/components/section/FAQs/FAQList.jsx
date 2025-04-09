import { motion } from "motion/react";
import { useState } from "react";
import FAQ from "./FAQ.jsx";

const FAQList = ({
  category,
  questions,
  activeQuestion,
  handleQuestionClick,
}) => {
  const [inView, setInView] = useState(false);

  return (
    <motion.ul
      className={`m-auto flex max-w-[52rem] flex-col gap-y-14 pb-8 max-xl:pb-6 max-lg:gap-y-12 max-lg:px-8`}
      initial={`hidden`}
      animate={inView ? "visible" : "hidden"}
      key={category}
      layout
      variants={{
        hidden: { opacity: 0 },
        visible: {
          transition: {
            staggerChildren: 0.25,
            ease: `easeIn`,
          },
        },
      }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => setInView(true)}
      onViewportLeave={() => setInView(false)}
      viewport={{ once: false, amount: `100%` }}
    >
      {questions.map((question) => (
        <FAQ
          key={question.id}
          question={question}
          activeQuestion={activeQuestion}
          handleQuestionClick={handleQuestionClick}
        />
      ))}
    </motion.ul>
  );
};
export default FAQList;
