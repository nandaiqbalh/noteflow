import { motion } from "motion/react";
import Close from "../../icons/Close";
import { navigationLinks } from "../../../utils/content.js";
import { useMobileMenuContext } from "../../../contexts/MobileMenuContext.jsx";
import { useModalContext } from "../../../contexts/ModalContext.jsx";

const MobileMenu = () => {
  const { mobileMenuOpened, setMobileMenuOpened } = useMobileMenuContext();
  const { setActiveModal } = useModalContext()

  function handleGerStarted(){
    setMobileMenuOpened(false)
    setActiveModal("sign-up")
  }

  return (
    <motion.div
      className={`bg-primary-1300/50 fixed top-0 right-0 bottom-0 left-0 z-50 flex justify-end px-6 py-6 pl-28 backdrop-blur-sm`}
      animate={mobileMenuOpened ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, visibility: "hidden" },
        visible: { opacity: 1, visibility: "visible" },
      }}
      transition={{ duration: 0.25 }}
    >
      <motion.div
        className={`bg-primary-1400 flex basis-80 flex-col justify-between rounded-2xl bg-[url('../src/assets/Noise.webp')] bg-repeat px-6 py-8`}
        animate={mobileMenuOpened ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, visibility: "hidden", x:"100%" },
          visible: { opacity: 1, visibility: "visible", x:"0%" },
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      >
        <div>
          <button
            onClick={() => setMobileMenuOpened(false)}
            className={`border-primary-75 hover:bg-primary-75 group transition-properties mr-auto w-fit cursor-pointer rounded-2xl border-2 px-3 py-3`}
          >
            <Close
              width={2}
              className={`stroke-primary-75 group-hover:stroke-primary-1300 transition-properties h-4 w-4`}
            />
          </button>

          <ul className={`mt-16 flex flex-col gap-y-6`}>
            {navigationLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className={`text-primary-50 hover:text-primary-500 transition-properties text-lg/8`}
                >
                  {link.link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={`flex flex-col gap-y-3`}>
          <button
            className={`border-primary-50 transition-properties text-primary-50 hover:bg-primary-50 hover:text-primary-1300 box-border cursor-pointer rounded-full border-2 px-6 py-3 text-base/loose font-normal`}
          >
            Login
          </button>
          <button
            className={`bg-primary-500 transition-properties primary-glow primary-glow-hover border-primary-500 text-primary-1300 hover:bg-primary-50 cursor-pointer rounded-full border-2 px-6 py-3 text-base/loose font-normal`}
            onClick={handleGerStarted}
          >
            Get Started
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};
export default MobileMenu;
