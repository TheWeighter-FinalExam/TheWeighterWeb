import { styled, TextField } from "@mui/material";

export const TextFieldStyle = styled(TextField)({
  fieldset: {
    borderRadius: "15px",
  },
});

export const ProfileTextFieldStyle = styled(TextField)({
  ".MuiInputBase-input": {
    WebkitTextFillColor: "black",
    color: "black",
    fontSize: "18px",
    padding: 15,
  },
});

export const TextFieldStyleDisabled = styled(TextField)({
  ".MuiInputBase-input.Mui-disabled": {
    WebkitTextFillColor: "black",
    color: "black",
    padding: 10,
  },
  ".MuiInputBase-input": {
    WebkitTextFillColor: "black",
    color: "black",
    padding: 15,
  },
});
