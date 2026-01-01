import React, { useState, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";

// --- Icons (Clean, stroke-based) ---

// Updated SproutIcon with "Filling Up" Animation
const SproutIcon = ({ className, isFilled, isBreathing }: { className?: string, isFilled?: boolean, isBreathing?: boolean }) => {
  const maskId = React.useId(); 
  const pathData = "M500.216 29.351l-.259-.18c-6.914-4.92-16.501-10.586-27.578-15.388c-22.155-9.584-49.682-12.911-75.307-7.301c-25.641 5.537-49.393 19.942-65.75 37.609c-8.17 8.87-14.637 17.865-18.961 25.111a118.835 118.835 0 0 0-3.096 5.363c-1.5.636-3.019 1.32-4.527 2.106c-5.98 2.97-12.223 6.707-18.178 11.419c-5.983 4.674-11.791 10.167-17.204 16.305c-5.447 6.122-10.313 12.985-14.809 20.169c-4.529 7.181-8.399 14.823-11.885 22.586l-2.544 5.849l-2.288 5.912l-1.138 2.952l-1.017 2.972l-2.018 5.925c-.632 1.976-1.195 3.957-1.79 5.923c-.563 1.971-1.223 3.919-1.695 5.882l-.351 1.356c-2.977-4.441-6.186-8.574-9.602-12.304c-3.897-4.253-8-8.038-12.168-11.384c-8.354-6.688-17.021-11.458-25.014-14.84a105.989 105.989 0 0 0-12.94-4.4l.057-.201h.001v-.001h-.001s-3.876-2.797-10.027-5.934c-6.197-3.259-14.661-6.831-24.249-9.533c-19.173-5.387-42.047-5.064-62.378 2.355c-20.352 7.362-38.179 21.765-49.599 38.017c-5.7 8.156-9.992 16.225-12.727 22.627l-.083.188c-2.706 6.173-.128 13.413 5.868 16.491l.232.119c6.197 3.258 14.661 6.831 24.249 9.533c19.173 5.387 42.047 5.064 62.378-2.355c20.352-7.361 38.179-21.764 49.599-38.017a136.338 136.338 0 0 0 6.776-10.746a72.113 72.113 0 0 1 9.494 3.313c5.337 2.363 11.128 5.642 16.684 10.226c2.769 2.295 24.518 25.017 24.518 51.223a69.483 69.483 0 0 1 1.225 13.53l-.119 17.4l-.253 35.583l-1.357 190.767v.278c.077 10.779 39.11 10.501 39.033-.278l-1.357-190.767l-.1-14.001c.189-.991.285-2.016.273-3.064l-.121-11.022l-.022-2.753l.046-2.894l.099-6.52c.003-2.317.137-4.834.251-7.478c.131-2.642.2-5.433.397-8.324l.659-9.017c.244-3.114.637-6.305.961-9.604c.741-6.577 1.705-13.479 2.98-20.545l.459-2.668l.554-2.659l1.117-5.38c.341-1.819.856-3.584 1.279-5.396c.453-1.8.873-3.624 1.356-5.431l1.556-5.401l.781-2.716l.89-2.674l1.781-5.37l2.002-5.275c2.745-6.993 5.806-13.851 9.405-20.2c3.569-6.36 7.425-12.414 11.731-17.736c4.278-5.345 8.844-10.094 13.524-14.137c4.658-4.083 9.522-7.294 14.173-9.9c1.726-1.022 3.473-1.84 5.162-2.63c6.662 4.506 15.33 9.458 25.182 13.729c22.154 9.584 49.682 12.911 75.307 7.301c25.641-5.538 49.393-19.943 65.75-37.609c8.17-8.871 14.637-17.866 18.961-25.112l.13-.213c4.257-6.977 2.337-16.088-4.368-20.761z";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={`${className} ${isBreathing ? 'animate-breathe' : ''}`}
    >
      <defs>
        <mask id={maskId}>
          <rect x="0" y="0" width="512" height="512" fill="black" />
          <rect 
            x="0" 
            y={isFilled ? "0" : "512"} 
            width="512" 
            height="512" 
            fill="white" 
            className="transition-all duration-[1500ms] ease-out" 
          />
        </mask>
      </defs>
      <path d={pathData} fill="#9B9A97" />
      <path d={pathData} fill="#83bf4f" mask={`url(#${maskId})`} />
    </svg>
  );
};

const Volume2Icon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
  </svg>
);

const CopyIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>
);

const MoreHorizontalIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="1" />
    <circle cx="19" cy="12" r="1" />
    <circle cx="5" cy="12" r="1" />
  </svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const NotionIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <path d="M9 8v8" />
    <path d="M15 8v8" />
    <path d="M9 8l6 8" />
  </svg>
);

const PinIcon = ({ className, fill }: { className?: string; fill?: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fill ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="17" x2="12" y2="22"></line>
    <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"></path>
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const BookOpenIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);

const LightbulbIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
    <path d="M9 18h6"/>
    <path d="M10 22h4"/>
  </svg>
);

const RotateCwIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
  </svg>
);

const FlashIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const LoadingSpinnerIcon = ({ className }: { className?: string }) => (
  <svg className={`animate-spin ${className}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

const ZapIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
);

const BrainIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path></svg>
);

const FeatherIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>
);

// --- Types ---
type Definition = { pos: string; text: string; };
type Example = { en: string; zh: string; };
type WordData = {
  type: "word";
  headword: string;
  original: string;
  phonetic: string;
  contextMeaning?: string;
  definitions: Definition[];
  examples: Example[];
};
type SentenceData = { type: "sentence"; original: string; translation: string; };
type TranslationData = WordData | SentenceData;

// --- Components (Popup Internal) ---

const IconButton = ({ icon: Icon, onClick, active = false, tooltip, disabled = false }: { icon: React.ElementType; onClick?: () => void; active?: boolean; tooltip?: string; disabled?: boolean }) => (
  <button onClick={onClick} disabled={disabled} title={tooltip} className={`p-1.5 rounded transition-colors duration-200 ${active ? "text-black bg-gray-200" : "text-[#9B9A97] hover:text-[#37352F] hover:bg-[#F0F0EF]"} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}><Icon className="w-4 h-4" /></button>
);

const Tag = ({ text }: { text: string }) => (
  <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-medium bg-[#F0F0EF] text-[#787774] border border-[#E0E0E0] select-none">{text}</span>
);

const WordView = ({ data }: { data: WordData }) => {
  const title = data.headword || data.original;
  
  return (
    <div className="flex flex-col gap-5 text-[#37352F]">
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-[#37352F]">{title}</h2>
          <button className="p-1 rounded-full hover:bg-[#F0F0EF] text-[#37352F] transition-colors"><Volume2Icon className="w-5 h-5" /></button>
        </div>
        <div className="mt-1 flex flex-wrap items-center gap-2 text-[#787774] text-sm">
          <span className="font-mono text-[#37352F]">{data.phonetic}</span>
        </div>
      </div>
      {data.contextMeaning && (
        <div className="flex gap-3 p-3 bg-[#F7F7F5] rounded-md border border-[#E9E9E7]">
          <LightbulbIcon className="w-5 h-5 text-[#E68F36] shrink-0 mt-0.5" />
          <div className="flex flex-col gap-1">
             <span className="text-xs font-semibold text-[#787774] uppercase tracking-wide">In Context</span>
             <p className="text-sm font-medium leading-relaxed">{data.contextMeaning}</p>
          </div>
        </div>
      )}
      <div className="space-y-1">
        <h3 className="text-xs font-semibold text-[#9B9A97] uppercase tracking-wider mb-2">Definition</h3>
        {data.definitions.map((def, idx) => (
          <div key={idx} className="flex gap-3 items-baseline py-1"><Tag text={def.pos} /><p className="text-sm leading-6">{def.text}</p></div>
        ))}
      </div>
      <div className="h-px bg-[#E9E9E7] w-full" />
      <div className="space-y-3">
        <div className="flex items-center gap-2 mb-1"><BookOpenIcon className="w-4 h-4 text-[#9B9A97]" /><h3 className="text-xs font-semibold text-[#9B9A97] uppercase tracking-wider">Example</h3></div>
        <ul className="space-y-3">
          {data.examples.map((ex, idx) => (
            <li key={idx} className="text-sm group"><p className="text-[#37352F] leading-snug border-l-2 border-transparent pl-2 group-hover:border-[#E0E0E0] transition-colors duration-200">{ex.en}</p><p className="text-[#787774] mt-1 pl-2 text-xs">{ex.zh}</p></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const SentenceView = ({ data }: { data: SentenceData }) => (
  <div className="flex flex-col gap-3">
    <div className="pl-3 border-l-2 border-[#E9E9E7]"><p className="text-sm text-[#787774] leading-relaxed italic line-clamp-4">"{data.original}"</p></div>
    <div className="h-px bg-[#E9E9E7] w-full" />
    <div className="space-y-1"><h3 className="text-[10px] font-bold text-[#9B9A97] uppercase tracking-wider mb-1">Translation</h3><p className="font-serif text-[15px] text-[#37352F] leading-relaxed">{data.translation}</p></div>
  </div>
);

const TranslationPopup = ({ data, isLoading, onClose, onRetry }: { data: TranslationData | null; isLoading: boolean; onClose: () => void; onRetry?: () => void; }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const [showRetry, setShowRetry] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isLoading) {
      setShowRetry(false);
      timer = setTimeout(() => setShowRetry(true), 3000);
    } else {
      setShowRetry(false);
    }
    return () => clearTimeout(timer);
  }, [isLoading]);

  useEffect(() => { setIsCopied(false); setIsSaved(false); }, [data]);

  const handleCopy = () => { setIsCopied(true); setTimeout(() => setIsCopied(false), 2000); };
  const handleSaveToNotion = () => {
    if (isSaving || isSaved) return;
    setIsSaving(true);
    setTimeout(() => { setIsSaving(false); setIsSaved(true); }, 1500);
  };

  return (
    <div className="w-[400px] bg-white text-left rounded-lg shadow-[rgba(15,15,15,0.05)_0px_0px_0px_1px,rgba(15,15,15,0.1)_0px_3px_6px,rgba(15,15,15,0.2)_0px_9px_24px] overflow-hidden flex flex-col font-sans transition-all duration-200 mx-auto border border-[#EBEbeb]">
      <div className="flex justify-between items-center px-3 py-2 select-none">
        <div className="flex items-center gap-2">
            <div className="flex items-center justify-center p-1.5 rounded transition-colors duration-300 group cursor-pointer hover:bg-[#F0F0EF]">
                <SproutIcon isFilled={isSaved} isBreathing={isSaving} className="w-5 h-5 transition-transform group-hover:scale-110" />
            </div>
        </div>
        <div className="flex items-center gap-1">
          <IconButton icon={PinIcon} active={isPinned} onClick={() => setIsPinned(!isPinned)} tooltip="Pin Popup" />
          <IconButton icon={isSaving ? LoadingSpinnerIcon : (isSaved ? CheckIcon : NotionIcon)} onClick={handleSaveToNotion} active={isSaved} tooltip={isSaved ? "Saved to Notion" : "Save to Notion"} disabled={isSaving} />
          <IconButton icon={isCopied ? CheckIcon : CopyIcon} active={isCopied} onClick={handleCopy} tooltip="Copy" />
          <IconButton icon={MoreHorizontalIcon} tooltip="More" />
          <div className="w-px h-3 bg-[#E0E0E0] mx-1" />
          <IconButton icon={XIcon} onClick={onClose} tooltip="Close" />
        </div>
      </div>
      <div className="px-5 pb-2 pt-2 min-h-[80px] relative">
        {isLoading ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 z-20">
            {showRetry ? (
               <div className="flex flex-col items-center gap-3 animate-in fade-in zoom-in-95 duration-200"><div className="text-[#9B9A97] text-sm font-medium">Request timed out</div><button onClick={() => { setShowRetry(false); if(onRetry) onRetry(); }} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-[#E0E0E0] hover:bg-[#F7F7F5] active:bg-[#EBEBE9] rounded-full shadow-sm text-sm text-[#37352F] transition-all"><RotateCwIcon className="w-3.5 h-3.5" />Retry</button></div>
            ) : (
               <div className="flex space-x-1"><div className="w-2 h-2 bg-[#37352F] rounded-full animate-bounce [animation-delay:-0.3s]"></div><div className="w-2 h-2 bg-[#37352F] rounded-full animate-bounce [animation-delay:-0.15s]"></div><div className="w-2 h-2 bg-[#37352F] rounded-full animate-bounce"></div></div>
            )}
          </div>
        ) : data ? (
          <div className="animate-[fadeIn_0.2s_ease-out]">{data.type === "word" ? <WordView data={data} /> : <SentenceView data={data} />}</div>
        ) : <div className="flex items-center justify-center h-20 text-[#9B9A97] text-sm">Select text to translate</div>}
      </div>
      <div className="px-5 pb-3 flex justify-end"><span className="text-[10px] text-[#C0C0C0] font-medium tracking-wide flex items-center gap-1 select-none"><FlashIcon className="w-2.5 h-2.5 text-[#E68F36] opacity-80" />Powered by Gemini 2.0 Flash</span></div>
    </div>
  );
};

// --- Mock Data ---
const MOCK_WORD: WordData = {
  type: "word",
  headword: "tenacious",
  original: "tenacious",
  phonetic: "/təˈneɪʃəs/",
  contextMeaning: "在此处形容幼苗破土而出时那种不屈不挠、坚持生存的强大意志力。",
  definitions: [{ pos: "adj.", text: "紧握不放的；顽强的；坚韧不拔的" }],
  examples: [{ en: "The tenacious weeds refused to die.", zh: "那些顽强的杂草怎么也除不掉。" }]
};

const MOCK_SENTENCE: SentenceData = {
  type: "sentence",
  original: "The tiny seedling broke through the soil with a tenacious determination to survive and reach for the sunlight.",
  translation: "这棵幼苗以顽强的决心破土而出，努力生存并争取阳光。",
};

// --- Landing Page Components ---

const Navbar = () => (
  <nav className="flex justify-between items-center py-6 px-6 max-w-7xl mx-auto w-full">
    <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-gray-900">
      <img src="/images/icon-48.png" alt="Sprout" className="w-8 h-8" />
      <span>Sprout</span>
    </div>
  </nav>
);

const FeatureCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="bg-[#F7F7F5] p-6 rounded-2xl border border-transparent hover:border-gray-200 transition-all duration-300 group">
    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm text-gray-700 group-hover:text-black group-hover:scale-110 transition-transform">
      <Icon className="w-5 h-5" />
    </div>
    <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
  </div>
);

const DemoShowcase = () => {
  const [mode, setMode] = useState<'word' | 'sentence'>('word');
  
  return (
    <div 
      className="p-8 md:p-12 h-[550px] flex flex-col items-center relative"
    >
        {/* Toggle Controls */}
        <div className="flex gap-2 p-1 bg-gray-100/80 rounded-full mb-12 relative z-20 backdrop-blur-sm border border-gray-200">
            <button 
                onClick={() => setMode('word')}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${mode === 'word' ? 'bg-white text-black shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
            >
                查单词
            </button>
            <button 
                onClick={() => setMode('sentence')}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${mode === 'sentence' ? 'bg-white text-black shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
            >
                译整句
            </button>
        </div>

        {/* Content Area - Absolute positioning for transitions */}
        <div className="relative w-full max-w-5xl flex-1">
             {/* Word Mode Content */}
             <div className={`absolute inset-0 transition-all duration-500 ease-in-out flex flex-col md:flex-row items-start justify-center pt-12 ${mode === 'word' ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 -translate-x-8 pointer-events-none'}`}>
                 <div className="hidden md:block w-[560px] text-left relative z-0 mt-8">
                      <p className="text-2xl font-serif text-gray-300 leading-relaxed">
                         The tiny seedling broke through the soil with a <span className="text-black bg-[#83bf4f]/20 px-1 rounded cursor-text relative border-b-2 border-[#83bf4f]">
                            tenacious
                         </span> determination to survive and reach for the sunlight.
                      </p>
                 </div>
                 <div className="shadow-2xl rounded-lg bg-white relative z-10 -ml-16 -mt-[55px] hover:-translate-y-1 transition-transform duration-300">
                     <TranslationPopup data={MOCK_WORD} isLoading={false} onClose={() => {}} />
                 </div>
             </div>

             {/* Sentence Mode Content */}
             <div className={`absolute inset-0 transition-all duration-500 ease-in-out flex flex-col md:flex-row items-start justify-center gap-8 md:gap-16 pt-12 ${mode === 'sentence' ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-8 pointer-events-none'}`}>
                 <div className="hidden md:block w-[500px] text-left mt-8">
                      <p className="text-2xl font-serif text-gray-300 leading-relaxed">
                         <span className="text-black bg-blue-100/50 px-1 rounded cursor-text relative border-b-2 border-blue-400">
                            The tiny seedling broke through the soil with a tenacious determination to survive and reach for the sunlight.
                         </span>
                      </p>
                 </div>
                 <div className="shadow-2xl rounded-lg bg-white relative z-10 hover:-translate-y-1 transition-transform duration-300">
                     <TranslationPopup data={MOCK_SENTENCE} isLoading={false} onClose={() => {}} />
                 </div>
             </div>
        </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-white text-[#111] selection:bg-[#E3E2E0]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6 max-w-7xl mx-auto flex flex-col items-center text-center overflow-visible">
        <div className="hero-glow animate-fade-in-up"></div>
        
        <div className="animate-fade-in-up">
           <span className="inline-block px-3 py-1 rounded-full bg-[#F0F0EF] text-[#555] text-xs font-medium mb-6 border border-[#E0E0E0]">
              2.0 版本现已发布
           </span>
           <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
             沉浸阅读，无缝生长。
           </h1>
           <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
             告别碎片化查词。在心流中捕捉灵感，<br className="hidden md:block" />让生词在你的第二大脑中自动生根发芽。
           </p>
           
           <div className="flex gap-4 justify-center mb-20">
             <button className="bg-black text-white px-8 py-3.5 rounded-full font-medium text-base hover:bg-gray-800 transition-all shadow-xl shadow-gray-200 hover:shadow-2xl hover:-translate-y-0.5">
               添加到 Chrome
             </button>
           </div>
        </div>

        {/* Hero Visual - The Actual Component */}
        <div className="relative w-full max-w-6xl mx-auto animate-fade-in-up [animation-delay:200ms]">
          {/* Fake Browser Interface */}
          <div className="bg-white rounded-xl shadow-2xl border border-gray-200/60 backdrop-blur-sm overflow-hidden relative">
             <div className="h-10 bg-[#Fbfbfb] border-b border-gray-100 flex items-center px-4 relative">
                <div className="flex gap-1.5 z-10">
                   <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                   <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                   <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-400 font-medium">nytimes.com</div>
             </div>
             
             {/* Content */}
             <DemoShowcase />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 border-y border-gray-100 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6 text-center">
           <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">由顶级 AI 模型驱动</p>
           <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
              <span className="text-xl md:text-2xl font-bold text-[#9CA3AF] tracking-tight">Google Gemini</span>
              <span className="text-xl md:text-2xl font-bold text-[#9CA3AF] tracking-tight">DeepSeek</span>
              <span className="text-xl md:text-2xl font-bold text-[#9CA3AF] tracking-tight">OpenAI</span>
              <span className="text-xl md:text-2xl font-bold text-[#9CA3AF] tracking-tight">Claude</span>
           </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
         <div className="mb-20 max-w-2xl">
            <h2 className="text-4xl font-bold tracking-tight mb-6">为“心流”而生。</h2>
            <p className="text-lg text-gray-500">
               大多数翻译工具都充满了干扰。Sprout 旨在帮助你理解语境，而不会打断你的阅读节奏。
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard 
               icon={BrainIcon}
               title="语境智能"
               desc="不止是翻译单词，更是理解语境。AI 像私教一样为你剖析词源与用法。"
            />
            <FeatureCard 
               icon={ZapIcon}
               title="Notion 同步"
               desc="一键收藏。打造属于你的数字语言花园，随时复习巩固。"
            />
            <FeatureCard 
               icon={FeatherIcon}
               title="极简主义"
               desc="无广告，无打扰。只有纯粹的排版和知识，呈现阅读最美的样子。"
            />
         </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 max-w-7xl mx-auto border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
         <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
            <img src="/images/icon-16.png" alt="Sprout" className="w-5 h-5" />
            <span>Sprout</span>
         </div>
         <div className="text-sm text-gray-400">
            © 2025 Horizon Sprout. Built for lifelong learners.
         </div>
         <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-black">Twitter</a>
            <a href="#" className="hover:text-black">GitHub</a>
            <a href="#" className="hover:text-black">Email</a>
         </div>
      </footer>
    </div>
  );
};

const root = createRoot(document.getElementById("root")!);
root.render(<App />);