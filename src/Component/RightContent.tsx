import { Grid } from "@mui/material";
import "./right.css";
import HistoryBox from "./HistoryBox";
import AnalysisBox from "./AnalysisBox";

function RightContent() {
  return (
    <>
      <div className="right-content">
        <Grid container rowSpacing={3}>
          <Grid item xs={12}>
            <AnalysisBox />
          </Grid>
          <Grid item xs={12}>
            <HistoryBox />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default RightContent;
