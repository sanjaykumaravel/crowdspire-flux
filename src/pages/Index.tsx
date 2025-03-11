
import { Button } from "@/components/ui/button";
import { CampaignCard } from "@/components/CampaignCard";
import { Campaign } from "@/types/campaign";
import { PlusCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Temporary mock data
const mockCampaigns: Campaign[] = [
  {
    id: "1",
    title: "Sustainable Ocean Cleanup Initiative",
    description: "Help us clean the oceans and protect marine life with innovative technology.",
    target: 50000,
    raised: 32000,
    endDate: new Date("2024-06-01"),
    imageUrl: "https://images.unsplash.com/photo-1484291470158-b8f8d608850d?w=800&h=400&fit=crop",
    creator: "Ocean Care Foundation"
  },
  {
    id: "2",
    title: "Green Energy for Rural Communities",
    description: "Bringing renewable energy solutions to underserved rural areas.",
    target: 75000,
    raised: 45000,
    endDate: new Date("2024-05-15"),
    imageUrl: "https://images.unsplash.com/photo-1497435334941-8c899ee9e694?w=800&h=400&fit=crop",
    creator: "Green Future Initiative"
  },
  {
    id: "3",
    title: "Educational Technology for All",
    description: "Providing cutting-edge educational tools to underprivileged schools.",
    target: 30000,
    raised: 28000,
    endDate: new Date("2024-04-30"),
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=400&fit=crop",
    creator: "EduTech Forward"
  }
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-4 py-8 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight fade-in">
            Empower Change Through Crowdfunding
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in">
            Join a community of changemakers and support projects that matter.
          </p>
          <Button 
            size="lg"
            className="fade-in"
            onClick={() => navigate("/create")}
          >
            <PlusCircle className="mr-2 h-5 w-5" />
            Start a Campaign
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCampaigns.map((campaign, index) => (
            <div 
              key={campaign.id}
              className="fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CampaignCard campaign={campaign} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
