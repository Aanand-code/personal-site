import { useState, useEffect } from 'react';
import axios from 'axios';
import SongsReveal from '../animation/SongsReveal';

const RecentlyPlayed = () => {
  const [trackIds, setTrackIds] = useState([]);
  const [firstTrack, setFirstTrack] = useState(null);
  const [otherTracks, setOtherTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch tracks
  useEffect(() => {
    const fetchTracks = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          'https://spotify-tracks-fetching-backend.onrender.com/',
          {
            timeout: 9000,
            headers: { 'Content-Type': 'application/json' },
          }
        );

        if (!Array.isArray(response.data)) {
          throw new Error('Invalid data format - expected array');
        }

        const ids = response.data.map((trackUrl) => {
          const url = trackUrl.spotifyUrl;
          return url.split('track/')[1];
        });

        setTrackIds(ids);
        if (ids.length > 0) {
          setFirstTrack(ids[0]);
          setOtherTracks(ids.slice(1, 5));
        }
      } catch (error) {
        console.error('Error fetching tracks:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTracks();
  }, []);

  if (loading) return <div className="p-4 h-[380px]"></div>;
  if (error)
    return <div className="p-4 text-red-500 h-[380px]">Error: {error}</div>;
  if (trackIds.length === 0)
    return <div className="p-4 h-[380px]">No tracks found</div>;

  return (
    <div className="flex flex-row gap-5 p-4 h-[380px]">
      <div className="w-[50%]">
        {firstTrack && (
          <SongsReveal>
            <div>
              <iframe
                src={`https://open.spotify.com/embed/track/${firstTrack}`}
                width="100%"
                height="380"
                allow="encrypted-media"
              />
            </div>
          </SongsReveal>
        )}
      </div>
      <div className="w-[50%] flex flex-col gap-3">
        {otherTracks.map((trackId, index) => (
          <div key={index}>
            <SongsReveal>
              <div>
                <iframe
                  className="rounded-2xl shadow-xl/60 shadow-stone-900/100"
                  src={`https://open.spotify.com/embed/track/${trackId}`}
                  width="100%"
                  height="80"
                  allow="encrypted-media"
                />
              </div>
            </SongsReveal>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyPlayed;
