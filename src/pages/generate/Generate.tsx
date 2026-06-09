import { Fragment, useState } from "react";
import Button from "../../components/common/button/Button";
import SoftBackdrop from "../../components/common/soft-backdrop/SoftBackdrop";
import style from "./Generate.module.scss";
import { useParams } from "react-router-dom";
import TextFieldComponent from "../../components/common/input/text/Text";
import AspectRatio from "../../components/aspectRatio/AspectRatio";
import { colorSchemes } from "../../utils/utils";
import ColorSchemeSelector from "../../components/colorSchemeSelector/ColorSchemeSelector";
import StyleSelector from "../../components/styleSelecctor/StyleSelector";
const Generate = () => {
  const { id } = useParams();
  const [title, setTitle] = useState<string>("");
  const [additionalDetails, setAdditionalDetails] = useState<string>("");
  const [aspectRatio, setAspectRatio] = useState<string>("16:9");
  const [colorSchemeId, setColorSchemeId] = useState<string>(
    colorSchemes[0].id,
  );
  // TODO: Add thumbnail state to display generated thumbnail on the right side --> Will implement latter
  // const [thumbnail, setThumbnail] = useState(null);

  const [thumbStyle, setThumbStyle] = useState("Bold & Graphic");
  const [styleDropdownOpen, setStyleDropdownOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <Fragment>
      <SoftBackdrop />
      <div className={style.generateContainer}>
        <div className={style.contentWrapper}>
          {/* Left Side */}
          <div className={style.leftSection}>
            <div className={style.headerWrapper}>
              <div className={style.header}>Create your thumbnail</div>
              <p>Describe your vision and let AI bring it to life</p>
            </div>
            <div>
              <div className={style.inputWrapper}>
                <TextFieldComponent
                  type="text"
                  label="Title or Topic"
                  placeholder="e.g., 10 Tips for Better Sleep"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  maxLength={100}
                  className={style.textField}
                />
              </div>
              <span className={style.charCount}>{title.length}/100</span>
            </div>
            {/* AspectRatioSelector */}
            <AspectRatio value={aspectRatio} onChange={setAspectRatio} />
            {/* StyleSelector */}
            <StyleSelector
              value={thumbStyle}
              onChange={setThumbStyle}
              isOpen={styleDropdownOpen}
              setIsOpen={setStyleDropdownOpen}
            />
            {/* ColorSchemeSelector */}
            <ColorSchemeSelector
              value={colorSchemeId}
              onChange={setColorSchemeId}
            />

            <div>
              <div className={style.inputWrapper}>
                <TextFieldComponent
                  type="text"
                  label="Additional Details (Optional)"
                  placeholder="Add any specific elements, moods, or style preferences..."
                  multiline={4}
                  value={additionalDetails}
                  onChange={(e) => setAdditionalDetails(e.target.value)}
                  className={style.textArea}
                />
              </div>
            </div>
            {/* Button */}
            {!id && (
              <Button
                text={loading ? "Generating..." : "Generate Thumbnail"}
                fullWidth
                disabled={loading}
                handleClick={() => {
                  setLoading(true);
                  setTimeout(() => {
                    setLoading(false);
                  }, 2000);
                }}
              />
            )}
          </div>
          {/* Right Side */}
          <div className={style.rightSection}>This is right side</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Generate;
