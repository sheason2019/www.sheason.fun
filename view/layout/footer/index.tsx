import { FC } from "react";

import styles from "./index.module.css";
import { cx } from "@/serivce/utils/classes";

export const Footer: FC = () => {
  return (
    <div
      className={cx(
        styles.footer,
        "bg-gray-200 flex flex-col justify-center items-center"
      )}
    >
      <a href="https://beian.miit.gov.cn/" className="text-sm" target="_blank">
        鄂ICP备2022018386号-1
      </a>
    </div>
  );
};
