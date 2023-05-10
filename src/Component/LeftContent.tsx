import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./left.css";
import { useRef, useState } from "react";

function LeftContent() {
  const [text, setText] = useState("");
  const itextareaRef = useRef<any>();

  const clearContent = () => {
    setText(itextareaRef.current.value);
    itextareaRef.current.value = "";
  };

  const undoClick = () => {
    itextareaRef.current.value = text;
  };

  return (
    <div className="left-content">
      <Stack direction="row" spacing={5} sx={{ marginBottom: "3rem" }}>
        <Button
          variant="contained"
          color="success"
          onClick={() => clearContent()}
        >
          Clear Content
        </Button>
        <Button variant="contained" color="success" sx={{ width: "5rem" }}>
          Format
        </Button>
        <Button variant="contained" color="success" sx={{ width: "5rem" }}>
          Copy
        </Button>
        <Button
          variant="contained"
          color="success"
          sx={{ width: "5rem" }}
          onClick={() => undoClick()}
        >
          Undo
        </Button>
      </Stack>
      <textarea id="itextarea" ref={itextareaRef} />
    </div>
  );
}
export default LeftContent;
