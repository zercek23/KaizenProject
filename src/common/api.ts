const headers = {
  'Content-Type': 'application/json',
  'X-Country-Id': 'TR',
  'X-Language-Id': 'TR',
};

export const fetchTags = () =>
  new Promise(async resolve => {
    try {
      const response = await fetch('https://api.extrazone.com/tags/list', {
        method: 'GET',
        headers: headers,
        // You can include other options like body, mode, cache, etc.
      });

      if (!response.ok) {
        throw new Error('Network request failed');
      }

      const data = await response.json();
      resolve(data);
    } catch (error) {
      console.error('Error:', error);
    }
  });

export const fetchPromotions = () =>
  new Promise(async resolve => {
    try {
      const response = await fetch(
        'https://api.extrazone.com/promotions/list?Channel=PWA',
        {
          method: 'GET',
          headers: headers,
          // You can include other options like body, mode, cache, etc.
        },
      );

      if (!response.ok) {
        throw new Error('Network request failed');
      }

      const data = await response.json();
      resolve(data);
    } catch (error) {
      console.error('Error:', error);
    }
  });

export const fetchPromotionById = (id: string) =>
  new Promise(async resolve => {
    try {
      const response = await fetch(
        `https://api.extrazone.com/promotions?Id=${id}`,
        {
          method: 'GET',
          headers: headers,
          // You can include other options like body, mode, cache, etc.
        },
      );

      if (!response.ok) {
        throw new Error('Network request failed');
      }

      const data = await response.json();
      resolve(data);
    } catch (error) {
      console.error('Error:', error);
    }
  });
