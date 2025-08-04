export interface AppContentBlockProps {
  title?: string;
  image?: string;
  description?: string;
}

export interface AppContentBlockSlots {
  image: [image: AppContentBlockProps['image']];
  title: [title: AppContentBlockProps['title']];
  description: [description: AppContentBlockProps['description']];
}
