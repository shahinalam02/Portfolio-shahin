import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}