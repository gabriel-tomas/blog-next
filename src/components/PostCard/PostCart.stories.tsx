import { StoryFn, type Meta } from "@storybook/react";
import PostCard, { PostCardProps } from ".";

export default {
  title: 'PostCard',
  component: PostCard,
  args: {
    post: {
      "id": 4,
      "attributes": {
        "title": "Notebook para produtividade",
        "slug": "notebook-para-produtividade",
        "cover": {
          "data": {
            "attributes": {
              "name": "pexels-karolina-grabowska-4467738.jpg",
              "formats": {
                "small": {
                  "url": "https://res.cloudinary.com/dgexva2fy/image/upload/v1717267210/small_pexels_karolina_grabowska_4467738_6e4da45325.jpg",
                },
              },
            }
          }
        },
        "author": {
          "data": {
            "attributes": {
              "name": "João",
            }
          }
        },
        "category": {
          "data": {
            "attributes": {
              "name": "Notebooks",
            }
          }
        }
      }
    }
  }
} as Meta;

export const OnlyPostCard: StoryFn = (args: any) => <PostCard {...args} />

export const PostCardWithWrapper300px: StoryFn = (args: any) => (<div style={{ maxWidth: '300px' }}><PostCard {...args} /></div>);
