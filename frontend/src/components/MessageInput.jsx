import { useRef, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { Image, Send, X } from "lucide-react";
import toast from "react-hot-toast";

const MessageInput = () => {
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const { sendMessage } = useChatStore();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!text.trim() && !imagePreview) return;

    try {
      await sendMessage({
        text: text.trim(),
        image: imagePreview,
      });

      // Clear form
      setText("");
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <div className="p-3 sm:p-4 w-full border-t border-base-300/70 bg-base-100/65 backdrop-blur-md">
      {imagePreview && (
        <div className="mb-3 flex items-center gap-3 px-1">
          <div className="relative group">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-20 h-20 object-cover rounded-2xl border border-base-300"
            />
            <button
              onClick={removeImage}
              className="absolute -top-2 -right-2 size-6 rounded-full bg-base-100 border border-base-300
              grid place-items-center shadow-sm"
              type="button"
            >
              <X className="size-3" />
            </button>
          </div>

          <div className="text-sm text-base-content/70 hidden sm:block">
            <p className="font-medium">Image ready to send</p>
            <p className="text-xs">You can add text before sending.</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSendMessage} className="flex items-end gap-2">
        <div className="flex-1 flex items-end gap-2 glass-panel rounded-2xl p-2.5 border border-base-300/70">
          <input
            type="text"
            className="w-full input input-ghost rounded-xl input-sm sm:input-md focus:outline-none"
            placeholder="Write a message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleImageChange}
          />

          <button
            type="button"
            className={`btn btn-circle btn-sm sm:btn-md border-none ${
              imagePreview ? "bg-success/20 text-success" : "bg-base-300/80 text-base-content/60"
            }`}
            onClick={() => fileInputRef.current?.click()}
          >
            <Image size={18} />
          </button>
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-circle btn-sm sm:btn-md shadow-lg shadow-primary/30"
          disabled={!text.trim() && !imagePreview}
        >
          <Send size={18} />
        </button>
      </form>
    </div>
  );
};
export default MessageInput;
