import { useState } from "react";
import { ChevronDown, type LucideIcon } from "lucide-react";

interface CollapsProps {
  title: string;
  description?: string; // Tanda tanya artinya deskripsi tidak wajib diisi
  variant?: "primary" | "secondary";
  icon: LucideIcon;
}

export const Collaps: React.FC<CollapsProps> = ({
  title,
  description,
  variant = "primary",
  icon: Icon,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Cek apakah komponen ini punya fungsi collapse atau cuma teks biasa
  const isCollapsible = !!description; 

  const styles = {
    primary: {
      bg: "bg-[#802D43]",
      icon: "text-white",
    },
    secondary: {
      bg: "bg-white",
      icon: "text-[#802D43]",
    },
  };

  const activeStyle = styles[variant];

  return (
    <div className="border-gray-400 border-2 rounded-md shadow-sm border-r-4 border-r-[#802D43] mb-4 overflow-hidden">
      <button
        type="button"
        // Hanya jalankan onClick jika ada deskripsi
        onClick={isCollapsible ? () => setIsOpen(!isOpen) : undefined}
        // Ganti cursor: pointer hanya jika bisa diklik
        className={`w-full flex items-center bg-white transition-all ${
          isCollapsible ? "cursor-pointer hover:bg-gray-50" : "cursor-default"
        }`}
      >
        {/* Icon Box */}
        <div className={`p-4 ${activeStyle.bg} ${activeStyle.icon} flex items-center justify-center min-w-60px`}>
          <Icon size={24} />
        </div>

        {/* Judul */}
        <div className="flex-1 px-4 text-left">
          <span className="text-md font-bold text-gray-700">
            {title}
          </span>
        </div>

        {/* Hanya tampilkan Chevron jika bisa diklik */}
        {isCollapsible && (
          <div className="p-4">
            <ChevronDown
              size={20}
              className={`text-gray-400 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        )}
      </button>

      {/* Konten hanya muncul jika isCollapsible benar dan isOpen benar */}
      {isCollapsible && isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      )}
    </div>
  );
};