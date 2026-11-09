import aiKnowledgeBaseDashboard from './Projects/ai-knowledge-base-dashboard.svg';
import bankingDashboard from './Projects/bankingDashboard.png';
import buildingPlayground from './Projects/building-playground.png';
import cloudRestaurant from './Projects/cloud-restaurant.png';
import exam from './Projects/exam.png';
import hospital from './Projects/hospital.png';
import iot from './Projects/iot.png';
import keystone from './Projects/keystone.png';
import leaf from './Projects/leaf.png';
import nextrip from './Projects/nextrip.png';
import projectImg from './Projects/project.png';
import zombie from './Projects/zombie.png';

export const projectThumbnails: Record<string, string> = {
  'ai-knowledge-base-dashboard.svg': aiKnowledgeBaseDashboard,
  'bankingDashboard.png': bankingDashboard,
  'building-playground.png': buildingPlayground,
  'cloud-restaurant.png': cloudRestaurant,
  'exam.png': exam,
  'hospital.png': hospital,
  'iot.png': iot,
  'keystone.png': keystone,
  'leaf.png': leaf,
  'nextrip.png': nextrip,
  'project.png': projectImg,
  'zombie.png': zombie,
};

export const getProjectThumbnail = (key: string): string => {
  return projectThumbnails[key] || projectImg;
};
