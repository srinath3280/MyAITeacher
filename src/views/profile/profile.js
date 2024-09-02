import React, { useState } from 'react';
import './profile.css';

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({
        phone: '1234567890',
        gender: 'Male',
        birthYear: '01-01-2005',
    });
    const handleEditClick = () => {
        setIsEditing(true);
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData({ ...profileData, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
    };
    return (
        <div className="profile-container">
            <div className="profile-header">
                <div className="avatar"></div>
                <div className="profile-info">
                    <h4>Student</h4>
                    <h2>Raju</h2>
                    <p>MMBG School</p>
                </div>
                <div className="edit-icon"><i class="bi bi-pencil-square"></i></div>
            </div>

            <div className="about-me">
                <h3>About Me</h3>
                <div className="about-me-info">
                    <p><i class="bi bi-geo-alt"></i> Tirupati</p>
                    <p>🎓 MMBG School</p>
                </div>
            </div>

            <div className="private-info">
                <h3>Private info</h3>
                <div className="private-info-details">
                    <div className="private-info-item">
                        <p>Phone</p>
                        <p>Gender</p>
                        <p>Year of birth</p>
                    </div>
                    <div className="private-info-item">
                        <p>{profileData.phone}</p>
                        <p>{profileData.gender}</p>
                        <p>{profileData.birthYear}</p>
                    </div>
                    <div className="private-info-item">
                    </div>
                </div>
                <div className="edit-icon" onClick={handleEditClick}><i class="bi bi-pencil-square"></i></div>
            </div>
            {isEditing && (
                <div className="popup-form">
                    <form onSubmit={handleFormSubmit}>
                        <label>
                            Phone:
                            <input
                                type="text"
                                name="phone"
                                value={profileData.phone}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Gender:
                            <input
                                type="text"
                                name="gender"
                                value={profileData.gender}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Year of birth:
                            <input
                                type="text"
                                name="birthYear"
                                value={profileData.birthYear}
                                onChange={handleInputChange}
                            />
                        </label>
                        <button type="submit">Save</button>
                    </form>
                </div>
            )}
        </div>
    )
}

export default Profile
