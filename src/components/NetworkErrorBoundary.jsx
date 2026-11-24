import React, { useEffect, useState, Component } from 'react';
import { AlertTriangle, RefreshCw, WifiOff } from 'lucide-react'

// Lightweight top loader bar during route chunk loading with luminous glow
export function TopProgressBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show top loader promptly if navigation is loading
    const timer = setTimeout(() => {
      setVisible(true);
    }, 80);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9990] pointer-events-none">
      <div className="h-[2.5px] w-full bg-transparent overflow-hidden">
        <div className="h-full bg-gradient-to-r from-transparent via-cyan-400 to-teal-300 shadow-[0_0_12px_rgba(6,182,212,0.9)] animate-[topLoader_1.2s_cubic-bezier(0.4,0,0.2,1)_infinite]" />
      </div>
    </div>
  );
}

// Smooth Route Loading Fallback to prevent blank screen flashes
export function RouteLoadingFallback() {
  return (
    <div className="w-full min-h-[75vh] flex flex-col items-center justify-center p-6 relative">
      <TopProgressBar />
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="relative flex items-center justify-center w-14 h-14">
          <div className="absolute inset-0 rounded-full border-2 border-cyan-500/20 border-t-cyan-400 animate-spin" />
          <div className="w-8 h-8 rounded-full bg-cyan-950/40 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.3)] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          </div>
        </div>
        <p className="text-xs font-mono tracking-widest text-cyan-400/70 uppercase animate-pulse">
          Loading Page...
        </p>
      </div>
    </div>
  );
}

// Full Error Boundary for Network Disconnections / Chunk Loading Failures
export class NetworkErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, isOffline: !navigator.onLine };
  }

  static getDerivedStateFromError() {
    return { hasError: true, isOffline: !navigator.onLine };
  }

  componentDidMount() {
    this.handleOnline = () => this.setState({ isOffline: false });
    this.handleOffline = () => this.setState({ isOffline: true, hasError: true });

    window.addEventListener('online', this.handleOnline);
    window.addEventListener('offline', this.handleOffline);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.handleOnline);
    window.removeEventListener('offline', this.handleOffline);
  }

  handleRetry = () => {
    this.setState({ hasError: false });
    window.location.reload();
  };

  render() {
    if (this.state.hasError || this.state.isOffline) {
      return (
        <div className="min-h-[70vh] flex items-center justify-center p-6 text-center">
          <div className="max-w-md w-full p-8 rounded-3xl bg-[#0a1122]/90 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-6 text-amber-400">
              {this.state.isOffline ? <WifiOff size={32} /> : <AlertTriangle size={32} />}
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
              {this.state.isOffline ? "No Internet Connection" : "Connection Interrupted"}
            </h3>
            
            <p className="text-slate-400 text-sm mb-8 leading-relaxed">
              {this.state.isOffline 
                ? "Please check your network settings. Once your connection returns, click retry to load the page."
                : "A network issue occurred while loading this page. Please verify your connection and try again."}
            </p>


            <button
              onClick={this.handleRetry}
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg hover:shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <RefreshCw size={16} />
              Retry Connection
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
