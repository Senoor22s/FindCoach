export default {
  async contactCoach(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message,
      coachId: payload.coachId
    };
    try {
      const response = await fetch('https://cloud.appwrite.io/v1/databases/686ce7f500334f728440/collections/686ce800001290fecf85/documents', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Appwrite-Project': '686ce7de001feaafea60'
        },
        body: JSON.stringify({
          documentId: 'unique()',
          data: newRequest
        })
      });

      const data = await response.json();

      if (!response.ok) {
        const error = new Error(data.message || 'Failed to send request.');
        throw error;
      }

      context.commit('addRequest', newRequest);
    } catch (error) {
      console.error('Fetch error:', error);
      throw error; 
    }
  },
  async fetchRequests(context) {
    try {
      const response = await fetch('https://cloud.appwrite.io/v1/databases/686ce7f500334f728440/collections/686ce800001290fecf85/documents', {
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
      const requests = context.getters.requests;
      requests.splice(0,requests.length,...data.documents.map((doc) => ({
        id: doc.$id,
        coachId: doc.coachId,
        userEmail: doc.userEmail,
        message: doc.message
      })).reverse());  
      context.commit('setRequests', requests);
    } catch (error) {
      console.error('Fetch error:', error);
      throw error; 
    }
  }
}