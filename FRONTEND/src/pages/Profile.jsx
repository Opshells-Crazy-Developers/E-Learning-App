import React, { useState, useEffect, useContext } from "react";
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
import Sidebar from "../components/Sidebar";
import { AuthContext } from "../context/AuthContext";

const primaryPurple = "#9333ea";
const hoverPurple = "#7e22ce";
const lightPurple = "#f3e8ff";

// Styled Components
const PageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  background: "linear-gradient(to bottom, #f9f5ff, #ffffff)",
  minHeight: "100vh",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const ProfileWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  padding: theme.spacing(6),
  marginLeft: "240px",
  width: "100%",
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
  color: primaryPurple,
}));

// Main Component
// ... imports stay the same

const Profile = () => {
  const { user, isAuthenticated, currentUser } = useContext(AuthContext);
  const [tabIndex, setTabIndex] = useState(0);

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    address: user?.address || "",
    city: user?.city || "",
    state: user?.state || "",
    zipCode: user?.zipCode || "",
    country: user?.country || "Bangladesh",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        address: user.address || "",
        city: user.city || "",
        state: user.state || "",
        zipCode: user.zipCode || "",
        country: user.country || "Bangladesh",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = async () => {
    const updatedProfile = {
      userId: user.id,
      ...formData,
    };

    try {
      const response = await fetch("/api/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProfile),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Profile updated successfully");
      } else {
        alert(data.message || "Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Something went wrong while updating the profile");
    }
  };

  const getInitials = (name) => {
    if (!name) return "U";
    const nameParts = name.split(" ");
    return nameParts[0]?.charAt(0).toUpperCase() +
      (nameParts.length > 1 ? nameParts[nameParts.length - 1]?.charAt(0).toUpperCase() : "");
  };

  return (
    <PageContainer>
      <Sidebar />
      <ProfileWrapper>
        <LeftPanel elevation={3}>
          <Avatar
            alt={user?.name || "User Profile"}
            sx={{
              width: 100,
              height: 100,
              margin: "0 auto",
              backgroundColor: primaryPurple,
              fontSize: "2rem",
            }}
          >
            {user?.avatar ? (
              <img
                src={user.avatar}
                alt={user.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              getInitials(user?.name)
            )}
          </Avatar>
          <Typography variant="h6" mt={2}>{user?.name || "User Name"}</Typography>
          <Typography variant="caption" color="textSecondary">{user?.role || "User Role"}</Typography>

          <Box display="flex" justifyContent="space-around" mt={3}>
            <Box>
              <Typography variant="h6" sx={{ color: primaryPurple }}>
                {user?.coursesInProgress || "0"}
              </Typography>
              <Typography variant="caption">In Progress</Typography>
            </Box>
            <Box>
              <Typography variant="h6" sx={{ color: "#22c55e" }}>
                {user?.coursesCompleted || "0"}
              </Typography>
              <Typography variant="caption">Completed</Typography>
            </Box>
          </Box>

          <Box mt={4}>
            <Typography variant="subtitle1" fontWeight={600}>Last Achievement</Typography>
            <Box display="flex" justifyContent="center" mt={1} gap={2}>
              🏆 👑 🧗‍♂️ 🥇
            </Box>
          </Box>

          <Box mt={4} textAlign="left">
            <Typography variant="subtitle1" fontWeight={600}>Support</Typography>
            <ul style={{ paddingLeft: 16, marginTop: 8 }}>
              <li>Become a Mentor</li>
              <li>Support</li>
              <li>Invite Friend</li>
              <li style={{ color: "red" }}>Delete Account</li>
            </ul>
          </Box>
        </LeftPanel>

        <RightPanel elevation={3}>
          <Typography variant="h5" mb={3} fontWeight="bold" sx={{ color: primaryPurple }}>
            Profile Settings
          </Typography>

          <Tabs
            value={tabIndex}
            onChange={(e, val) => setTabIndex(val)}
            textColor="secondary"
            indicatorColor="secondary"
            sx={{
              marginBottom: 3,
              "& .MuiTab-root": {
                fontWeight: 600,
                textTransform: "none",
                color: "#666",
              },
              "& .Mui-selected": {
                color: primaryPurple,
              },
              "& .MuiTabs-indicator": {
                backgroundColor: primaryPurple,
              },
            }}
          >
            <Tab label="Personal Details" />
            <Tab label="Notification" />
            <Tab label="Privacy" />
            <Tab label="Payment" />
          </Tabs>

          {tabIndex === 0 ? (
            <Box mt={3}>
              <Grid container spacing={2}>
                {[
                  { name: "name", label: "Full Name" },
                  { name: "email", label: "Email Address" },
                  { name: "address", label: "Address" },
                  { name: "city", label: "City" },
                  { name: "state", label: "State/Province" },
                  { name: "zipCode", label: "Zip Code" },
                ].map((field) => (
                  <Grid item xs={12} sm={6} key={field.name}>
                    <TextField
                      fullWidth
                      label={field.label}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                    />
                  </Grid>
                ))}
                <Grid item xs={12} sm={6}>
                  <TextField
                    select
                    fullWidth
                    name="country"
                    label="Country"
                    value={formData.country}
                    onChange={handleChange}
                  >
                    {["Bangladesh", "India", "USA"].map((country) => (
                      <MenuItem value={country} key={country}>
                        {country}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>

              <Box mt={4} display="flex" gap={2}>
                <Button
                  variant="contained"
                  onClick={handleSaveProfile}
                  sx={{
                    backgroundColor: primaryPurple,
                    "&:hover": { backgroundColor: hoverPurple },
                    borderRadius: "12px",
                    textTransform: "none",
                  }}
                >
                  Save Profile
                </Button>
                <Button
                  variant="outlined"
                  color="inherit"
                  sx={{ borderRadius: "12px", textTransform: "none" }}
                >
                  Cancel
                </Button>
              </Box>
            </Box>
          ) : (
            <Box mt={3}>
              <Typography variant="body1" color="textSecondary">
                Settings for Tab {tabIndex + 1} content goes here.
              </Typography>
            </Box>
          )}
        </RightPanel>
      </ProfileWrapper>
    </PageContainer>
  );
};

export default Profile;
