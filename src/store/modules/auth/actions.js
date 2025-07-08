const API_ENDPOINT = 'https://cloud.appwrite.io/v1';
const PROJECT_ID = '686ce7de001feaafea60';
const API_KEY ='standard_2b50c6654ba710b3b4e7860c2cfa3c0e8e5d78fcebc37670a0976f5887a441859a4031996d1f874a370f14992096a91a232d1f5a1960d655b81fd7eb84d055d99f5c4fe7efd9832000e04f9581f5bcd088671ef624c279477660ff377c88a4cd849207a6bd9de329f9d274a2282679c5728c6ea725d4d66d6d7913f6181d0620';

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
        token: data.secret,
        userId: data.userId,
      });

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
        token: data.secret,
        userId: data.userId,
      });

    } catch (error) {
      console.error(error);
      throw error;
    }
  }
};
