import { useState } from "react";

export default function useModal(initial) {
  const [history, setHistory] = useState([initial]);

  function transiiton(changeTo, replace=False) {
    if (replace) {
      setHistory([...history])
    }
  }
}
