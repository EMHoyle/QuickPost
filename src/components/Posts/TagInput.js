import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React, { useEffect, useState } from 'react'
import PropTypes from "prop-types";
import getDummyApiData from '../../helpers/getDummyApiData'

const TagInput = ({ onTagSelected }) => {
  const [availableTags, setAvailableTags] = useState([]);

  useEffect( ()=> {
      const fetchTags = async ()=> {
        const data = await getDummyApiData('tag?limit=228')
        setAvailableTags(data)
      }

      fetchTags()
  }, [])

  const handleTagSelection = (event, tag) => {
    onTagSelected(tag);
  };
  return (
    <Autocomplete
      options={availableTags}
      renderInput={(params) => (
        <TextField {...params} label="Combo box" variant="outlined" />
      )}
      onChange={handleTagSelection}
    />
  );
};

TagInput.propTypes = {
  onTagSubmit: PropTypes.func.isRequired,
};

export default TagInput;