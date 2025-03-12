import { Input, Spinner, Tooltip } from "@nextui-org/react";

export default function InteractiveAvatarTextInput({
  label,
  placeholder,
  input,
  onSubmit,
  setInput,
  disabled = false,
  loading = false,
}) {
  function handleSubmit() {
    if (input.trim() === "") {
      return;
    }
    onSubmit();
    setInput("");
  }

  return (
    <Input
      endContent={
        <div className="flex flex-row items-center h-full">
          <Tooltip content="Send message">
            {loading ? (
              <Spinner
                className="text-blue-300 hover:text-blue-200"
                size="sm"
                color="default"
              />
            ) : (
              <button
                type="submit"
                className="focus:outline-none"
                onClick={handleSubmit}
              >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className="text-blue-300 hover:text-blue-200"
                >
                  <path 
                    d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" 
                    fill="currentColor"
                  />
                </svg>
              </button>
            )}
          </Tooltip>
        </div>
      }
      label={label}
      placeholder={placeholder}
      size="sm"
      value={input}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleSubmit();
        }
      }}
      onChange={(e) => setInput(e.target.value)}
      disabled={disabled}
    />
  );
} 