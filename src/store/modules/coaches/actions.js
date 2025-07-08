export default {
  async registerCoach(context, payload) {
    const userId = context.rootGetters['auth/userId'];
    const coachData = {
      firstName: payload.first,
      lastName: payload.last,
      description: payload.desc,
      hourlyRate: payload.rate,
      areas: payload.areas
    };

    try {
      const response = await fetch('https://cloud.appwrite.io/v1/databases/686ce7f500334f728440/collections/686ce83f001e4ecb1bc3/documents', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Appwrite-Project': '686ce7de001feaafea60'
        },
        body: JSON.stringify({
          documentId: userId,
          data: coachData
        })
      });

      const data = await response.json();

      if (!response.ok) {
        const error = new Error(data.message || 'Failed to fetch!');
        throw error;
      }

      context.commit('registerCoach', {
        ...coachData,
        id: userId
      });
    } catch (error) {
      console.error('Fetch error:', error);
      throw error; 
    }
  },

  async setCoaches(context,payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }
    try {
      const response = await fetch('https://cloud.appwrite.io/v1/databases/686ce7f500334f728440/collections/686ce83f001e4ecb1bc3/documents', {
        method: 'GET',
        headers: {
          'X-Appwrite-Project': '686ce7de001feaafea60'
        }
      });
      const data = await response.json();

      if (!response.ok) {
        const error = new Error(data.message || 'Failed to fetch!');
        throw error;
      }

      const coaches = context.getters.coaches;
      coaches.splice(0,coaches.length,...data.documents.map((doc) => ({
        id: doc.$id,
        firstName: doc.firstName,
        lastName: doc.lastName,
        description: doc.description,
        hourlyRate: doc.hourlyRate,
        areas: doc.areas
      })).reverse());  
      context.commit('setCoaches', coaches);
      context.commit('setFetchTimestamp');
    } catch (error) {
      console.error('Fetch error:', error);
      throw error; 
    }
  }
};