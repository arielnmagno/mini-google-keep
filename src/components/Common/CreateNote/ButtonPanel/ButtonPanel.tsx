import React, { Fragment } from "react";
import ArrowDownIcon from "../../../Icons/ArrowDownIcon";
import ImageIcon from "../../../Icons/ImageIcon";
import PaletteIcon from "../../../Icons/PaletteIcon";
import RestoreIcon from "../../../Icons/RestoreIcon";
import TrashIcon from "../../../Icons/TrashIcon";
import FontSelect from "../FontSelect/FontSelect";
import Palette from "../ColorPalette/Palette";

type ButtonPanelProps = {
  activePage: string,
  theme: {
    font: boolean,
    palette: boolean
  },
  onUpdateTheme: (value: {font: boolean, palette: boolean}) => void,
  onUploadImage: () => void
};

function ButtonPanel(props: ButtonPanelProps) {
  const { activePage, theme, onUpdateTheme, onUploadImage } = props;
  
  const openFontSelect = () => {
    onUpdateTheme({
      font: !theme.font,
      palette: false
    });
  }

  const openPalette = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onUpdateTheme({
      font: false,
      palette: !theme.palette
    });
  }

  const closeElements = () => {
    onUpdateTheme({
      font: false,
      palette: false
    });
  }

  const uploadImage = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    closeElements();
    onUploadImage();
  }

  return (
		<div className="note-options">
      { activePage !== "trash" &&
        <Fragment>
          <span onClick={openFontSelect} className="font-select-button">
            Font family
            <ArrowDownIcon />
          </span>

          <button onClick={uploadImage} title="Image">
            <ImageIcon />
          </button>

          <button onClick={openPalette} title="Background colour">
            <PaletteIcon />
          </button>

          <button disabled title="Delete">
            <TrashIcon />
          </button>
        </Fragment>
      }

      { activePage === "trash" &&
        <Fragment>
          <button title="Delete forever">
            <TrashIcon />
          </button>

          <button title="Restore">
            <RestoreIcon />
          </button>
        </Fragment>
      }

      { theme.font && <FontSelect /> }
      { theme.palette && <Palette /> }
    </div>
  );
}

export default ButtonPanel;