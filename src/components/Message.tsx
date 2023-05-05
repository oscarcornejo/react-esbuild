import React, { useCallback, useState } from "react";

type MessageProps = {
  message: string;
};

export const MessageCount = ({ message }: MessageProps) => {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount((prevState) => prevState + 1);
  }, [count]);

  return (
    <>
      <h1>{message}</h1>
      <h2>Contador: {count}</h2>
      <button onClick={handleIncrement}>Incrementar</button>
    </>
  );
};
