import resendBlack from 'public/blog/resend-icon-black.png'
import resendWhite from 'public/blog/resend-icon-white.png'
import resendImage from 'public/blog/sending-email-with-next-15-and-resend-using-server-actions.png'

import { HighlightedPost } from '@/components/blog/highlighted-post'
import { Post } from '@/components/blog/post'
import { Large } from '@/components/typography/large'

const posts = [
  {
    id: 1,
    slug: 'middleware',
    image: resendImage.src,
    title: 'Protecting your digital assets',
    date: new Date(),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },

  {
    id: 2,
    slug: 'post-1',
    title: 'Post 1',
    image: resendWhite.src,
    date: new Date(),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },

  {
    id: 3,
    slug: 'post-2',
    title: 'Post 2',
    image: resendBlack.src,
    date: new Date(),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },

  {
    id: 4,
    slug: 'post-3',
    title: 'Post 3',
    image: resendWhite.src,
    date: new Date(),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },

  {
    id: 5,
    slug: 'post-4',
    title: 'Post 4',
    image: resendBlack.src,
    date: new Date(),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
]

export default function Blog() {
  const [highlightedPost, ...otherPosts] = posts

  return (
    <section className="col-span-7 grid px-8 py-6">
      <div className="flex flex-col gap-4">
        <div className="border-b-2 border-black pb-2">
          <Large>Blog</Large>
        </div>

        <div className="grid min-h-96 grid-cols-12 gap-4">
          <HighlightedPost
            slug={highlightedPost.slug}
            title={highlightedPost.title}
            description={highlightedPost.description}
            date={highlightedPost.date}
            image={String(highlightedPost.image)}
          />

          <div className="col-span-6 flex flex-col">
            <ul className="flex grid-cols-12 flex-col gap-4">
              {otherPosts.map((post) => {
                const { id, slug, title, description, date, image } = post

                return (
                  <Post
                    key={id}
                    slug={slug}
                    title={title}
                    description={description}
                    date={date}
                    image={image}
                  />
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
