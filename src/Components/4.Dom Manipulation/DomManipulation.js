import React, { useState } from "react";
import {
  TextField,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const DomManipulation = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [dense, setDense] = useState(false);

  const handleInputChange = (e) => {
    setNewItem(e.target.value);
  };

  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  const handleRemoveItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={2} md={2}></Grid>
        <Grid item xs={8} md={8}>
          <Card>
            <CardContent>
              <TextField
                variant="outlined"
                value={newItem}
                onChange={handleInputChange}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                }}
              />
              <Button
                variant="contained"
                onClick={handleAddItem}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "10px auto", // Add margin for vertical centering
                  backgroundColor: "#120e66",
                }}
              >
                Add Item
              </Button>
              <List dense={dense}>
                {items.map((item, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={item} />
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "red" }}
                      onClick={() => handleRemoveItem(index)}
                    >
                      Delete
                    </Button>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2} md={2}></Grid>
      </Grid>
    </>
  );
};

export default DomManipulation;
