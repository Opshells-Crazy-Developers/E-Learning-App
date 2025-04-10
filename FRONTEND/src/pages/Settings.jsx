import React, { useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Paper,
  Switch,
  FormControlLabel,
  Button,
  Divider,
} from "@mui/material";
import Sidebar from "../components/Sidebar"; // make sure path is correct

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
          p: 4,
        }}
      >
        <Paper elevation={3} sx={{ borderRadius: 4, p: 4 }}>
          <Typography variant="h5" mb={3} fontWeight="bold" sx={{ color: primaryPurple }}>
            Settings
          </Typography>

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
            <Tab label="General" />
            <Tab label="Security" />
            <Tab label="Notifications" />
            <Tab label="Appearance" />
          </Tabs>

          <Box>
            {tabIndex === 0 && (
              <>
                <Typography variant="h6" color={primaryPurple}>
                  General Preferences
                </Typography>
                <FormControlLabel control={<Switch />} label="Auto Updates" />
                <FormControlLabel control={<Switch />} label="Auto Save" />
                <Divider sx={{ my: 2 }} />
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: primaryPurple,
                    "&:hover": { backgroundColor: hoverPurple },
                  }}
                >
                  Save Changes
                </Button>
              </>
            )}

            {tabIndex === 1 && (
              <>
                <Typography variant="h6" color={primaryPurple}>
                  Security Settings
                </Typography>
                <FormControlLabel control={<Switch />} label="2FA" />
                <FormControlLabel control={<Switch />} label="Login Alerts" />
                <Divider sx={{ my: 2 }} />
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: primaryPurple,
                    "&:hover": { backgroundColor: hoverPurple },
                  }}
                >
                  Update Security
                </Button>
              </>
            )}

            {tabIndex === 2 && (
              <>
                <Typography variant="h6" color={primaryPurple}>
                  Notification Settings
                </Typography>
                <FormControlLabel control={<Switch defaultChecked />} label="Email" />
                <FormControlLabel control={<Switch />} label="Push" />
                <Divider sx={{ my: 2 }} />
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: primaryPurple,
                    "&:hover": { backgroundColor: hoverPurple },
                  }}
                >
                  Save Preferences
                </Button>
              </>
            )}

            {tabIndex === 3 && (
              <>
                <Typography variant="h6" color={primaryPurple}>
                  Appearance
                </Typography>
                <FormControlLabel control={<Switch />} label="Dark Mode" />
                <FormControlLabel control={<Switch />} label="High Contrast" />
                <Divider sx={{ my: 2 }} />
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: primaryPurple,
                    "&:hover": { backgroundColor: hoverPurple },
                  }}
                >
                  Apply
                </Button>
              </>
            )}
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Settings;
