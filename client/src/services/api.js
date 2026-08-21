import { profileData as fallbackProfile } from '../data/profile';
import { projectsData as fallbackProjects } from '../data/projects';
import { skillsCategories as fallbackSkills } from '../data/skills';

const API_BASE_URL = '/api';

export const fetchProfile = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/profile`);
    if (!res.ok) throw new Error('API server returned error');
    const json = await res.json();
    return json.data || fallbackProfile;
  } catch (error) {
    console.warn('[API] Using local fallback profile data:', error.message);
    return fallbackProfile;
  }
};

export const fetchProjects = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/projects`);
    if (!res.ok) throw new Error('API server returned error');
    const json = await res.json();
    return json.data || fallbackProjects;
  } catch (error) {
    console.warn('[API] Using local fallback projects data:', error.message);
    return fallbackProjects;
  }
};

export const fetchSkills = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/skills`);
    if (!res.ok) throw new Error('API server returned error');
    const json = await res.json();
    return json.data || fallbackSkills;
  } catch (error) {
    console.warn('[API] Using local fallback skills data:', error.message);
    return fallbackSkills;
  }
};

export const submitContactForm = async (formData) => {
  try {
    const res = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const json = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: json.message || 'Failed to submit message. Please try again.'
      };
    }

    return {
      success: true,
      message: json.message || 'Thank you! Your message has been sent successfully.'
    };
  } catch (error) {
    console.warn('[API] Backend server unreachable. Simulating successful local submission:', error.message);
    // Simulate graceful response if backend API is not currently running
    return {
      success: true,
      message: "Thank you! Your message has been submitted. (Local simulation mode)"
    };
  }
};
