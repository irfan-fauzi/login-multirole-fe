import { FC } from "react";
interface GapAtribute {
  height: number;
}
const Gap: FC<GapAtribute> = ({ height }) => {
  return <div className={`h-${height}`}></div>;
};

export default Gap;
