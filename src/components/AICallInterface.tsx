import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  Mic, 
  MicOff, 
  Phone, 
  PhoneOff, 
  Settings, 
  Calendar,
  Sparkles,
  Volume2,
  VolumeX
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/ai-call-hero.jpg";

const AICallInterface = () => {
  const [isCallActive, setIsCallActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);
  const [aiPrompt, setAiPrompt] = useState("");
  const [calComLink, setCalComLink] = useState("");
  const [callStatus, setCallStatus] = useState<"idle" | "connecting" | "connected" | "ended">("idle");
  const { toast } = useToast();

  const handleStartCall = async () => {
    if (!aiPrompt.trim()) {
      toast({
        title: "Prompt Required",
        description: "Please add an AI prompt before starting the call.",
        variant: "destructive",
      });
      return;
    }

    setCallStatus("connecting");
    // Simulate connection delay
    setTimeout(() => {
      setCallStatus("connected");
      setIsCallActive(true);
      toast({
        title: "Call Connected",
        description: "AI assistant is now active and ready to talk.",
      });
    }, 2000);
  };

  const handleEndCall = () => {
    setCallStatus("ended");
    setIsCallActive(false);
    setIsMuted(false);
    setTimeout(() => setCallStatus("idle"), 1000);
    toast({
      title: "Call Ended",
      description: "The AI call has been terminated.",
    });
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    toast({
      title: isMuted ? "Microphone Enabled" : "Microphone Muted",
      description: isMuted ? "You can now speak to the AI" : "Your microphone is muted",
    });
  };

  const toggleAudio = () => {
    setIsAudioEnabled(!isAudioEnabled);
    toast({
      title: isAudioEnabled ? "Audio Disabled" : "Audio Enabled",
      description: isAudioEnabled ? "AI voice output disabled" : "AI voice output enabled",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div 
        className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80 backdrop-blur-sm" />
        <div className="relative text-center text-white z-10">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
            AI Voice Calling Platform
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Connect with AI-powered voice assistants for seamless conversations and automated calling experiences
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Configuration Panel */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                AI Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="prompt" className="text-base font-medium">
                  AI Assistant Prompt
                </Label>
                <Textarea
                  id="prompt"
                  placeholder="Define your AI assistant's personality, role, and instructions. For example: 'You are a helpful customer service representative for a tech company. Be professional, friendly, and knowledgeable about our products.'"
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  className="mt-2 min-h-[120px]"
                  disabled={isCallActive}
                />
              </div>

              <div>
                <Label htmlFor="calcom" className="text-base font-medium">
                  Cal.com Integration
                </Label>
                <div className="flex gap-2 mt-2">
                  <Input
                    id="calcom"
                    placeholder="Enter your Cal.com booking link"
                    value={calComLink}
                    onChange={(e) => setCalComLink(e.target.value)}
                    disabled={isCallActive}
                  />
                  <Button variant="outline" size="icon" disabled={isCallActive}>
                    <Calendar className="w-4 h-4" />
                  </Button>
                </div>
                {calComLink && (
                  <Badge variant="secondary" className="mt-2">
                    Calendar integration active
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Call Interface */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Voice Call Interface
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-6">
                {/* Call Status */}
                <div className="space-y-2">
                  <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center transition-all duration-300 ${
                    callStatus === "connected" 
                      ? "bg-gradient-to-r from-primary to-accent shadow-[var(--shadow-glow)] animate-pulse" 
                      : callStatus === "connecting"
                      ? "bg-muted animate-pulse"
                      : "bg-muted"
                  }`}>
                    {callStatus === "connected" ? (
                      <Sparkles className="w-8 h-8 text-white" />
                    ) : (
                      <Phone className="w-8 h-8 text-muted-foreground" />
                    )}
                  </div>
                  <p className="text-lg font-medium">
                    {callStatus === "idle" && "Ready to Connect"}
                    {callStatus === "connecting" && "Connecting..."}
                    {callStatus === "connected" && "AI Assistant Active"}
                    {callStatus === "ended" && "Call Ended"}
                  </p>
                </div>

                {/* Call Controls */}
                <div className="flex justify-center gap-4">
                  {!isCallActive ? (
                    <Button 
                      variant="hero" 
                      size="xl" 
                      onClick={handleStartCall}
                      disabled={callStatus === "connecting"}
                      className="px-12"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      {callStatus === "connecting" ? "Connecting..." : "Start AI Call"}
                    </Button>
                  ) : (
                    <div className="flex gap-3">
                      <Button
                        variant={isMuted ? "destructive" : "secondary"}
                        size="lg"
                        onClick={toggleMute}
                      >
                        {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                      </Button>
                      <Button
                        variant={isAudioEnabled ? "secondary" : "destructive"}
                        size="lg"
                        onClick={toggleAudio}
                      >
                        {isAudioEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
                      </Button>
                      <Button
                        variant="destructive"
                        size="lg"
                        onClick={handleEndCall}
                      >
                        <PhoneOff className="w-5 h-5" />
                      </Button>
                    </div>
                  )}
                </div>

                {/* Call Features */}
                <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="w-2 h-2 p-0 rounded-full bg-green-500" />
                    Real-time AI responses
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="w-2 h-2 p-0 rounded-full bg-blue-500" />
                    WebRTC calling
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="w-2 h-2 p-0 rounded-full bg-purple-500" />
                    Voice synthesis
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="w-2 h-2 p-0 rounded-full bg-orange-500" />
                    Calendar integration
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Setup Guide */}
        <Card className="mt-8 shadow-lg">
          <CardHeader>
            <CardTitle>Quick Setup Guide</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg">
                  1
                </div>
                <h3 className="font-semibold">Configure AI Prompt</h3>
                <p className="text-sm text-muted-foreground">
                  Define your AI assistant's personality and instructions
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg">
                  2
                </div>
                <h3 className="font-semibold">Connect Calendar</h3>
                <p className="text-sm text-muted-foreground">
                  Link your Cal.com for seamless scheduling integration
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg">
                  3
                </div>
                <h3 className="font-semibold">Start Calling</h3>
                <p className="text-sm text-muted-foreground">
                  Begin your AI-powered voice conversations
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AICallInterface;