import { useState } from "react";
import cn from "classnames";
import { TextField, MenuItem } from "@mui/material";

import styles from "./styles.module.css";

interface IItems {
  value: string;
  label: string;
}

interface IProps {
  className?: string;
  items: IItems[];
  value: string;
  setValue: (value: string) => void;
  disabled?: boolean;
  styleGrow?: boolean;
  label?: string;
  title?: string;
}

const UiInputSelect: React.FC<IProps> = (props) => {
  const {
    className,
    items,
    value,
    setValue,
    disabled,
    styleGrow,
    label,
    title,
  } = props;

  const [showLabel, setShowLabel] = useState<boolean>(true);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    setValue(event.target.value);
    setValue(value);
    setShowLabel(false);
  };

  const renderInput = (
    <TextField
      className={cn(styles.input, className)}
      select
      value={value}
      onChange={onChange}
      size="small"
      color="info"
      disabled={disabled}
      sx={styleGrow ? { flexGrow: 1 } : { flexGrow: "auto" }}
      label={showLabel && !value ? label : ""}
      slotProps={{
        inputLabel: {
          shrink: false, // Disable automatic label move up
          style: { color: "#a2a2a2" },
        },
      }}
      // defaultValue=""
    >
      {items.map((element) => (
        <MenuItem key={element.value} value={element.value}>
          {element.label}
        </MenuItem>
      ))}
    </TextField>
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

export default UiInputSelect;

// <UiInputSelect
//   label="Select platform"
//   title="Platform"
//   value={platformValue}
//   setValue={(value) => {
//     setPlatformValue(value as Platforms);
//     setIsSuccess(false);
//   }}
//   disabled={isLoading}
//   items={PlatformDataAll}
//   className="input"
// />
