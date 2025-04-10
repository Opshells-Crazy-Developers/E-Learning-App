import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  Grid,
  Tabs,
  Tab,
  MenuItem,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

// Wrapper with spacing and margin to accommodate sidebar
const ProfileWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  padding: theme.spacing(6),
  marginLeft: "16rem", // Sidebar width offset
  background: "linear-gradient(to bottom, #f5f3ff, #ffffff)",
  minHeight: "100vh",
  gap: theme.spacing(6),
  [theme.breakpoints.down("md")]: {
    marginLeft: 0,
    padding: theme.spacing(3),
    flexDirection: "column",
  },
}));

const LeftPanel = styled(Paper)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(3),
  borderRadius: 20,
  textAlign: "center",
}));

const RightPanel = styled(Paper)(({ theme }) => ({
  flex: 2,
  padding: theme.spacing(4),
  borderRadius: 24,
  backgroundColor: "#ffffff",
  color: purple[600],
}));

const Profile = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    
    <ProfileWrapper>
      {/* Left Profile Info Panel */}
      <LeftPanel elevation={3}>
        <Avatar
          alt="User Profile"
          src="https://i.pravatar.cc/150?img=12"
          sx={{ width: 100, height: 100, margin: "0 auto" }}
        />
        <Typography variant="h6" mt={2}>
          Martin Nel
        </Typography>
        <Typography variant="caption" color="textSecondary">
          VIP Member
        </Typography>

        <Box display="flex" justifyContent="space-around" mt={3}>
          <Box>
            <Typography variant="h6" sx={{ color: purple[600] }}>
              08
            </Typography>
            <Typography variant="caption">In Progress</Typography>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ color: "#4caf50" }}>
              23
            </Typography>
            <Typography variant="caption">Completed</Typography>
          </Box>
        </Box>

        <Box mt={4}>
          <Typography variant="subtitle1" fontWeight={600}>
            Last Achievement
          </Typography>
          <Box display="flex" justifyContent="center" mt={1} gap={2}>
            🏆 👑 🧗‍♂️ 🥇
          </Box>
        </Box>

        <Box mt={4} textAlign="left">
          <Typography variant="subtitle1" fontWeight={600}>
            Support
          </Typography>
          <ul style={{ paddingLeft: 16, marginTop: 8 }}>
            <li>Become a Mentor</li>
            <li>Support</li>
            <li>Invite Friend</li>
            <li style={{ color: "red" }}>Delete Account</li>
          </ul>
        </Box>
      </LeftPanel>

      {/* Right Profile Settings Panel */}
      <RightPanel elevation={3}>
        <Typography variant="h5" mb={3} fontWeight="bold" sx={{ color: purple[600] }}>
          Profile Settings
        </Typography>

        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          textColor="secondary"
          indicatorColor="secondary"
          sx={{
            marginBottom: 3,
            "& .MuiTab-root": {
              fontWeight: 600,
              textTransform: "none",
              color: purple[600],
            },
            "& .Mui-selected": {
              color: purple[600],
            },
            "& .MuiTabs-indicator": {
              backgroundColor: purple[600],
            },
          }}
        >
          <Tab label="Personal Details" />
          <Tab label="Notification" />
          <Tab label="Privacy" />
          <Tab label="Payment" />
        </Tabs>

        {tabIndex === 0 && (
          <Box mt={3}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Full Name" defaultValue="Mashok Khan" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Email address" defaultValue="hellopixency@gmail.com" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Address" defaultValue="127 Gobadia chittagong, Bangladesh" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="City" defaultValue="Chittagong" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="State/Province" defaultValue="Chittagong" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Zip Code" defaultValue="3200" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField select fullWidth label="Country" defaultValue="Bangladesh">
                  <MenuItem value="Bangladesh">Bangladesh</MenuItem>
                  <MenuItem value="India">India</MenuItem>
                  <MenuItem value="USA">USA</MenuItem>
                </TextField>
              </Grid>
            </Grid>

            <Box mt={4} display="flex" gap={2}>
              <Button variant="contained" sx={{ backgroundColor: purple[600], "&:hover": { backgroundColor: purple[700] } }}>
                Save Profile
              </Button>
              <Button variant="outlined" color="inherit">
                Cancel
              </Button>
            </Box>
          </Box>
        )}

        {tabIndex !== 0 && (
          <Box mt={3}>
            <Typography variant="body1" color="textSecondary">
              This section is under development.
            </Typography>
          </Box>
        )}
      </RightPanel>
    </ProfileWrapper>
  );
};

export default Profile;
