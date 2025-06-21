'use client';
import { useProSidebar } from "@/hooks/useSidebar";
import { Sun, Moon } from "lucide-react";
import { useRef } from "react";
import RtlToggle from "@/components/Sidebar/RtlToggle";
import { useDisplay } from "@/context/DisplayContext";

export default function SettingsPage() {
  const { rtl, updateSidebarState } = useProSidebar();
  const { theme, setTheme, bgImage, setBgImage } = useDisplay();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleBgUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setBgImage(url);
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Settings</h2>
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Display</h3>
        <div className="flex flex-col gap-4">

          {/* Theme Switcher (styled as in Sidebar) */}
          <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-100 dark:bg-[#0b2948]">
            <span className="flex items-center gap-2 font-medium">
              {theme === 'dark' ? (
                <Moon className="text-blue-400 w-5 h-5" />
              ) : (
                <Sun className="text-yellow-400 w-5 h-5" />
              )}
              Theme:
            </span>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="px-2 py-1 text-xs bg-blue-500 rounded text-white hover:bg-blue-700 transition"
            >
              {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
          </div>

          {/* RTL Toggle (Sidebar style) */}
          <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-100 dark:bg-[#0b2948]">
            <span className="flex items-center gap-2 font-medium">
              RTL Layout:
            </span>
            <RtlToggle
              checked={rtl}
              onChange={() => updateSidebarState({ rtl: !rtl })}
            />
          </div>

          {/* Sidebar Background (Sidebar style) */}
          <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-100 dark:bg-[#0b2948]">
            <span className="font-medium">Sidebar Background:</span>
            {bgImage && (
              <img src={bgImage} alt="Sidebar Background" className="w-10 h-10 object-cover rounded" />
            )}
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-2 py-1 text-xs bg-blue-500 rounded text-white hover:bg-blue-700 transition"
              type="button"
            >
              {bgImage ? "Change" : "Upload"}
            </button>
            {bgImage && (
              <button
                onClick={() => setBgImage(null)}
                className="px-2 py-1 text-xs bg-gray-300 rounded text-gray-700 hover:bg-gray-400 transition"
                type="button"
              >
                Remove
              </button>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleBgUpload}
            />
          </div>

        </div>
      </section>
    </div>
  );
}
