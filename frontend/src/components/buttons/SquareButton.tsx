import React, { PropsWithChildren, forwardRef, SyntheticEvent } from "react";
import styles from "./buttons.module.scss";

interface IButtonProps {
  onClick?: (e: SyntheticEvent) => void;
  text: string;
}

export type Ref = HTMLButtonElement;

const SquareButton: React.FC<PropsWithChildren<IButtonProps>> = ({
  children,
  onClick,
  text,
}) => {
  return (
    <button className={styles.button_type_square} onClick={onClick}>
      {children}
      <br />
      <br />
      {text}
    </button>
  );
};

export default React.memo(SquareButton);
