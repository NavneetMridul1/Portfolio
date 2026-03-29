import profileData from "@/data/profile.json";
import experienceData from "@/data/experience.json";
import projectData from "@/data/projects.json";
import skillData from "@/data/skills.json";
import achievementData from "@/data/achievements.json";
import smallProjectData from "@/data/small-projects.json";
import schoolingData from "@/data/schooling.json";
import { AboutSection } from "@/components/sections/about";
import { AchievementsSection } from "@/components/sections/achievements";
import { ContactSection } from "@/components/sections/contact";
import { ExperienceSection } from "@/components/sections/experience";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { SchoolingSection } from "@/components/sections/schooling";
import { SiteFooter } from "@/components/sections/site-footer";
import { SmallProjectsSection } from "@/components/sections/small-projects";
import { SkillsSection } from "@/components/sections/skills";
import { TopNav } from "@/components/sections/top-nav";
import type {
  Achievement,
  DeployedProject,
  ExperienceItem,
  Profile,
  Project,
  SchoolingItem,
  SkillGroup,
} from "@/types/content";

const profile = profileData as Profile;
const experience = experienceData as ExperienceItem[];
const projects = projectData as Project[];
const skills = skillData as SkillGroup[];
const achievements = achievementData as Achievement[];
const smallProjects = smallProjectData as DeployedProject[];
const schooling = schoolingData as SchoolingItem[];

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <main>
        <TopNav />
        <HeroSection profile={profile} />
        <AboutSection profile={profile} />
        <SchoolingSection items={schooling} />
        <ExperienceSection items={experience} />
        <ProjectsSection projects={projects} />
        <SmallProjectsSection items={smallProjects} />
        <SkillsSection groups={skills} />
        <AchievementsSection achievements={achievements} />
        <ContactSection
          email={profile.email}
          phone={profile.phone}
        />
      </main>
      <SiteFooter profile={profile} />
    </div>
  );
}
