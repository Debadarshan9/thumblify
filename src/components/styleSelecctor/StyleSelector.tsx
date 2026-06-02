import {
  ChevronDownIcon,
  CpuIcon,
  ImageIcon,
  PenToolIcon,
  SparkleIcon,
  SquareIcon,
} from "lucide-react";
import style from "./StyleSelector.module.scss";
import type { StyleSelectorProps } from "./StyleSelector.types";
import { thumbnailStyles } from "../../utils/utils";

const StyleSelector = ({
  value,
  onChange,
  isOpen,
  setIsOpen,
}: StyleSelectorProps) => {
  const styleDescription: Record<string, string> = {
    "Bold & Graphic": "High contrast, bold typography, striking visuals",
    Minimalist: "Clean,simple and lots of white space",
    Photorealistic: "Photo-based, natural looking",
    Illustrated: "Hand-drawn, artistic, creative",
    "Tech/Futuristic": "Modern, sleek, tech-inspired",
  };
  const styleIcons: Record<string, React.ReactNode> = {
    "Bold & Graphic": <SparkleIcon />,
    Minimalist: <SquareIcon />,
    Photorealistic: <ImageIcon />,
    Illustrated: <PenToolIcon />,
    "Tech/Futuristic": <CpuIcon />,
  };

  console.log("Selected Style:", value);

  return (
    <div className={style.container}>
      <div>Thumbnail Style</div>
      <button
        className={style.styleContainer}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={style.selectedStyleContainer}>
          <div className={style.selectedStyle}>
            <span>{styleIcons[value]}</span>
            <span>{value}</span>
          </div>
          <p className={style.styleDescription}>{styleDescription[value]}</p>
        </div>
        <ChevronDownIcon
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      {isOpen && (
        <div className={style.styleList}>
          {thumbnailStyles.map((thumb) => (
            <button
              onClick={() => {
                onChange(thumb);
                setIsOpen(false);
              }}
              className={style.styleOptions}
            >
              <span>{styleIcons[thumb]}</span>
              <div className={style.styleOptionText}>
                <span>{thumb}</span>
                <span className={style.styleDescription}>
                  {styleDescription[thumb]}
                </span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default StyleSelector;
