import { cx } from "@/serivce/utils/classes";

export const AppBar = () => {
  return (
    <nav
      className={cx(
        "w-full h-14 bg-blue-400 text-white",
        "flex items-center pl-8",
        "text-xl font-sans"
      )}
    >
      <span>sheason.fun</span>
    </nav>
  );
};
