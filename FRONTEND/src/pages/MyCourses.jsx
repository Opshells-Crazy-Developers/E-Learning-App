import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Typography,
  Box,
  Chip,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import SchoolIcon from "@mui/icons-material/School";
import { purple } from "@mui/material/colors";

const courses = [
  { id: 1, title: "React Basics", progress: 100, status: "completed" },
  { id: 2, title: "Node.js Fundamentals", progress: 45, status: "pending" },
  { id: 3, title: "UI/UX Design", progress: 80, status: "pending" },
  { id: 4, title: "MongoDB Mastery", progress: 100, status: "completed" },
];

const MyCourses = () => {
  const [tab, setTab] = useState("all");
  const navigate = useNavigate();

  const filteredCourses =
    tab === "all" ? courses : courses.filter((c) => c.status === tab);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <>
      <Sidebar />

      <Box
        className="ml-64 min-h-screen p-8"
        sx={{
          background: "linear-gradient(to bottom, #f5f3ff, #ffffff)",
        }}
      >
   

        {/* Styled Tabs (same as Profile) */}
        <Tabs
          value={tab}
          onChange={handleTabChange}
          textColor="secondary"
          indicatorColor="secondary"
          sx={{
            marginBottom: 4,
            "& .MuiTab-root": {
              fontWeight: 600,
              textTransform: "none",
              color: purple[500],
              minWidth: 120,
            },
            "& .Mui-selected": {
              color: purple[500],
            },
            "& .MuiTabs-indicator": {
              backgroundColor: purple[500],
            },
          }}
        >
          <Tab label="All" value="all" />
          <Tab label="Pending" value="pending" />
          <Tab label="Completed" value="completed" />
        </Tabs>

        <Grid container spacing={4}>
  {filteredCourses.map((course) => (
    <Grid item xs={12} sm={6} md={4} key={course.id}>
      <Box
        onClick={() => navigate(`/video/${course.id}`)}
        sx={{
          borderRadius: 3,
          p: 3,
          bgcolor: "#ffffff",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          border: "1px solid #f3e8ff",
          cursor: "pointer",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0 8px 30px rgba(126, 34, 206, 0.15)",
            borderColor: "#c084fc",
            transform: "translateY(-4px)",
          },
        }}
      >
        {/* Header: Icon + Title + Status */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Box display="flex" alignItems="center" gap={1}>
            <SchoolIcon sx={{ color: "#a855f7" }} />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {course.title}
            </Typography>
          </Box>
          <Chip
            label={course.status}
            size="small"
            mx = "1"
            sx={{
              bgcolor: course.status === "completed" ? "#bbf7d0" : "#fde68a",
              color: "#1f2937",
              fontWeight: "bold",
              px: 1,
              textTransform: "capitalize",
            }}
          />
        </Box>

        {/* Progress Info */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 1.5 }}
        >
          Progress: {course.progress}%
        </Typography>

        <Box
          sx={{
            backgroundColor: "#e5e7eb",
            borderRadius: "999px",
            height: 8,
            width: "100%",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: `${course.progress}%`,
              borderRadius: "inherit",
              backgroundColor:
                course.status === "completed" ? "#22c55e" : "#8b5cf6",
              transition: "width 0.4s ease-in-out",
            }}
          />
        </Box>
      </Box>
    </Grid>
  ))}
</Grid>

      </Box>
    </>
  );
};

export default MyCourses;
