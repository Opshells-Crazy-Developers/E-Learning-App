import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import VerifiedIcon from "@mui/icons-material/Verified";

const DashboardRightContent = () => {
  const stats = [
    { label: "Courses Enrolled", value: 12, icon: <PlayCircleIcon /> },
    { label: "Courses Completed", value: 5, icon: <VerifiedIcon /> },
    { label: "Learning Streak", value: "14 Days", icon: <TrendingUpIcon /> },
  ];

  return (
    <Grid container spacing={4}>
      {stats.map((stat, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              p: 2,
              borderLeft: "5px solid #8b5cf6",
              boxShadow: 2,
            }}
          >
            <div className="text-purple-600 text-3xl">{stat.icon}</div>
            <CardContent>
              <Typography variant="subtitle2" color="textSecondary">
                {stat.label}
              </Typography>
              <Typography variant="h5" fontWeight="bold">
                {stat.value}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default DashboardRightContent;
