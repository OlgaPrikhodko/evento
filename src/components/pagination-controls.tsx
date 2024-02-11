import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type PaginationControlsProps = {
  previusPath: string;
  nextPath: string;
};

const btnStyles =
  "px-5 py-3 text-white text-sm flex items-center gap-x-2 bg-white/5 rounded-md opacity-75 hover:opacity-100 transition";

export default function PaginationControls({
  previusPath,
  nextPath,
}: PaginationControlsProps) {
  return (
    <section className="w-full flex justify-between">
      {previusPath && (
        <Link href={previusPath} className={btnStyles}>
          <ArrowLeftIcon />
          Previous
        </Link>
      )}

      {nextPath && (
        <Link href={nextPath} className={`${btnStyles} ml-auto`}>
          Next
          <ArrowRightIcon />
        </Link>
      )}
    </section>
  );
}
