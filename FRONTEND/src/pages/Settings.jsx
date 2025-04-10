import React, { useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Switch,
  FormControlLabel,
  Button,
  Divider,
  Grid,
} from "@mui/material";
import Sidebar from "../components/Sidebar"; // make sure path is correct
import { FiShield, FiBell, FiEye, FiSettings } from "react-icons/fi"; // Adding icons for tabs

const primaryPurple = "#9333ea";
const hoverPurple = "#7e22ce";

const Settings = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabChange = (event, newValue) => setTabIndex(newValue);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#f8f7fc" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box
        sx={{
          flex: 1,
          p: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Typography variant="h4" mb={4} fontWeight="bold" sx={{ color: primaryPurple }}>
          Settings
        </Typography>

        {/* Tabs */}
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          sx={{
            mb: 3,
            "& .MuiTab-root": {
              fontWeight: 600,
              textTransform: "none",
              color: "#888",
              "&.Mui-selected": {
                color: primaryPurple,
              },
            },
            "& .MuiTabs-indicator": {
              backgroundColor: primaryPurple,
            },
          }}
        >
          <Tab icon={<FiSettings />} label="General" />
          <Tab icon={<FiShield />} label="Security" />
          <Tab icon={<FiBell />} label="Notifications" />
          <Tab icon={<FiEye />} label="Appearance" />
        </Tabs>

        {/* Tab Content */}
        <Box sx={{ width: "100%", maxWidth: "900px" }}>
          {tabIndex === 0 && (
            <>
              <Typography variant="h6" color={primaryPurple} mb={2}>
                General Preferences
              </Typography>
              <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid item xs={12} sm={6}>
                  <FormControlLabel control={<Switch />} label="Auto Updates" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControlLabel control={<Switch />} label="Auto Save" />
                </Grid>
              </Grid>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: primaryPurple,
                  "&:hover": { backgroundColor: hoverPurple },
                  width: "100%",
                  py: 1.5,
                  fontWeight: 600,
                }}
              >
                Save Changes
              </Button>
            </>
          )}

          {tabIndex === 1 && (
            <>
              <Typography variant="h6" color={primaryPurple} mb={2}>
                Security Settings
              </Typography>
              <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid item xs={12} sm={6}>
                  <FormControlLabel control={<Switch />} label="2FA" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControlLabel control={<Switch />} label="Login Alerts" />
                </Grid>
              </Grid>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: primaryPurple,
                  "&:hover": { backgroundColor: hoverPurple },
                  width: "100%",
                  py: 1.5,
                  fontWeight: 600,
                }}
              >
                Update Security
              </Button>
            </>
          )}

          {tabIndex === 2 && (
            <>
              <Typography variant="h6" color={primaryPurple} mb={2}>
                Notification Settings
              </Typography>
              <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid item xs={12} sm={6}>
                  <FormControlLabel control={<Switch defaultChecked />} label="Email" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControlLabel control={<Switch />} label="Push" />
                </Grid>
              </Grid>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: primaryPurple,
                  "&:hover": { backgroundColor: hoverPurple },
                  width: "100%",
                  py: 1.5,
                  fontWeight: 600,
                }}
              >
                Save Preferences
              </Button>
            </>
          )}

          {tabIndex === 3 && (
            <>
              <Typography variant="h6" color={primaryPurple} mb={2}>
                Appearance
              </Typography>
              <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid item xs={12} sm={6}>
                  <FormControlLabel control={<Switch />} label="Dark Mode" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControlLabel control={<Switch />} label="High Contrast" />
                </Grid>
              </Grid>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: primaryPurple,
                  "&:hover": { backgroundColor: hoverPurple },
                  width: "100%",
                  py: 1.5,
                  fontWeight: 600,
                }}
              >
                Apply
              </Button>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Settings;
