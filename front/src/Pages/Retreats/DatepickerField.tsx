import { LocalizationProvider } from "@mui/x-date-pickers";
import { DateRangePicker } from "@mui/x-date-pickers-pro";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import moment, { Moment } from "moment";

interface Props {
  startDate: Moment;
  endDate: Moment;
  onSetRange: (range: [moment.Moment | null, moment.Moment | null]) => void;
}

const DatepickerField: React.FC<Props> = ({
  startDate,
  endDate,
  onSetRange,
}) => {
  const handleDateRangeChange = (
    newRange: [moment.Moment | null, moment.Moment | null]
  ) => {
    onSetRange(newRange);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DemoContainer
        components={[
          "DateRangePicker",
          "MobileDateRangePicker",
          "DesktopDateRangePicker",
          "StaticDateRangePicker",
        ]}
      >
        <DemoItem label="בחר את תאריכי הריטריט" component="DateRangePicker">
          <DateRangePicker
            value={[startDate, endDate]}
            onChange={handleDateRangeChange}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
};

export { DatepickerField };
