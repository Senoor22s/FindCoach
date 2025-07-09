const API_ENDPOINT = 'https://cloud.appwrite.io/v1';
const PROJECT_ID = '686ce7de001feaafea60';
const API_KEY ='standard_8705d380849bfbb8582cb7da0a1772092f2bce9b268c436e55238b731db2cf1d933717c78c55ec6fab279b874d935d446c4b8781fad61670671f8a4947d3d4d4366eb79d36328ad3d4b794e7ba61a0be557fac86adad49179f6bf4b76170d8a438ecc140b8448b0df78d02bb8e5736b5de814710c3f56a1e6a99db111c33a2da';

export default {
  async signup(context, payload) {
    try {
      const userRes = await fetch(`${API_ENDPOINT}/account`, {
        method: 'POST',
        headers: {
          'X-Appwrite-Project': PROJECT_ID,
          'X-Appwrite-Key': API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: 'unique()',
          email: payload.email,
          password: payload.password,
        }),
      });
      const userData = await userRes.json();
      if (!userRes.ok) {
        throw new Error(userData.message || 'User creation failed');
      }

      const response = await fetch(`${API_ENDPOINT}/account/sessions/email`, {
        method: 'POST',
        headers: {
          'X-Appwrite-Project': PROJECT_ID,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Login failed after signup');
      }

      context.commit('setUser', {
        token: data.$id,
        userId: data.userId,
      });
      localStorage.setItem('token', data.$id);
      localStorage.setItem('userId', data.userId);

    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  async login(context, payload) {
    try {
      const response = await fetch(`${API_ENDPOINT}/account/sessions/email`, {
        method: 'POST',
        headers: {
          'X-Appwrite-Project': PROJECT_ID,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        const error= new Error(data.message || 'Login failed');
        throw error;
      }

      context.commit('setUser', {
        token: data.$id,
        userId: data.userId,
      });
      localStorage.setItem('token', data.$id);
      localStorage.setItem('userId', data.userId);

    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  autoLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    if (token && userId) {
      context.commit('setUser', { token, userId });
    }
  },
  logout(context) {
    context.commit('setUser', {
      token: null,
      userId: null,
    });
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
  }
};
