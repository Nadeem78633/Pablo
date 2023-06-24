import React from "react";

import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

const AllTask = () => {
  return (
    <div>
      <Grid container spacing={2}>
        {/* 1 */}
        <Grid item xs={12} md={6}>
        <Link to="/page" style={{textDecoration:'none'}}>
          <Card style={{color:'white',backgroundColor:'#120e66'}}>
            <CardContent>
            <Typography variant="h6">
              1. Convert Design to Static HTML/CSS Page
              </Typography>
            </CardContent>
          </Card>
          </Link>
        </Grid>
        {/* 2 */}
        <Grid item xs={12} md={6}>
        <Link to="/layout" style={{textDecoration:'none'}}>
          <Card style={{color:'white',backgroundColor:'#120e66'}}>
            <CardContent>
              <Typography variant="h6">
              2. CSS Layout Techniques
              </Typography>
            </CardContent>
          </Card>
          </Link>
        </Grid>
        {/* 3 */}
        <Grid item xs={12} md={6}>
        <Link to="/animation" style={{textDecoration:'none'}}>
          <Card style={{color:'white',backgroundColor:'#120e66'}}>
            <CardContent>
              <Typography variant="h6">
             3. CSS Animation
             </Typography>
            </CardContent>
          </Card>
          </Link>
        </Grid>
        {/* 4 */}
        <Grid item xs={12} md={6}>
        <Link to="/dom" style={{textDecoration:'none'}}>
          <Card style={{color:'white',backgroundColor:'#120e66'}}>
            <CardContent>
              <Typography variant="h6">
              4. JavaScript DOM Manipulation
              </Typography>
            </CardContent>
          </Card>
          </Link>
        </Grid>
        {/* 5 */}
        <Grid item xs={12} md={6}>
        <Link to="/gallery" style={{textDecoration:'none'}}>
          <Card style={{color:'white',backgroundColor:'#120e66'}}>
            <CardContent>
              <Typography variant="h6">
              5. JavaScript Event Handling
              </Typography>
            </CardContent>
          </Card>
          </Link>
        </Grid>
        {/* 5 */}
        <Grid item xs={12} md={6}>
        <Link to="/weather" style={{textDecoration:'none'}}>
          <Card style={{color:'white',backgroundColor:'#120e66'}}>
            <CardContent>
              <Typography variant="h6">
              6. AJAX and API Integration
              </Typography>
            </CardContent>
          </Card>
          </Link>
        </Grid>
        {/* 6 */}
        <Grid item xs={12} md={6}>
        <Link to="/validation" style={{textDecoration:'none'}}>
          <Card style={{color:'white',backgroundColor:'#120e66'}}>
            <CardContent>
              <Typography variant="h6">
              7. Form Validation
              </Typography>
            </CardContent>
          </Card>
          </Link>
        </Grid>
        {/* 7 */}
        <Grid item xs={12} md={6}>
        <Link to="/page" style={{textDecoration:'none'}}>
          <Card style={{color:'white',backgroundColor:'#120e66'}}>
            <CardContent>
              <Typography variant="h6">
              8. JavaScript Framework or Library
              </Typography>
            </CardContent>
          </Card>
          </Link>

        </Grid>
        {/* 8 */}
        <Grid item xs={12} md={6}>
        <Link to="/performance" style={{textDecoration:'none'}}>
          <Card style={{color:'white',backgroundColor:'#120e66'}}>
            <CardContent>
              <Typography variant="h6">
              9. Performance Optimization
              </Typography>
            </CardContent>
          </Card>
          </Link>
        </Grid>
      </Grid>
      <Outlet />
    </div>
  );
};

export default AllTask;
