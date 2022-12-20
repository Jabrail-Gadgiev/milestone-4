import { useState } from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

function newProperty() {
  let [formState, setFormState] = useState(null);
  let [errorsState, setErrorsState] = useState([]);

  let titleField;
  let descriptionField;
  let imgField;
  let locationField;
  let priceField;

  let formData = new FormData();

  function attachFile(evt) {
    console.log("file data", evt.target.files);
    let files = Array.from(evt.target.files);

    files.forEach(function (fileAttachment, index) {
      formData.append(index, fileAttachment);
    });
  }

  function addProperty() {
    let errors = [];

    if (titleField.value.length === 0) {
      errors.push("Please enter a Title");
    }

    if (descriptionField.value.length === 0) {
      errors.push("Please enter a description for the location");
    }

    if (imgField.value.length === 0) {
      errors.push("Please add an image");
    }

    if (locationField.value.length === 0) {
      errors.push("Please add the location");
    }
    if (priceField.value.length === 0) {
      errors.push("Please enter your price");
    }

    if (errors.length > 0) {
      setFormState("client error");
      setErrorsState(errors);
    } else {
      setFormState("loading");
      setErrorsState([]);

      formData.append("title", titleField.value);
      formData.append("description", descriptionField.value);
      formData.append("img", imgField.value);
      formData.append("price", priceField.value);
      formData.append("location", locationField.value);

      fetch("localhost:3000/property/add", {
        method: "POST",
        body: formData,
      })
        .then(function (backendResponse) {
          return backendResponse.json();
        })
        .then(function (jsonResponse) {
          if (jsonResponse.status === "ok") {
            console.log("backend response /propety/add, jsonResponse");
            setFormState("success");
          } else {
            setFormState("backend error");
            setErrorsState([jsonResponse.message]);
          }
        })
        .catch(function (backendError) {
          console.log("backendError at /propety/add", backendError);
          setFormState("backend error");
        });
    }
  }

  function addListItem(str) {
    return <li>{str}</li>;
  }

  return (
    <Container maxWidth="sm">
      <Box pt={8}>
        <Typography component="h1" variant="h2">
          Add Property
        </Typography>
      </Box>

      <Box mt={4} mb={2}>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <TextField
            inputRef={function (thisElement) {
              titleField = thisElement;
            }}
            label="title"
            required={true}
          />
        </FormControl>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <TextField
            inputRef={function (thisElement) {
              descriptionField = thisElement;
            }}
            label="description"
            required={true}
          />
        </FormControl>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <TextField
            inputRef={function (thisElement) {
              imgField = thisElement;
            }}
            label="img"
            required={true}
          />
        </FormControl>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <TextField
            inputRef={function (thisElement) {
              locationField = thisElement;
            }}
            label="location"
            required={true}
          />
        </FormControl>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <TextField
            inputRef={function (thisElement) {
              priceField = thisElement;
            }}
            label="price"
            required={true}
          />
        </FormControl>
      </Box>

      <Box mt={4} mb={4}>
        <Typography component="p" variant="body1" gutterBottom>
          Upload a picture of the property
        </Typography>

        <br />

        <Button size="small" variant="contained" component="label">
          Upload
          <input
            ref={function (thisElement) {
              imgField = thisElement;
            }}
            onClick={attachFile}
            onChange={attachFile}
            hidden
            label="img"
            accept="image/*"
            multiple
            type="file"
          />
        </Button>
      </Box>

      <Box display="flex">
        {formState !== "loading" && (
          <Button onClick={addProperty} size="large" variant="contained">
            Add Property
          </Button>
        )}

        {formState === "loading" && <CircularProgress />}
      </Box>

      <Box mt={2}>
        {formState === "client error" && (
          <Alert severity="error">
            <ul>{errorsState.map(addListItem)}</ul>
          </Alert>
        )}

        {formState === "backend error" && (
          <Alert severity="error">
            <ul>{errorsState.map(addListItem)}</ul>
          </Alert>
        )}

        {formState === "success" && (
          <Alert severity="success">Successfully added the property!</Alert>
        )}
      </Box>
    </Container>
  );
}

export default newProperty;
