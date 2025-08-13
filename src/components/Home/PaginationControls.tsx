import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

interface PaginationControlsProps {
  page: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
}

const PaginationControls = ({
  page,
  totalPages,
  onPrev,
  onNext,
}: PaginationControlsProps) => (
  <div className="flex gap-2">
    <button
      onClick={onPrev}
      disabled={page === 0}
      aria-label="Previous parks"
      className={`p-2 flex items-center justify-center border-2 rounded-full 
        text-2xl ${
          page === 0
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "hover:bg-gray-100 hover:cursor-pointer"
        }`}
    >
      <IoArrowBackOutline />
    </button>
    <button
      onClick={onNext}
      disabled={page === totalPages - 1}
      aria-label="Next parks"
      className={`p-2 flex items-center justify-center border-2 rounded-full 
        text-2xl ${
          page === totalPages - 1
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "hover:bg-gray-100 hover:cursor-pointer"
        }`}
    >
      <IoArrowForwardOutline />
    </button>
  </div>
);
export default PaginationControls;
