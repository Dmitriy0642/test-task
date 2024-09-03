import { motion } from "framer-motion";

interface SquareProps {
  color: string;
  index: number;
}

const Square: React.FC<SquareProps> = ({ color, index }) => {
  return (
    <motion.div
      key={index}
      initial={{ x: "-100%" }}
      animate={{ x: "5%" }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.8 }}
      style={{
        width: "20vw",
        height: "20vw",
        backgroundColor: color,
        marginRight: "10px",
        position: "relative",
      }}
    />
  );
};

export default Square;
