
import { Campaign } from "@/types/campaign";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface CampaignCardProps {
  campaign: Campaign;
}

export const CampaignCard = ({ campaign }: CampaignCardProps) => {
  const navigate = useNavigate();
  const progress = (campaign.raised / campaign.target) * 100;
  const daysLeft = Math.ceil((new Date(campaign.endDate).getTime() - new Date().getTime()) / (1000 * 3600 * 24));

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={campaign.imageUrl} 
          alt={campaign.title}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-1">{campaign.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {campaign.description}
        </p>
        <div className="space-y-2">
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between text-sm">
            <span className="font-medium">${campaign.raised.toLocaleString()} raised</span>
            <span className="text-muted-foreground">${campaign.target.toLocaleString()} goal</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <span className="text-sm text-muted-foreground">{daysLeft} days left</span>
        <Button 
          variant="outline"
          onClick={() => navigate(`/campaign/${campaign.id}`)}
        >
          View Campaign
        </Button>
      </CardFooter>
    </Card>
  );
};
