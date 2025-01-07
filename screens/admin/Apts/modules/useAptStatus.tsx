import { TApt } from "@/utils";

type Props = Pick<TApt, "status">;
export function useAptStatus({ status }: Props) {
  let text, color, backgroundColor;
  if (status === "available") {
    text = "Không có sẵn";
    color = "rgb(75, 82, 100)";
    backgroundColor = "rgba(75, 82, 100, 0.4)";
  }
  if (status === "available") {
    text = "Có sẵn";
    color = "rgb(46, 124, 255)";
    backgroundColor = "rgba(46, 124, 255, 0.4)";
  }
  if (status === "rented") {
    text = "Đã thuê";
    color = "rgb(229, 9, 20)";
    backgroundColor = "rgba(229, 9, 20, 0.4)";
  }
  if (status === "sold") {
    text = "Đã bán";
    color = "rgb(50, 119, 107)";
    backgroundColor = "rgba(50, 119, 107, 0.4)";
  }
  return { text, color, backgroundColor };
}
