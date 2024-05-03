import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

// have used Autocomplete material ui component for filters 
export default function Filters({
  id,
  placeholder,
  values,
  data,
  handleChange,
}) {
  return (
    <div className="filters">
      <Autocomplete
        sx={{ marginTop: "0 !important", width: "100%" }}
        multiple={values}
        id={id}
        options={data}
        getOptionLabel={(option) => option}
        filterSelectedOptions
        onChange={(_, newValues) => handleChange(id, newValues)}
        renderInput={(params, index) => (
          <TextField
            key={id + index}
            {...params}
            label={placeholder}
            placeholder={placeholder}
          />
        )}
      />
    </div>
  );
}
