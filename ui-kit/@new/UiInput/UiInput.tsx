import cn from "classnames";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

import styles from "./styles.module.css";

interface IProps {
  label: string;
  value: string;
  disabled: boolean;
  styleGrow?: boolean;
  type?: string;
  setValue: (value: string) => void;
  className?: string;
  fullWidth?: boolean;
  title?: string;
  multiline?: boolean;
  isClearButton?: boolean;
}

const UiInput: React.FC<IProps> = (props) => {
  const {
    label,
    value,
    disabled,
    styleGrow,
    type = "string",
    className,
    setValue,
    fullWidth,
    title,
    multiline = false,
    isClearButton = true,
  } = props;
  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    setValue(value);
  };

  const onClear = () => {
    setValue("");
  };

  const renderInput = (
    <TextField
      className={cn(styles.input, className)}
      sx={styleGrow ? { flexGrow: 1 } : { flexGrow: "auto" }}
      value={value}
      size="small"
      variant="outlined"
      onChange={onChange}
      color="info"
      disabled={disabled}
      type={type}
      fullWidth={fullWidth}
      multiline={multiline}
      rows={10}
      slotProps={{
        input: {
          endAdornment:
            value && isClearButton ? (
              <InputAdornment position="end">
                <IconButton onClick={onClear}>
                  <ClearIcon />
                </IconButton>
              </InputAdornment>
            ) : null,
        },
      }}
      hiddenLabel
      placeholder={label}
    />
  );

  if (!title) {
    return <>{renderInput}</>;
  }

  return (
    <div className="flex-column">
      <div className={styles.title}>{title}</div>
      {renderInput}
    </div>
  );
};

export default UiInput;

// <UiInput
//   label="Insert your link here"
//   title="Link"
//   value={linkValue}
//   setValue={(value) => setLinkValue(value)}
//   disabled={isLoading}
//   styleGrow={true}
//   // fullWidth={true}
// />
