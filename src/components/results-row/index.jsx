import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";

import "./results-row.css";
import { IconButton } from "@material-ui/core";

export default function ResultRow({ row: { variations, word }, booleanQuery }) {
  const [open, setOpen] = useState(false);
  const showCopyMsg = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <div data-test="results-row-container" className="results-row-container">
      {/* show msg that the coping to clipboard works */}
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Copied to clipboard"
        action={
          <>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
      {/* showing the main word */}
      <div data-test="rendering-row-word">
        <p>
          {word} <ArrowForwardIcon />
        </p>
      </div>
      {/* to render the variations related */}
      <div data-test="variations-container" className="variations-container">
        {variations.map((vari) => (
          <CopyToClipboard key={vari} text={vari} onCopy={showCopyMsg}>
            <p className="result-word">{vari}</p>
          </CopyToClipboard>
        ))}
        <CopyToClipboard
          text={variations.join(booleanQuery ? "OR" : ",")}
          onCopy={showCopyMsg}
        >
          <button className="copy-button">
            Copy All
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
}
