import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./left.css";
import { useRef, useState } from "react";
import { Alert, Dialog } from "@mui/material";

function LeftContent() {
  const [text, setText] = useState("");
  const [open, setAlertOpen] = useState(false);
  const itextareaRef = useRef<any>();

  // Clear the content
  const clearContent = () => {
    setText(itextareaRef.current.value);
    itextareaRef.current.value = "";
  };

  // Copy text from the content
  const onCopy = () => {
    if (itextareaRef.current.value.length <= 0) {
      setAlertOpen(true);
    } else {
      navigator.clipboard.writeText(itextareaRef.current.value);
    }
  };

  // Paste text to the content
  const onPaste = () => {
    navigator.clipboard.readText().then((text) => {
      let text_tmp: string = text;
      while (text_tmp.includes("\n\n\n")) {
        text_tmp = text_tmp.replace("\n\n\n", "\n\n");
      }
      itextareaRef.current.value = text_tmp;
    });
  };

  return (
    <div className="left-content">
      <Dialog open={open} onClose={() => setAlertOpen(false)}>
        <Alert variant="filled" severity="error">
          No content here to be copied.
        </Alert>
      </Dialog>
      <Stack direction="row" spacing={5} sx={{ marginBottom: "3rem" }}>
        <Button variant="contained" color="success" onClick={clearContent}>
          Clear
        </Button>
        <Button variant="contained" color="success" onClick={onCopy}>
          Copy
        </Button>
        <Button variant="contained" color="success" onClick={onPaste}>
          PASTE
        </Button>
      </Stack>
      <textarea id="itextarea" ref={itextareaRef} onDoubleClick={onPaste} />
    </div>
  );
}
export default LeftContent;
