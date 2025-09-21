import { useState } from 'react';
import { FetchServers } from '../wailsjs/go/main/App';

const App = () => {
  const [servers, setServers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedServer, setSelectedServer] = useState(null);

  const fetchServers = () => {
    setLoading(true);
    FetchServers()
      .then((res) => {
        setServers(res);
      })
      .finally(() => setLoading(false));
  };

  return (
    <main className="select-none min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-800  w-full flex flex-col gap-y-8 items-center justify-center p-6 text-white">
      <h1 className="max-md:text-xl md:text-3xl text-emerald-500 font-bold tracking-wide">
        alt:V Masterlist
      </h1>

      {/* ===== IF NO SERVERS YET ===== */}
      {!servers && !selectedServer && (
        <button
          className={`bg-emerald-600 hover:bg-emerald-500 transition-colors duration-300 min-w-[200px] px-6 py-2 rounded-xl shadow-md shadow-emerald-900 font-semibold ${
            loading && 'animate-pulse cursor-not-allowed'
          }`}
          onClick={fetchServers}
          disabled={loading}
        >
          {loading ? 'Fetching...' : 'Fetch Servers'}
        </button>
      )}

      {/* ===== SERVER LIST VIEW ===== */}
      {servers && !selectedServer && (
        <div className="mt-4 flex flex-col gap-y-3 overflow-y-auto max-h-[500px] w-full max-w-3xl scrollbar-thin scrollbar-thumb-emerald-700 scrollbar-track-zinc-800">
          {servers.map((server, index) => (
            <div
              key={index}
              onClick={() => setSelectedServer(server)}
              className="bg-zinc-800 border border-zinc-700 hover:border-emerald-500 transition-colors duration-300 rounded-xl p-4 flex items-center justify-between shadow-lg cursor-pointer"
            >
              <div className="flex gap-x-4 items-center">
                {server.masterlist_icon_url ? (
                  <img
                    src={server.masterlist_icon_url}
                    alt="Server Icon"
                    className="w-12 h-12 rounded-lg object-cover border border-zinc-700"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-lg bg-zinc-700 flex items-center justify-center text-zinc-400">
                    ?
                  </div>
                )}
                <div className="flex flex-col">
                  <span className="font-medium">{server.name}</span>
                  <span className="text-sm text-zinc-400">
                    {server.playersCount}/{server.maxPlayersCount} Players
                  </span>
                </div>
              </div>
              <span
                className={`text-lg ${
                  server.passworded ? 'text-red-500' : 'text-emerald-500'
                }`}
              >
                {server.passworded ? '🔒' : '🔓'}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* ===== SERVER DETAIL VIEW ===== */}
      {selectedServer && (
        <div className="bg-zinc-800 border border-emerald-500 rounded-xl p-6 w-full max-w-2xl shadow-lg flex flex-col gap-y-4">
          <button
            onClick={() => setSelectedServer(null)}
            className="mb-4 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg font-semibold self-start"
          >
            ← Back to List
          </button>

          <div className="flex items-center gap-x-4">
            {selectedServer.masterlist_icon_url ? (
              <img
                src={selectedServer.masterlist_icon_url}
                alt="Server Icon"
                className="w-16 h-16 rounded-lg object-cover border border-zinc-700"
              />
            ) : (
              <div className="w-16 h-16 rounded-lg bg-zinc-700 flex items-center justify-center text-zinc-400">
                ?
              </div>
            )}
            <div>
              <h2 className="text-2xl font-bold text-emerald-400">{selectedServer.name}</h2>
              <p className="text-zinc-400">{selectedServer.gameMode || 'Unknown Gamemode'}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-6 text-sm">
            <p><span className="font-bold">Players:</span> {selectedServer.playersCount}/{selectedServer.maxPlayersCount}</p>
            <p><span className="font-bold">Language:</span> {selectedServer.language}</p>
            <p><span className="font-bold">Version:</span> {selectedServer.version}</p>
            <p><span className="font-bold">Branch:</span> {selectedServer.branch}</p>
            <p><span className="font-bold">Website:</span> <a href={selectedServer.website} target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">{selectedServer.website}</a></p>
            <p><span className="font-bold">Address:</span> {selectedServer.address}</p>
            <p><span className="font-bold">Public ID:</span> {selectedServer.publicId}</p>
            <p><span className="font-bold">Tags:</span> {selectedServer.tags.join(', ')}</p>
          </div>

          {selectedServer.description && (
            <div className="mt-4">
              <h3 className="font-semibold text-lg mb-2">Description:</h3>
              <p className="whitespace-pre-line text-zinc-300">{selectedServer.description}</p>
            </div>
          )}

          {selectedServer.masterlist_banner_url && (
            <div className="mt-4">
              <img className="rounded-xl" src={selectedServer.masterlist_banner_url}/>
            </div>
          )}
        </div>
      )}
    </main>
  );
};

export default App;
