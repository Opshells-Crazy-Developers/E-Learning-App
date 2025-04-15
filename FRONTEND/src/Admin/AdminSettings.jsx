import React from "react";
import { Bell, Globe, Moon, Save, Shield, Sun, Users } from "lucide-react";
import AdminLayout from "./AdminLayout";

const AdminSettings = () => {
  const [activeTab, setActiveTab] = React.useState('profile');
  const [isLoading, setIsLoading] = React.useState(true);
  const [formData, setFormData] = React.useState({
    firstName: ' ',
    lastName: '',
    email: '',
    bio: '',
    notifications: {
      enrollments: true,
      completions: false,
      reviews: true,
      payments: true,
      security: true,
      updates: false,
      maintenance: true
    },
    theme: 'light',
    colorScheme: 'blue'
  });

  React.useEffect(() => {
    const loadSettings = async () => {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsLoading(false);
    };

    loadSettings();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (category, item) => {
    setFormData(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [item]: !prev.notifications[item]
      }
    }));
  };

  const handleThemeChange = (theme) => {
    setFormData(prev => ({
      ...prev,
      theme
    }));
  };

  const handleColorChange = (color) => {
    setFormData(prev => ({
      ...prev,
      colorScheme: color
    }));
  };

  const saveChanges = () => {
    // Simulate saving changes
    alert('Settings saved successfully!');
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: Users },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'appearance', label: 'Appearance', icon: Moon },
    { id: 'security', label: 'Security', icon: Shield },
  ];

  // This content will be passed to AdminLayout with full fixed width
  const settingsContent = (
    <div className="w-full bg-gray-50 min-h-screen">
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-1">Settings</h1>
          <p className="text-gray-600">Manage your account preferences</p>
        </div>
      
        <div>
          {/* Fixed width tabs */}
          <div className="flex border-b bg-white rounded-t-md overflow-hidden">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors
                  ${activeTab === tab.id 
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-white' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
      
          {/* Remove responsive grid in favor of fixed layouts */}
          <div className="p-6 bg-white border rounded-b-md shadow-sm">
            {isLoading ? (
              <div className="space-y-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="animate-pulse">
                    <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                    <div className="h-10 bg-gray-200 rounded"></div>
                  </div>
                ))}
              </div>
            ) : (
              <>
                {activeTab === 'profile' && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Profile Picture
                      </label>
                      <div className="flex items-center gap-4">
                        <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                          <Users size={32} />
                        </div>
                        <button className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-50 text-blue-600">
                          Change Photo
                        </button>
                      </div>
                    </div>
                    {/* Fixed width layout with two columns */}
                    <div className="flex gap-4">
                      <div className="w-1/2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="John"
                        />
                      </div>
                      <div className="w-1/2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Bio
                      </label>
                      <textarea
                        name="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-lg h-24 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Tell us about yourself"
                      ></textarea>
                    </div>
                  </div>
                )}

                {activeTab === 'notifications' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Email Notifications</h3>
                      <div className="space-y-4">
                        {[
                          {id: 'enrollments', label: 'New student enrollments'},
                          {id: 'completions', label: 'Course completions'},
                          {id: 'reviews', label: 'Reviews and ratings'},
                          {id: 'payments', label: 'Payment notifications'}
                        ].map((item) => (
                          <label key={item.id} className="flex items-center gap-3">
                            <input 
                              type="checkbox" 
                              checked={formData.notifications[item.id]}
                              onChange={() => handleCheckboxChange('email', item.id)}
                              className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" 
                            />
                            <span>{item.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-4">System Notifications</h3>
                      <div className="space-y-4">
                        {[
                          {id: 'security', label: 'Security alerts'},
                          {id: 'updates', label: 'System updates'},
                          {id: 'maintenance', label: 'Maintenance notifications'}
                        ].map((item) => (
                          <label key={item.id} className="flex items-center gap-3">
                            <input 
                              type="checkbox" 
                              checked={formData.notifications[item.id]}
                              onChange={() => handleCheckboxChange('system', item.id)}  
                              className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" 
                            />
                            <span>{item.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'appearance' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Theme</h3>
                      <div className="flex gap-4">
                        {[
                          {id: 'light', label: 'Light', icon: Sun},
                          {id: 'dark', label: 'Dark', icon: Moon},
                          {id: 'system', label: 'System', icon: Globe}
                        ].map((theme) => (
                          <label key={theme.id} className="relative w-1/3">
                            <input
                              type="radio"
                              name="theme"
                              value={theme.id}
                              checked={formData.theme === theme.id}
                              onChange={() => handleThemeChange(theme.id)}
                              className="sr-only"
                            />
                            <div className={`border rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition
                              ${formData.theme === theme.id 
                                ? 'border-blue-500 ring-2 ring-blue-500 bg-blue-50' 
                                : 'border-gray-200'}`}>
                              <theme.icon className="w-5 h-5 mb-2" />
                              {theme.label}
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-4">Color Scheme</h3>
                      <div className="flex gap-3">
                        {['blue', 'purple', 'green', 'red', 'orange', 'pink'].map((color) => (
                          <button
                            key={color}
                            onClick={() => handleColorChange(color)}
                            className={`w-8 h-8 rounded-full bg-${color}-500 transition transform
                              ${formData.colorScheme === color 
                                ? 'ring-2 ring-offset-2 ring-gray-400 scale-110' 
                                : 'hover:scale-105'}`}
                            aria-label={`${color} theme`}
                          ></button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'security' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Change Password</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Current Password
                          </label>
                          <input
                            type="password"
                            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            New Password
                          </label>
                          <input
                            type="password"
                            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Confirm New Password
                          </label>
                          <input
                            type="password"
                            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="mt-6">
                  <button 
                    onClick={saveChanges}
                    className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition transform hover:translate-y-[-1px]"
                  >
                    <Save className="w-4 h-4" />
                    Save Changes
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <AdminLayout>
      {settingsContent}
    </AdminLayout>
  );
}

export default AdminSettings;