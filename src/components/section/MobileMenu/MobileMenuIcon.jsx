import { motion } from "motion/react";
import Menu from "../../icons/Menu";
import { useMobileMenuContext } from "../../../contexts/MobileMenuContext.jsx";

const MobileMenuIcon = () => {
  const { mobileMenuOpened, setMobileMenuOpened } = useMobileMenuContext();

  return (
    <motion.button
      animate={{ rotate: mobileMenuOpened ? 90 : 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className={`hidden cursor-pointer items-center justify-center max-lg:flex`}
      onClick={() => setMobileMenuOpened(true)}
    >
      <Menu className={`stroke-primary-50 h-7 w-7`} width={2} />
    </motion.button>
  );
};
export default MobileMenuIcon;
