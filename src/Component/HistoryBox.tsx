import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  timelineOppositeContentClasses,
} from "@mui/lab";
import "./history.css";

function HistoryBox() {
  const time = "11:00 AM 5th May";
  const text = `"It needs to be used. The MUI team uses Google Analytics in the documentation (among other metrics) to evaluate the usage of each component. A lab component with low usage either means that it isn't fully working yet, or that there is low demand for it.
  It needs to match the code quality of the core components. It doesn't have to be perfect to be part of the core, but the component should be reliable enough that developers can depend on it.
  Each component needs type definitions. It is not currently required that a lab component is typed, but it would need to be typed to move to the core.`;
  const data = new Array(17).fill({ time, text });

  return (
    <div className="timeline-container">
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
          color: "white",
        }}
      >
        {data.map((node, idx) => {
          let time = node.time;
          if (idx == 5) {
            time = "";
          }

          return (
            <TimelineItem key={idx}>
              <TimelineOppositeContent color="white">
                {time}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>{node.text}</TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </div>
  );
}

export default HistoryBox;
