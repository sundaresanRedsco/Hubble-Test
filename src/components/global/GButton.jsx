import Button from "@mui/material/Button";
export default function GButton(props) {
  const {
    btnType,
    variant,
    label,
    background,
    color,
    border,
    hoverBackground,
    hoverColor,
    hoverBorder,
    btnStyle,
    btnClassName,
  } = props;
  return (
    <>
      <Button
        variant={btnType === "primary" ? "contained" : variant}
        sx={{
          background:
            btnType === "primary" ? "var(--secondary-color)" : background,
          color: btnType === "primary" ? "var(--white)" : color,
          fontWeight: btnType === "primary" ? "600" : "600",
          border: border,
          textTransform: "initial",
          ...btnStyle,
          "&:hover": {
            background:
              btnType === "primary" ? "var(--tertiary-color)" : hoverBackground,
            color: btnType === "primary" ? "var(--white)" : hoverColor,
            border: hoverBorder,
          },
        }}
        className={btnClassName}
      >
        {label}
      </Button>
    </>
  );
}
