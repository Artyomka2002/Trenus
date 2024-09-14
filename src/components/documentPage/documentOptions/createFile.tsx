import React from 'react';
import { Card, CardContent, Typography, IconButton, Grid, Box } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const DataCard: React.FC = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Grid container alignItems="center" justifyContent="space-between">
          <Typography variant="h6">
            Title
          </Typography>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Grid>
        <Box mt={2}>
          <Typography variant="h4" component="div">
            12,345
          </Typography>
          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <VisibilityIcon color="action" />
            </Grid>
            <Grid item>
              <Typography variant="body2" color="text.secondary">
                15%
              </Typography>
            </Grid>
            <Grid item>
              <ArrowDropUpIcon color="success" />
              {/* Если нужно отобразить уменьшение, используйте ArrowDropDownIcon */}
            </Grid>
            <Grid item>
              <Typography variant="body2" color="text.secondary">
                compared to last week
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DataCard;
