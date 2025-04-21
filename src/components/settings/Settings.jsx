import React, { useState, useEffect, useContext } from 'react';
import "./settings.css";
import { userContext } from '../login/userContext/userContext';

function Settings() {
  const { setProfilePic } = useContext(userContext);
  const [profilePicture, setProfilePicture] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      setUsername(currentUser.username || '');
      setEmail(currentUser.email || '');
      setProfilePicture(currentUser.profilePicture || null);
    }
  }, []);

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = e => resolve(e.target.result);
      reader.onerror = e => reject(e);
      reader.readAsDataURL(file);
    });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const base64 = await fileToBase64(file);
      setProfilePicture(base64);
      setProfilePic && setProfilePic(base64); // update context immediately
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) return;

    // Update users array
    users = users.map(user => {
      if (user.email === currentUser.email) {
        return {
          ...user,
          username,
          email,
          password: password || user.password,
          profilePicture
        };
      }
      return user;
    });
    localStorage.setItem('users', JSON.stringify(users));

    // Update currentUser
    const updatedCurrentUser = {
      username,
      email,
      profilePicture
    };
    localStorage.setItem('currentUser', JSON.stringify(updatedCurrentUser));
    setProfilePic && setProfilePic(profilePicture); // update context after submit
    alert('Profile updated!');
  };

  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update your Icon</span>
                <span className="settingsUpdateTitle">Delete your Account</span>
            </div>
            <form onSubmit={handleSubmit} className="settingsForm">
                <label htmlFor="">Profile Picture</label>
                <div className="settingsPP">
                    <img src={profilePicture || ""} alt="Profile" />
                    <label htmlFor="fileInput">
                    <i className="settingsPPIcon fa-regular fa-user"></i>
                    </label>
                    <input 
                      type="file" 
                      id='fileInput' 
                      style={{display:"none"}} 
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                </div>
                <label htmlFor="">Username</label>
                <input 
                  type="text" 
                  placeholder='john' 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                />
                <label htmlFor="">Email</label>
                <input 
                  type="email" 
                  placeholder='john@gmail.com' 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
                <label htmlFor="">Password</label>
                <input 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  placeholder="Enter new password or leave blank"
                />
                <button className='settingsSubmit'>Update</button>
            </form>
        </div>
    </div>
  );
}

export default Settings;