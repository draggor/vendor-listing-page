import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const TagSelect = ({ tags, onChange, value }) => {
  const classes = useStyles();
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <FormControl className={classes.formContrl}>
      <InputLabel htmlFor="tag-select">Category</InputLabel>
      <NativeSelect
        id="tag-select"
        onChange={handleChange}
        value={value}
        variant="filled"
      >
        <option aria-label="None" value="_">
          Show All
        </option>
        {tags.map((tag) => (
          <option key={tag.value} value={tag.value}>
            {tag.displayName}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default TagSelect;
