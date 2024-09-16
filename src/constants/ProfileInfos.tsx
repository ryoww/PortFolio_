import { IconType } from "react-icons";
import { FaBaby, FaProjectDiagram, FaSchool } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";

export interface ProfileStepsProps {
    title: string;
    description: string;
    icon: IconType;
}

export const steps: ProfileStepsProps[] = [
    {
        title: "2005年1月",
        description: "埼玉県春日部市にて爆誕",
        icon: FaBaby,
    },
    { title: "2020年4月", description: "都立高専 入学", icon: FaSchool },
    {
        title: "2022年下旬",
        description: "機械学習に目覚める",
        icon: FaProjectDiagram,
    },
    { title: "2025年3月", description: "高専卒業予定", icon: FaSchool },
    {
        title: "2025年4月",
        description: "静岡大学情報学部 入学予定",
        icon: HiAcademicCap,
    },
];
