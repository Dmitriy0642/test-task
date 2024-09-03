"use client";
import { useDispatch, useSelector } from "react-redux";
import { addElement, removeElement } from "./store/slices/elementSlice";
import styles from "./page.module.css";
import { v4 as uuidv4 } from "uuid";
import Square from "./components/Square";
import { AnimatePresence } from "framer-motion";
import { getRandomColor } from "./functions/randomColor";
import { RootState } from "./store";

export default function Home() {
  const elements = useSelector((state: RootState) => state.elements);
  const dispatch = useDispatch();

  const createElement = () => {
    const newElement = {
      id: uuidv4(),
      color: getRandomColor(),
    };
    dispatch(addElement(newElement));
  };

  const deleteElement = () => {
    dispatch(removeElement());
  };

  return (
    <main className={styles.main}>
      <div>
        <button className={styles.button} onClick={createElement}>
          Добавить
        </button>
        <button className={styles.button} onClick={deleteElement}>
          Удалить
        </button>
      </div>
      <div className={styles.container}>
        <AnimatePresence initial={false}>
          {elements.map((element, index) => (
            <Square key={element.id} color={element.color} index={index} />
          ))}
        </AnimatePresence>
      </div>
    </main>
  );
}
