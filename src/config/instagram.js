// Instagram Basic Display API Configuration
// To use real Instagram data, you'll need to:
// 1. Create a Facebook App at https://developers.facebook.com/
// 2. Add Instagram Basic Display product
// 3. Get your App ID and App Secret
// 4. Generate a User Access Token
// 5. Add your access token to environment variables

const INSTAGRAM_CONFIG = {
  // Replace with your Instagram App ID
  APP_ID: process.env.REACT_APP_INSTAGRAM_APP_ID || '',
  
  // Replace with your Instagram App Secret (keep this secure, use environment variables)
  APP_SECRET: process.env.REACT_APP_INSTAGRAM_APP_SECRET || '',
  
  // Replace with your User Access Token
  ACCESS_TOKEN: process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN || '',
  
  // Instagram Basic Display API endpoints
  ENDPOINTS: {
    USER_MEDIA: 'https://graph.instagram.com/me/media',
    MEDIA_FIELDS: 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp'
  }
};

// Function to fetch Instagram posts
export const fetchInstagramPosts = async () => {
  if (!INSTAGRAM_CONFIG.ACCESS_TOKEN) {
    console.warn('Instagram access token not configured. Using sample data.');
    return getSampleData();
  }

  try {
    const response = await fetch(
      `${INSTAGRAM_CONFIG.ENDPOINTS.USER_MEDIA}?fields=${INSTAGRAM_CONFIG.ENDPOINTS.MEDIA_FIELDS}&access_token=${INSTAGRAM_CONFIG.ACCESS_TOKEN}`
    );

    if (!response.ok) {
      throw new Error(`Instagram API error: ${response.status}`);
    }

    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    // Fallback to sample data if API fails
    return getSampleData();
  }
};

// Sample data for development/fallback
const getSampleData = () => {
  return [
    {
      id: "1",
      caption: "🚀 Exploring the frontiers of space biology! Our team is working on groundbreaking research that could shape the future of human space exploration. #SpaceBiology #Bioastronautics #PennEngineering",
      media_type: "IMAGE",
      media_url: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600&h=600&fit=crop",
      permalink: "https://www.instagram.com/p/sample1/",
      timestamp: "2024-01-15T10:30:00+0000"
    },
    {
      id: "2",
      caption: "🧬 Understanding how microgravity affects human physiology is crucial for long-duration space missions. Our research contributes to keeping astronauts healthy! #SpaceMedicine #Research #NASA",
      media_type: "IMAGE",
      media_url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=600&fit=crop",
      permalink: "https://www.instagram.com/p/sample2/",
      timestamp: "2024-01-12T14:20:00+0000"
    },
    {
      id: "3",
      caption: "🤖 AI and machine learning are revolutionizing space medicine. Check out our latest collaboration on real-time health monitoring systems! #AI #SpaceTech #Innovation",
      media_type: "IMAGE",
      media_url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=600&fit=crop",
      permalink: "https://www.instagram.com/p/sample3/",
      timestamp: "2024-01-08T16:45:00+0000"
    },
    {
      id: "4",
      caption: "🦠 Extremophiles teach us about life's incredible adaptability. These organisms could hold keys to understanding life beyond Earth! #Astrobiology #Extremophiles #LifeInSpace",
      media_type: "IMAGE",
      media_url: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=600&h=600&fit=crop",
      permalink: "https://www.instagram.com/p/sample4/",
      timestamp: "2024-01-05T11:15:00+0000"
    },
    {
      id: "5",
      caption: "🛡️ Developing bio-inspired radiation protection for future Mars missions. Nature has amazing solutions we can learn from! #RadiationProtection #BioInspired #Mars",
      media_type: "IMAGE",
      media_url: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=600&h=600&fit=crop",
      permalink: "https://www.instagram.com/p/sample5/",
      timestamp: "2024-01-02T09:30:00+0000"
    },
    {
      id: "6",
      caption: "🧠 The psychological challenges of long-duration spaceflight are as important as the physical ones. Mental health in space matters! #SpacePsychology #MentalHealth #Astronauts",
      media_type: "IMAGE",
      media_url: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=600&h=600&fit=crop",
      permalink: "https://www.instagram.com/p/sample6/",
      timestamp: "2023-12-28T13:20:00+0000"
    }
  ];
};

export default INSTAGRAM_CONFIG; 