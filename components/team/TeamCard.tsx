import Image from "next/image";
import { TeamMember } from "@/types";
import { Card, CardContent } from "@/components/ui/card";

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
          {/* Avatar */}
          <div className="relative w-24 h-24 rounded-full overflow-hidden bg-muted flex-shrink-0">
            <Image
              src={member.avatar}
              alt={member.name}
              fill
              className="object-cover"
              sizes="96px"
            />
          </div>
          {/* Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-sm font-medium text-primary mb-2">{member.role}</p>
            <p className="text-sm text-muted-foreground">{member.bio}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
