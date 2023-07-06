import { cx } from "@/serivce/utils/classes";
import { FC, PropsWithChildren, ReactNode } from "react";

import styles from "./index.module.css";

export interface ProjectCardProps {
  hoverContent?: ReactNode;
}

export const ProjectCard: FC<PropsWithChildren<ProjectCardProps>> = ({
  children,
  hoverContent,
}) => {
  return (
    <div
      className={cx(
        "flex-1 h-72 border border-gray-300 rounded",
        "shadow hover:shadow-lg mx-2 transition-all cursor-pointer",
        "flex justify-center items-center",
        styles.project_card
      )}
    >
      <div
        className={cx(
          styles.static_content,
          "flex justify-center items-center"
        )}
      >
        {children}
      </div>
      {hoverContent && (
        <div className={cx(styles.hover_content, "transition-all")}>
          <div style={{ width: "200px" }}>{hoverContent}</div>
        </div>
      )}
    </div>
  );
};
