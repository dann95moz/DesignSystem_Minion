import type { StoryObj } from "@storybook/react";

import { Banner } from "../lib/components/Banner";
import Success from "../lib/components/icons/Success";
import Warning from "../lib/components/icons/Warning";
import Error from "../lib/components/icons/Error";
import Info from "../lib/components/icons/Info";
import { LinksControl } from "./utils/commonControls";
import React from "react";

// Definimos un tipo para nuestros iconos

const meta = {
  title: "Components/Banner",
  component: Banner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: "title",
    iconStatus: {
      control: "select",
      options: ["Success", "Warning", "Error", "Info"],
      mapping: {
        Info: <Info />,
        Success: <Success />,
        Warning: <Warning />,
        Error: <Error />,
      },
    },
    primaryLink: LinksControl,
    secondaryLink: LinksControl,
    children: {
      control: "text",
      description: "Banner Content",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
const renderHTML = (html: string): React.ReactNode => {
  const allowedTags = ["b", "i", "em", "strong", "span", "p"];
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const renderNode = (node: Node): React.ReactNode => {
    if (node.nodeType === Node.TEXT_NODE) {
      return node.textContent;
    }
    if (node.nodeType === Node.ELEMENT_NODE && node instanceof HTMLElement) {
      const tagName = node.tagName.toLowerCase();
      if (allowedTags.includes(tagName)) {
        return React.createElement(
          tagName,
          { key: Math.random() },
          Array.from(node.childNodes).map(renderNode)
        );
      }
    }
    return Array.from(node.childNodes).map(renderNode);
  };

  return renderNode(doc.body);
};

type BannerProps = React.ComponentProps<typeof Banner>;

export const Default: Story = {
  args: {
    title: "title",
    iconStatus: <Success />,
    children: <b>texto inicial</b>,
  },
  render: (args: BannerProps) => {
    const content =
      typeof args.children === "string"
        ? renderHTML(args.children)
        : args.children;

    return <Banner {...args}>{content}</Banner>;
  },
};
