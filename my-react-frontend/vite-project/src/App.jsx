import { NextUIProvider } from "@nextui-org/react";
import InteractiveAvatar from "./components/InteractiveAvatar";
import './App.css';

function App() {
  return (
    <NextUIProvider>
      <div className="min-h-screen bg-background p-8">
        <InteractiveAvatar />
      </div>
    </NextUIProvider>
  );
}

export default App;
